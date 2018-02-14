
let correct;
let incorrect;
let questionNumber = 1;
let counter = 10;
let intervalId;
let timerDiv = $('#timer');
let questionDiv = $('#question');
let answerDiv = $('#answers');
let q1 = {
    q: 'Which Irish author wrote "Picture of Dorian Gray"?', 
    a: 'James Joyce',
    b: 'Oscar Wilde',
    c: 'W.B. Yeats',
    d: 'Colm Tóibín'
};


$( document ).ready(function() {
    timerDiv.hide();
    questionDiv.hide();
    answerDiv.hide();
    
   // Remove Instructions on button click
    $('#start').on('click', function() {
        $('#start').hide();
        $('#instructions').hide();
        startTrivia();
    })
})

function startTrivia() {
    $('#title').text('Question ' + questionNumber);
    timerDiv.show();
    timerDiv.text('Time: ' + counter);
    questionDiv.show();
    questionDiv.text(q1.q);
    answerDiv.show();
    answerDiv.html(q1.a + '<br>' + q1.b + '<br>'+ q1.c + '<br>' + q1.d);
    run();
}

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000)
}

function decrement() {
    counter -- ;
    timerDiv.text('Time: ' + counter);
    if (counter === 0) {
        console.log('done');
        stop();
    }
}

function stop() {
    clearInterval(intervalId);
}


