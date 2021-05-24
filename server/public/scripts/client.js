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
        console.log('POST /jokes SUCCESSFUL', response);
        
        // clear inputs
        $('#whoseJokeIn').val('');
        $('#questionIn').val('');
        $('#punchlineIn').val('');

        // Refresh and re-render jokes
        getJokes();

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
        
        // render jokes to the DOM
        $('#outputDiv').empty();
        for(let joke of response){
            $('#outputDiv').append(`
                <li>
                ${joke.whoseJoke} ${joke.jokeQuestion} ${joke.punchLine}
                </li>
            `); // end appendage
        } // end for loop

    }) // end .then
} // end getJokes fn