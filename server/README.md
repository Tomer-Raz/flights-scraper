# flights-scraper
A node.js tool that helps you scrape flights from kiwi.com with ease and find cheap deals fast (instructions below).
For example, I managed to find this flight (roundtrip) from Tel Aviv to London for only 77$. The average price for this destination at summer is around 250$.

![screen-capture](https://user-images.githubusercontent.com/101174307/213028664-a928426c-7802-4247-a1e9-1cc1fd004fcb.jpg)

# How to run
First of all, decide what are the parameters you would like to set:
Do you want a to fly to a certain destination or to search all destinations and find the best price?
What is the maximum amount you want to spend?
Would you like to add a trolly or a baggage?
Would you like a direct flight only?
Would you like to fly in the upcoming weeks or the next months?
For how many weeks would you like to search the flights? (obviously it won't run forever)
On what day of the week would you like to fly?
etc.

After planning your trip in your head, go to the constants.js file and start editing it by changing the values.

Open terminal and type 'npm install'.

Run the script by typing in the terminal 'node .\index.js'

Let the program run, grab a coffee in the meantime (the search takes 2-3 minutes on average) and enjoy!

The results will appear as screenshots (png files) inside the folder.
