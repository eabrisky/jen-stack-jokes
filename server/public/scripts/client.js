console.log('client.js sourced');

$( document ).ready( onReady );

// declare global variable to uhhhh wait i don't think i need to do this
// let jokes;

function onReady() {
    console.log('DOM ready - client');

    // C L I C K   L I S T E N E R
    $('#addJokeButton').on('click', handleJokes)

    // get existing jokes from server on page load
    getJokes();
}

function handleJokes(){
    console.log('made it to handleJokes fn - client');

    // assign input values to variables for the data object
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
        
        // empty jokes container
        // so we don't keep reposting old jokes with new ones
        $('#outputDiv').empty();

        // render new joke on DOM
        for(let joke of response){
            $('#outputDiv').append(`
                <li>
                "${joke.jokeQuestion} ${joke.punchLine}" - ${joke.whoseJoke}
                </li>
            `); // end appendage
        } // end for loop

    }) // end .then
} // end getJokes fn