import playwright from 'playwright';
import { addDays, addMonths, nextSunday, nextMonday, nextTuesday, nextWednesday, nextThursday, nextFriday, nextSaturday, format } from 'date-fns';
import { DEPARTURE_CITY, DEPARTURE_CITY_URL_PARAM, PRICE_THRESHOLD, NUMBER_OF_WEEKENDS_TO_SEARCH, CURRENCY_SYMBOL, DEPARTURE_DAY, RETURN_DAY, MONTHS_DELAY, DIRECT_FLIGHT, DEFAULT_TIMEOUT } from './constants.js'

const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const daysOfWeekFunctions = {
    sunday: nextSunday,
    monday: nextMonday,
    tuesday: nextTuesday,
    wednesday: nextWednesday,
    thursday: nextThursday,
    friday: nextFriday,
    saturday: nextSaturday
  };

const formatDate = (date) => format(date, 'yyyy-MM-dd');
const getUpcomingWeekends = () => {
    const weekends = [];
    let currentDate = daysOfWeekFunctions[DEPARTURE_DAY.toLowerCase()](addMonths(new Date(), MONTHS_DELAY));
    while (weekends.length < NUMBER_OF_WEEKENDS_TO_SEARCH) {
        const firstFlight = formatDate(currentDate);
        const secondFlight = formatDate(addDays(currentDate, (daysOfWeek.indexOf(RETURN_DAY.toLowerCase()) - daysOfWeek.indexOf(DEPARTURE_DAY.toLowerCase()) + 7) % 7));
        weekends.push({ firstFlight, secondFlight });
        currentDate = addDays(currentDate, ((daysOfWeek.indexOf(RETURN_DAY.toLowerCase()) - daysOfWeek.indexOf(DEPARTURE_DAY.toLowerCase()) + 7) % 7) + 1);
    }
    return weekends;
}
const directFlight = DIRECT_FLIGHT ? "?stopNumber=0~true" : "";
const timeout = DEFAULT_TIMEOUT * 1000;
const main = async () => {
    const browser = await playwright.chromium.launch({ headless: false });
    const page = await browser.newPage();
    const upcomingWeekends = getUpcomingWeekends(NUMBER_OF_WEEKENDS_TO_SEARCH);

    let cookiesAccepted = false;
    for (const { firstFlight: from, secondFlight: to } of upcomingWeekends) {
        await page.goto(`https://www.kiwi.com/en/search/tiles/${DEPARTURE_CITY_URL_PARAM}/anywhere/${from}/${to}${directFlight}&sortAggregateBy=price`);
        await page.waitForTimeout(timeout);

        if (!cookiesAccepted) {
            await page.locator('#cookies_accept').click();
            cookiesAccepted = true;
            await page.waitForTimeout(timeout);

            // Set currency to USD
            await page.locator('[data-test=RegionalSettingsButton]').click();
            await page.waitForTimeout(timeout);
            await page.selectOption('[data-test=CurrencySelect]', 'usd');
            await page.waitForTimeout(timeout);
            await page.locator('text=Save & continue').click();
        }

        const cityCardLocator = page.locator('[data-test=PictureCard]');
        const cityCardsCount = await cityCardLocator.count();

        for (let i = 0; i < cityCardsCount; i++) {
            const currentCityCardLocator = cityCardLocator.nth(i);
            const textContent = await currentCityCardLocator.textContent();
            const price = Number(textContent.substring(textContent.indexOf(CURRENCY_SYMBOL) + 1));
            if (price < PRICE_THRESHOLD) {
                await currentCityCardLocator.click();
                await page.waitForTimeout(timeout);

                await page.waitForSelector('text=Cheapest');
                await page.locator('text=Cheapest  >> nth=0').click();
                await page.waitForTimeout(timeout);

                const city = textContent.substring(textContent.indexOf(DEPARTURE_CITY) + DEPARTURE_CITY.length, textContent.indexOf('From')).replaceAll(' ', '-');
                const cheapestFlightCardLocator = page.locator('[data-test=ResultCardWrapper]').first();
                const actualPriceWithDollarSign = await cheapestFlightCardLocator.locator('[data-test=ResultCardPrice] > div:nth-child(1)').textContent();

                const actualPrice = Number(actualPriceWithDollarSign.replace(CURRENCY_SYMBOL, ''));
                if (actualPrice < PRICE_THRESHOLD) {
                    await cheapestFlightCardLocator.screenshot({ path: `(${city})--(${actualPrice}$)--(${from.slice(5)} to ${to.slice(5)}).png` });
                }

                await page.goto(`https://www.kiwi.com/en/search/tiles/${DEPARTURE_CITY_URL_PARAM}/anywhere/${from}/${to}${directFlight}&sortAggregateBy=price`);;
                await page.waitForTimeout(timeout);
            }
        }
    }
    await browser.close();
}
main();