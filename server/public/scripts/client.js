console.log('client.js sourced');

$( document ).ready( onReady );

let jokes;

function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on('click', handleJokes)
    getJokes();
}

function handleJokes(){
    console.log('made it to handleJokes fn');
    
} // end handleJokes fn

function getJokes(){
    console.log('made it to getJokes fn');
    $.ajax({
        method: 'GET',
        url: '/jokes'
    }).then(function (response){
        response.sendStatus(200)
    }) // end .then
} // end getJokes fn