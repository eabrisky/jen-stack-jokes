console.log('client.js sourced');

$( document ).ready( onReady );

let jokes;

function onReady() {
    console.log('DOM ready - client');
    $('#addJokeButton').on('click', handleJokes)

    // get existing jokes from server on page load
    getJokes();
}

function handleJokes(){
    console.log('made it to handleJokes fn - client');

    const whoseJoke = $('#whoseJokeIn').val();
    const jokeQuestion = $('#questionIn').val();
    const punchLine = $('#punchlineIn').val();
    
    $.ajax({
        method: 'POST',
        url: '/jokes',
        data: {
            whoseJoke: whoseJoke,
            jokeQuestion: jokeQuestion,
            punchLine: punchLine
        }
    }).then(function (response){

    }) // end .then
    .catch(err => {
        console.log('POST /jokes FAILED', err);
    })
} // end handleJokes fn

function getJokes(){
    console.log('made it to getJokes fn - client');
    $.ajax({
        method: 'GET',
        url: '/jokes'
    }).then(function (response){
        // so we know we got here, at least
        console.log('in /jokes GET - client', response);
    }) // end .then
} // end getJokes fn