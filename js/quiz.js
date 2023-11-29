let questionNumber = 0;
let quizActive = true;

// i used the 4 temperaments to use as an example of potential personalities for fonts
// you can add more personalities/potential font results
// BUT!! you must also modify the array lengths in var answerValues so they are EQUAL to the number of potential results,
// and modify the point assignment by adding +1 for each new personality added.

let userStats =	[
    0,	// Times New Roman: Classic, stuffy, traditional
    0, 	// Comic Sans: Goofy, clownish
    0, 	// Lobster: Gregarious, popular, jock-ish
    0, 	// Ubuntu: weeaboo
    0, // Homemade Apple: country chic
    0, // Helvetica: hipster
    0, // Arial: basic
    0 // Wingdings
];

let userLabels = ['Times New Roman', 'Comic Sans', 'Lobster', 'Ubuntu', 'Homemade Apple', 'Helvetica', 'Arial', 'Wingdings'];

let tempStats = userStats; // temporarily holds the user stats

// stores the text fpr each question, separated by commas
const questionText =	[
    "Which streaming service is your favorite?", // Q1
    "Pick a fun weekend activity.", //Q2
    "Pick a pair of shoes.", //Q3
    "Where would you love to travel to?", //Q4
    "What's your favorite drink?", //Q5
    "What is your favorite social app?" //Q6
];

// the arrays contain answers for each question, separated by commas.
// each question should have the same amount of possible answers for math reasons (scroll down to var answerValues below)

const answerText =	[
    /* Q1 Options */ [ "Peacock", "Crunchyroll", "ESPN", "I don't use streaming services.", "Netflix", `<span class="wingding">Im not picky</span>`],
    /* Q2 Options */ [ "Some sort of physical activity. I like to stay active.", "Reading a book.", "Taking pics or filming fun videos to post on my socials.", "Taking it easy. Maybe gaming, maybe catching up on sleep.", "Horseback riding.", "<span class=\"wingding\">Just lil Wingding Thangs</span>"],
    /* Q3 Options */ [ "Oxfords or kitten heels.", "Crocs! They're comfy and easy to wear!", "Uggs. They're SO cozy and they're back in style.", "Nothing beats a well-made pair of boots.", "My Chucks.", "<span class=\"wingding\">I dont have feet or maybe I do!</span>"],
    /* Q4 Options */ [ "", "", "", "", "<span class=\"wingding\"></span>"],
    /* Q5 Options */ [ "", "", "", "", "<span class=\"wingding\"></span>"],
    /* Q6 Options */ [ "", "", "", "", "<span class=\"wingding\"></span>"],
]


// assign a value from 0-7 points for each column representing the four personality types
// use each number only once per answer
//[0] Times New Roman, 1 Comic Sans, 2 Lobster, 3 Ubuntu, 4 Homemade Apple, 5 Helvetica, 6 Arial, 7 Wingdings
// you can add as many questions as you want, but the array length should remain the same to correspond to the personalities/fonts

const answerValues =	[		//question 1 answer values
    /* Q#1 */    [
        [3 /*tnr*/,0 /*cs*/,4 /*lob*/,0 /*ub*/,5 /*ha*/,0 /*hel*/,3 /*ari*/,0 /*wing*/], // "Peacock"
        [0 /*tnr*/,4 /*cs*/,0 /*lob*/,5 /*ub*/,0 /*ha*/,4 /*hel*/,0 /*ari*/,2 /*wing*/], // "Crunchyroll"
        [0 /*tnr*/,0 /*cs*/,5 /*lob*/,0 /*ub*/,4 /*ha*/,0 /*hel*/,3 /*ari*/,0 /*wing*/], // "ESPN"
        [5 /*tnr*/,0 /*cs*/,0 /*lob*/,3 /*ub*/,0 /*ha*/,4 /*hel*/,0 /*ari*/,0 /*wing*/], // "None"
        [0 /*tnr*/,5 /*cs*/,4 /*lob*/,1 /*ub*/,0 /*ha*/,0 /*hel*/,3 /*ari*/,0 /*wing*/], // "Netflix"
        [0 /*tnr*/,3 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,5 /*wing*/] // wingodingos
     ],
    /* Q#2 */    [
        [0 /*tnr*/,0 /*cs*/,5 /*lob*/,0 /*ub*/,3 /*ha*/,0 /*hel*/,2 /*ari*/,0 /*wing*/], // Physical Activity
        [4 /*tnr*/,0 /*cs*/,0 /*lob*/,3 /*ub*/,0 /*ha*/,5 /*hel*/,0 /*ari*/,0 /*wing*/], // Reading a book
        [0 /*tnr*/,4 /*cs*/,3 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,5 /*ari*/,0 /*wing*/], // Content creation
        [0 /*tnr*/,4 /*cs*/,0 /*lob*/,5 /*ub*/,0 /*ha*/,3 /*hel*/,0 /*ari*/,0 /*wing*/], // Catching up on sleep
        [4 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,5 /*ha*/,0 /*hel*/,1 /*ari*/,0 /*wing*/], // Horseback Riding
        [0 /*tnr*/,3 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,5 /*wing*/] // wingodingos
    ],
    /* Q#3 */    [
        [5 /*tnr*/,0 /*cs*/,0 /*lob*/,3 /*ub*/,0 /*ha*/,3 /*hel*/,0 /*ari*/,0 /*wing*/], // Classic
        [0 /*tnr*/,5 /*cs*/,0 /*lob*/,3 /*ub*/,0 /*ha*/,3 /*hel*/,0 /*ari*/,0 /*wing*/], // Crocs
        [0 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,5 /*ari*/,0 /*wing*/], // Uggs
        [0 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,5 /*ha*/,0 /*hel*/,0 /*ari*/,0 /*wing*/], // Boots
        [0 /*tnr*/,0 /*cs*/,5 /*lob*/,4 /*ub*/,0 /*ha*/,5 /*hel*/,0 /*ari*/,0 /*wing*/], // Chucks
        [0 /*tnr*/,3 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,5 /*wing*/] // wingodingos
    ],
    /* Q#4 */    [
        [0 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,0 /*wing*/], //
        [0 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,0 /*wing*/], //
        [0 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,0 /*wing*/], //
        [0 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,0 /*wing*/], //
        [0 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,0 /*wing*/], //
        [0 /*tnr*/,3 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,5 /*wing*/] // wingodingos
    ],
    /* Q#5 */    [
        [0 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,0 /*wing*/], //
        [0 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,0 /*wing*/], //
        [0 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,0 /*wing*/], //
        [0 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,0 /*wing*/], //
        [0 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,0 /*wing*/], //
        [0 /*tnr*/,3 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,5 /*wing*/] // wingodingos
    ],
    /* Q#6 */    [
        [0 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,0 /*wing*/], //
        [0 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,0 /*wing*/], //
        [0 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,0 /*wing*/], //
        [0 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,0 /*wing*/], //
        [0 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,0 /*wing*/], //
        [0 /*tnr*/,3 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,5 /*wing*/] // wingodingos
    ],
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

    let answerSelection = "";

    for (i = 0; i < answerText[question].length; i++) {

        answerSelection += "<li class='quizAnswer'><input class='form-check-input' type='radio' name='question" +
            (question+1) + "' onClick='setAnswer("+i+")' id='" + answerText[question][i] + "'><label class='form-check-label' for='" + answerText[question][i] + "'>" + answerText[question][i] + "</label></li>";

        // makes the li item click-to-select instead. pita to change the code to implement it, but it would be neat if i have the time
        // answerSelection += "<li class='quizAnswer' onClick='setAnswer("+i+")>" + answerText[question][i] + "</li>";
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

    tempStats = [0,0,0,0,0,0,0,0];	// resets personality stats
}



function updatePersonality() {

    for (i = 0; i < userStats.length ; i++) {
        userStats[i] += tempStats[i];
    }
}

function setCustomPage() {

    let highestStatPosition = 0;

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
            results.style.display = "block";
            results.classList.add("tnr");
            body.background = "none";
            printResult.innerText = userLabels[0];
            console.log(userLabels[0]);
            break;

        case 1:		// Comic Sans
            results.style.display = "block";
            results.classList.add("comicSans");
            body.background = "none";
            printResult.innerText = userLabels[1];
            console.log(userLabels[1]);
            break;

        case 2: // Lobster
            results.style.display = "block";
            results.classList.add("lobster");
            body.background = "none";
            printResult.innerText = userLabels[2];
            console.log(userLabels[2]);
            break;

        case 3:		// Ubuntu
            results.style.display = "block";
            results.classList.add("ubuntu");
            body.background = "none";
            printResult.innerText = userLabels[3];
            console.log(userLabels[3]);
            break;
        case 4:		// Homemade Apple
            results.style.display = "block";
            results.classList.add("apple");
            body.background = "pink";
            printResult.innerText = userLabels[4];
            console.log(userLabels[4]);
            break;
        case 5:
            results.style.display = "block";
            results.classList.add("helvetica");
            body.background = "none";
            printResult.innerText = userLabels[5];
            console.log(userLabels[5]);
            break;
        case 6:
            results.style.display = "block";
            results.classList.add("arial");
            body.background = "none";
            printResult.innerText = userLabels[6];
            console.log(userLabels[6]);
            break;
        case 7:
            results.style.display = "block";
            results.classList.add("wingdings");
            body.background = "none";
            printResult.innerText = userLabels[7];
            console.log(userLabels[7]);
            break;


        default:
            document.getElementById("error").style.display = "block";

    }
}


