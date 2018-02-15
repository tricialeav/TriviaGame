let correct = 0;
let incorrect = 0;
let questionNumber = 1;
let counter = 10;
let intervalId;
let runTimer;
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
  },
  {
    q:
      "What is the stage name of the member of Public Enemy who would later have a reality dating show?",
    a: "Chuck D",
    b: "DJ Lord",
    c: "Professor Griff",
    d: "Flavor Flav"
  },
  {
    q: "In which country did cheddar cheese originate?",
    a: "Switzerland",
    b: "USA",
    c: "England",
    d: "France"
  },
  {
    q: "According to Greek mythology, who was the god of wine?",
    a: "Zeus",
    b: "Artemis",
    c: "Dionysos",
    d: "Hades"
  },
  {
    q:
      "Jackson Pollock was an influential abstract expressionist painter from what country?",
    a: "USA",
    b: "Russia",
    c: "Canada",
    d: "France"
  },
  {
    q: "What is the proper term for a group of parrots?",
    a: "School",
    b: "Pandemonium",
    c: "Murder",
    d: "Flock"
  },
  {
    q:
      "What was the first console video game that allowed the game to be saved?",
    a: "Super Mario",
    b: "Street Fighter",
    c: "Pong",
    d: "The Legend of Zelda"
  },
  {
    q:
      "What is the name for the specialized nerve cell that transmits information chemically and electrically throughout the body?",
    a: "Dendrites",
    b: "Electron",
    c: "Membranes",
    d: "Neuron"
  },
  {
    q:
      "Who was the original singer for the American punk rock band The Misfits?",
    a: "Henry Rollins",
    b: "Glenn Danzig",
    c: "Marky Ramone",
    d: "Britney Spears"
  }
];
let answersCounter = 0;
let answersList = ["b", "a", "d", "c", "c", "a", "b", "d", "d", "b"];

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

// Start Game

function startTrivia() {
  $("#title").text("Question " + questionNumber);
  timerDiv.show();
  timerDiv.text("Time: " + counter);
  questionDiv.show();
  answerDiv.show();
  run();
}

// Timer functions

function run() {
  $("#title").text("Question " + questionNumber);
  console.log("[LOG] DO RUN");
  counter = 10;
  timerDiv.text("Time: " + counter);
  intervalId = setInterval(decrement, 1000);
  a.css("background", "");
  b.css("background", "");
  c.css("background", "");
  d.css("background", "");
  clickOff();
  questionCycle();
}

function decrement() {
  counter--;
  timerDiv.text("Time: " + counter);
  if (counter === 0) {
    console.log("done");
    timerDiv.css("background", "red");
    stop();
    upCount();
  }
}

function stop() {
  clearInterval(intervalId);
}

// Cycle through available questions

function questionCycle() {
  console.log("[LOG] QUESTION CYCLE");
  if (triviaCards.length > cardCounter && counter > 0) {
    timerDiv.css("background", "");
    questionDiv.text(triviaCards[cardCounter].q);
    a.text(triviaCards[cardCounter].a);
    a.on("click", function() {
      stop();
      clickOff();
      console.log("a");
      if (answersList[answersCounter] === "a") {
        console.log("[LOG] CORRECT");
        correct++;
        a.css("background-color", "green");
        upCount();
      } else {
        console.log("[LOG] INCORRECT");
        incorrect++;
        a.css("background-color", "red");
        upCount();
      }
    });
    b.text(triviaCards[cardCounter].b);
    b.on("click", function() {
      stop();
      clickOff();
      console.log("b");
      if (answersList[answersCounter] === "b") {
        console.log("[LOG] CORRECT");
        correct++;
        b.css("background-color", "green");
        upCount();
      } else {
        console.log("[LOG] INCORRECT");
        incorrect++;
        b.css("background-color", "red");
        upCount();
      }
    });
    c.text(triviaCards[cardCounter].c);
    c.on("click", function() {
      stop();
      clickOff();
      console.log("c");
      if (answersList[answersCounter] === "c") {
        console.log("[LOG] CORRECT");
        correct++;
        c.css("background-color", "green");
        upCount();
      } else {
        console.log("[LOG] INCORRECT");
        incorrect++;
        c.css("background-color", "red");
        upCount();
      }
    });
    d.text(triviaCards[cardCounter].d);
    d.on("click", function() {
      stop();
      clickOff();
      console.log("d");
      if (answersList[answersCounter] === "d") {
        console.log("[LOG] CORRECT");
        correct++;
        d.css("background-color", "green");
        upCount();
      } else {
        console.log("[LOG] INCORRECT");
        incorrect++;
        d.css("background-color", "red");
        upCount();
      }
    });
  } else {
    console.log("game over");
  }
}

function clickOff() {
  a.off("click");
  b.off("click");
  c.off("click");
  d.off("click");
}

function upCount() {
  cardCounter++;
  questionNumber++;
  answersCounter++;

  console.log(
    "[LOG] CARDCOUNT: " +
      cardCounter +
      " questionNumber: " +
      questionNumber +
      " answerCounter: " +
      answersCounter
  );
  if (runTimer) clearTimeout(runTimer);
  runTimer = setTimeout(run, 2000);
}
