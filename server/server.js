const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const { response } = require('express');
const PORT = 5000;

// use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));

let jokes = [
  {
    whoseJoke: "Danny",
    jokeQuestion: "Why do scuba divers fall backwards out of boats?",
    punchLine: "If they fell forwards they’d still be in the boat!"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?"
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs!"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "I went to the zoo the other day, it had one dog...",
    punchLine: "It was a shih tzu."
  }
]; // end jokes array

// serve back static files to express
app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log('server running on: ', PORT);
}); // end spin up server

app.get('/jokes', (req, res) => {
  console.log('in get numbers - server');

  // send existing joke array from server to /jokes
  res.send(jokes);
}) // end app.get

app.post('/jokes', (req, res) => {
  console.log('POST /jokes - server', req.body);
  
  // assign req.body (data object from client) to variables
  const whoseJoke = req.body.whoseJoke;
  const jokeQuestion = req.body.jokeQuestion;
  const punchLine = req.body.punchLine;

  // put new variables in object
  let newJoke = {
    whoseJoke: whoseJoke,
    jokeQuestion: jokeQuestion,
    punchLine: punchLine
  }; // end newJoke object

  // push newJoke to jokes array
  jokes.push(newJoke);

  // send created status on server
  res.sendStatus(201);
  
}) // end app.post