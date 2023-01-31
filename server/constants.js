// day of departure
export const DEPARTURE_DAY = 'friday';

// day of return
export const RETURN_DAY = 'tuesday';

// only direct flights
export const DIRECT_FLIGHT = true;

// add trolly?
export const ADD_TROLLY = false;

// add baggage?
export const ADD_BAGGAGE = false;

// number of months from now (to start the search). if set to 0, the search will start from today
export const MONTHS_DELAY = 4;

// city of departure
export const DEPARTURE_CITY = 'Tel Aviv';

// city-country, example: madrid-spain, london-united-kingdom
export const DEPARTURE_CITY_URL_PARAM = 'tel-aviv-israel';

// city of return - example: London. search all destinations with 'anywhere'
export const RETURN_CITY = 'Madrid';

// city-country, example: madrid-spain, london-united-kingdom
export const RETURN_CITY_URL_PARAM = 'madrid-spain';

// time (in seconds) between requests (so you will not get blocked by the server)
export const DEFAULT_TIMEOUT = 5;

// the currency you want to pay in
export const CURRENCY_SYMBOL = '$';

// maximum price you want to pay (for both flights combined)
export const PRICE_THRESHOLD = 290;

// number of weekends from now forward to search
export const NUMBER_OF_WEEKENDS_TO_SEARCH = 8;