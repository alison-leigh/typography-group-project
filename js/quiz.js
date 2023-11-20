var questionNumber = 0;
var quizActive = true;

// i used the 4 temperaments to use as an example of potential personalities for fonts
// you can add more personalities/potential font results
// BUT!! you must also modify the array lengths in var answerValues so they are EQUAL to the number of potential results,
// and modify the point assignment by adding +1 for each new personality added.

var userStats =	[
    0,	// choleric: ambitious, passionate, efficient, aggressive, impatient, argumentative
    0, 	// melancholic: thoughtful, organized, creative, obsessive, perfectionist, moody
    0, 	// phlegmatic: relaxed, kind, observant, shy, stubborn, lazy
    0, 	// sanguine: sociable, charismatic, optimistic, impulsive, shameless, exaggerator
];

var tempStats = userStats; // temporarily holds the user stats

// stores the text fpr each question, separated by commas
var questionText =	[
    "1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", // Question #1 (answers: lorem1, ipsum, dolor, sit, amet, consectetur)
    "2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", // Question #2 (answers: lorem2, ipsum, dolor, sit, amet, consectetur)
    "3. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", // Question #3 (answers: lorem3, ipsum, dolor, sit, amet, consectetur)
];

// the arrays contain answers for each question, separated by commas.
// each question should have the same amount of possible answers for math reasons (scroll down to var answerValues below)

var answerText =	[
    /* Q1 Options */ [ "Lorem1", "Ipsum", "Dolor", "Sit", "Amet", "Consectetur"],
    /* Q2 Options */ [ "Lorem2", "Ipsum", "Dolor", "Sit", "Amet", "Consectetur"],
    /* Q3 Options */ [ "Lorem3", "Ipsum", "Dolor", "Sit", "Amet", "Consectetur"],
]


// assign a value from 0-3 points for each column representing the four personality types
// use each number only once per answer
// column 1: choleric, column 2: melancholic, column 3: phlegmatic, column 4: sanguine
// you can add as many questions as you want, but the array length should remain the same to correspond to the personalities/fonts

var answerValues =	[		//question 1 answer values
    /* Q#1 */    [ [3,2,1,0], // "Answer 1"
        [0,3,1,2], // "Answer 2"
        [3,0,2,1], // "Answer 3"
        [3,0,1,2], // "Answer 4"
        [0,2,1,3], // "Answer 5"
        [1,0,3,2]  // "Answer 6"
    ],

    /* Q#2 */    [ [3,2,1,0], // "Answer 1"
        [0,3,1,2], // "Answer 2"
        [3,0,2,1], // "Answer 3"
        [3,0,1,2], // "Answer 4"
        [0,2,1,3], // "Answer 5"
        [1,0,3,2]  // "Answer 6"
    ],

    /* Q#3 */    [ [3,2,1,0], // "Answer 1"
        [0,3,1,2], // "Answer 2"
        [3,0,2,1], // "Answer 3"
        [3,0,1,2], // "Answer 4"
        [0,2,1,3], // "Answer 5"
        [1,0,3,2]  // "Answer 6"
    ]
]

// DOM references
const results = document.getElementById("results");
const quiz = document.getElementById("quiz");
const body = document.body.style;
const printResult = document.getElementById("topScore");
const buttonElement = document.getElementById("startButton");


function changeState() {

    updatePersonality(); 	// this will add the values of the tempStats (temporary) to the saved userStats

    // if the quiz hasn't run out of questions, then
    if (quizActive) {
        initText(questionNumber);
        questionNumber++;

        buttonElement.disabled = true; // disables submit button until an answer has been selected
        buttonElement.innerHTML = "Pick an answer first!";

    } else {

        setCustomPage(); // displays the quiz results page
    }
}


function initText(question) {

    var answerSelection = "";

    for (i = 0; i < answerText[question].length; i++) {

        answerSelection += "<li><input type='radio' name='question" +
            (question+1) + "' onClick='setAnswer("+i+")' id='" + answerText[question][i] + "'><label for='" + answerText[question][i] + "'>" + answerText[question][i] + "</label></li>";
    }

    document.getElementById("question").innerHTML = questionText[question];	// sets questions' text
    document.getElementById("answer").innerHTML = answerSelection;		// sets answers' text
}



function setAnswer(input) {

    clearTempStats();

    tempStats = answerValues[questionNumber-1][input];
    if (questionNumber < questionText.length) {

        buttonElement.innerHTML = "Continue";
        buttonElement.disabled = false;

    } else {



        quizActive = false;
        buttonElement.innerHTML = "Let's peer into your psyche and find your inner font..."
        buttonElement.disabled = false;
    }
}

// allows the user to reset their stats so they can retake the quiz

function clearTempStats() {

    tempStats = [0,0,0,0];	// resets personality stats
}



function updatePersonality() {

    for (i = 0; i < userStats.length ; i++) {
        userStats[i] += tempStats[i];
    }
}

function setCustomPage() {

    var highestStatPosition = 0;

    for (i = 1; i < userStats.length; i++) {

        if (userStats[i] > userStats[highestStatPosition]) {
            highestStatPosition = i;
        }
    }

    displayCustomPage(highestStatPosition); // passes the index value of the highest stat determined


    // hides quiz once results are shown
    quiz.style.display = "none";
}

// these are the results! the js modifies the css of the page so each result can have its unique page.

function displayCustomPage(personality) {
    switch (personality) {

        case 0:	// font 1
            results.style.display = "inline-block";
            results.classList.add("font1");
            body.background = "none";
            printResult.innerText = "Font 1";
            break;

        case 1:		// font 2
            results.style.display = "inline-block";
            results.classList.add("font2");
            body.background = "none";
            printResult.innerText = "Font 2";
            break;

        case 2: // font 3
            results.style.display = "inline-block";
            results.classList.add("font3");
            body.background = "none";
            printResult.innerText = "Font 3";
            break;

        case 3:		// font 4
            results.style.display = "inline-block";
            results.classList.add("font4");
            body.background = "none";
            printResult.innerText = "Font 4";
            break;


        default:
            document.getElementById("error").style.display = "inline-block";

    }
}

console.log()
