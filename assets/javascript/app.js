let correct = 0
let incorrect = 0;
let questionNumber = 1;
let counter = 10;
let intervalId;
let timerDiv = $("#timer");
let questionDiv = $("#question");
let answerDiv = $("#answers");
let a = $("#answer1");
let b = $("#answer2");
let c = $("#answer3");
let d = $("#answer4");
let cardCounter = 0;
let triviaCards = [
  {
    q: 'Which Irish author wrote "Picture of Dorian Gray"?',
    a: "James Joyce",
    b: "Oscar Wilde",
    c: "W.B. Yeats",
    d: "Colm Tóibín"
  },
  {
    q:
      "As a protest to Hollywood's portrayal of Native Americans in film, Marlon Brando declined an Academy Award for his performance in what movie?",
    a: "The Godfather",
    b: "A Streetcar Named Desire",
    c: "Apocalypse Now",
    d: "The Young Lions"
  }
];
let correctListCount = 0;
let correctList = ["b", "a"];

$(document).ready(function() {
  timerDiv.hide();
  questionDiv.hide();
  answerDiv.hide();

  // Remove Instructions on button click
  $("#start").on("click", function() {
    $("#start").hide();
    $("#instructions").hide();
    startTrivia();
  });
});

function startTrivia() {
  $("#title").text("Question " + questionNumber);
  timerDiv.show();
  timerDiv.text("Time: " + counter);
  questionDiv.show();
  answerDiv.show();
  questionCycle();
  run();
}

// Counter functions

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  counter--;
  timerDiv.text("Time: " + counter);
  if (counter === 0) {
    console.log("done");
    stop();
    cardCounter++;
  }
}

function stop() {
  clearInterval(intervalId);
}

// Cycle through available questions

function questionCycle() {
  questionDiv.text(triviaCards[cardCounter].q);
  a.text(triviaCards[cardCounter].a);
  a.on("click", function() {
    console.log("a");
    stop();
    if (correctList[correctListCount] === "a") {
        correct ++;
        correctListCount ++;
        a.css('background-color', 'green');
    } else {
        incorrect ++;
        a.css('background-color', 'red');
        
    }
    cardCounter++;
    questionNumber++;
  });
  b.text(triviaCards[cardCounter].b);
  b.on("click", function() {
      stop();
    console.log("b");
    if (correctList[correctListCount] === "b") {
        correct ++;
        correctListCount ++;
        b.animate({ background: 'green'});
    } else {
        incorrect ++;
        b.animate({ background: 'red'});
    }
    cardCounter++;
    questionNumber++;
  });
//   c.text(triviaCards[cardCounter].c);
//   c.on("click", function() {
//     console.log("c");
//   });
//   d.text(triviaCards[cardCounter].d);
//   d.on("click", function() {
//     console.log("d");
//   });
}
