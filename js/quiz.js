var questionNumber = 0;
var quizActive = true;

// i used the 4 temperaments to use as an example of potential personalities for fonts
// you can add more personalities/potential font results
// BUT!! you must also modify the array lengths in var answerValues so they are EQUAL to the number of potential results,
// and modify the point assignment by adding +1 for each new personality added.

var userStats =	[
    0,	// Times New Roman: Classic, stuffy, traditional
    0, 	// Comic Sans: Goofy, clownish
    0, 	// Lobster: Gregarious, popular, jock-ish
    0, 	// Ubuntu: weeaboo
    0, // Homemade Apple: country chic
];

var tempStats = userStats; // temporarily holds the user stats

// stores the text fpr each question, separated by commas
var questionText =	[
    "1. Which streaming service is your favorite?", // Question #1 (answers: lorem1, ipsum, dolor, sit, amet, consectetur)
];

// the arrays contain answers for each question, separated by commas.
// each question should have the same amount of possible answers for math reasons (scroll down to var answerValues below)

var answerText =	[
    /* Q1 Options */ [ "Peacock" /*apple*/, "Crunchyroll" /*ubuntu*/, "ESPN" /*lobster*/ , "Cable" /*TNR*/, "Prime" /*comic*/],
    // /* Q2 Options */ [ "Lorem2", "Ipsum", "Dolor", "Sit", "Amet", "Consectetur"],
    // /* Q3 Options */ [ "Lorem3", "Ipsum", "Dolor", "Sit", "Amet", "Consectetur"],
]


// assign a value from 0-3 points for each column representing the four personality types
// use each number only once per answer
//1 Times New Roman, 2 Comic Sans, 3 Lobster, 4 Ubuntu, 5 Homemade Apple
// you can add as many questions as you want, but the array length should remain the same to correspond to the personalities/fonts

var answerValues =	[		//question 1 answer values
    /* Q#1 */    [ [0,0,0,0,4], // "Peacock"
        [0,0,0,4,0], // "Crunchyroll"
        [0,0,4,0,0], // "ESPN"
        [4,0,0,0,0], // "Cable"
        [0,4,0,0,0] // "Prime"
     ]//,
    //
    // /* Q#2 */    [ [3,2,1,0], // "Answer 1"
    //     [0,3,1,2], // "Answer 2"
    //     [3,0,2,1], // "Answer 3"
    //     [3,0,1,2], // "Answer 4"
    //     [0,2,1,3], // "Answer 5"
    //     [1,0,3,2]  // "Answer 6"
    // ],
    //
    // /* Q#3 */    [ [3,2,1,0], // "Answer 1"
    //     [0,3,1,2], // "Answer 2"
    //     [3,0,2,1], // "Answer 3"
    //     [3,0,1,2], // "Answer 4"
    //     [0,2,1,3], // "Answer 5"
    //     [1,0,3,2]  // "Answer 6"
    // ]
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
    displayResultsChart();
    switch (personality) {

        case 0:	// Times New Roman
            results.style.display = "inline-block";
            results.classList.add("tnr");
            body.background = "none";
            printResult.innerText = "Times New Roman";
            break;

        case 1:		// Comic Sans
            results.style.display = "inline-block";
            results.classList.add("font2");
            body.background = "none";
            printResult.innerText = "Comic Sans";
            break;

        case 2: // Lobster
            results.style.display = "inline-block";
            results.classList.add("font3");
            body.background = "none";
            printResult.innerText = "Lobster";
            break;

        case 3:		// Ubuntu
            results.style.display = "inline-block";
            results.classList.add("font4");
            body.background = "none";
            printResult.innerText = "Ubuntu";
            break;
        case 4:		// Homemade Apple
            results.style.display = "inline-block";
            results.classList.add("font4");
            body.background = "none";
            printResult.innerText = "Homemade Apple";
            break;


        default:
            document.getElementById("error").style.display = "inline-block";

    }
}

console.log()
