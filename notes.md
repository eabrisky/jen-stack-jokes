JOKE BOOK APP

build up the server around the data in server.js
display current jokes to DOM
add ability for users to add their own jokes
    display those jokes, as well

data structure

    array of objects
        three properties
            whoseJoke
            jokeQuestion
            punchLine

            let jokes = [
  {
    whoseJoke: "Luke",
    jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?"
  }
];

on page load
    all jokes displayed on the DOM
        displayed below inputs
    user should be able to add jokes using input form
    after joke is added (submitted), jokes displayed on DOM should reflect new data

TEST OFTEN
COMMIT OFTEN