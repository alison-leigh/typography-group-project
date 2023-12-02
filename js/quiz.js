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
    /* Q1 Options */ [ "Peacock", "Crunchyroll", "ESPN", "I don't use streaming services.", "Netflix", `\u{270B}\u{FE0E}\u{274D}\u{FE0E} \u{25A0}\u{FE0E}\u{25A1}\u{FE0E}\u{29EB}\u{FE0E} \u{25FB}\u{FE0E}\u{2653}\u{FE0E}\u{264D}\u{FE0E}\u{1F675}\u{2353}\u{FE0E}`],
    /* Q2 Options */ [ "Some sort of physical activity. I like to stay active.", "Reading a book.", "Taking pics or filming fun videos to post on my socials.", "Taking it easy. Maybe gaming, maybe catching up on sleep.", "Horseback riding.", "\u{1F44E}\u{FE0E}\u{2752}\u{FE0E}\u{264B}\u{FE0E}\u{2B25}\u{FE0E}\u{2653}\u{FE0E}\u{25A0}\u{FE0E}\u{2651}\u{FE0E}\u{25CF}\u{FE0E}\u{2653}\u{FE0E}\u{29EB}\u{FE0E}\u{29EB}\u{FE0E}\u{25CF}\u{FE0E}\u{264F}\u{FE0E} \u{2653}\u{FE0E}\u{264D}\u{FE0E}\u{25A1}\u{FE0E}\u{25A0}\u{FE0E}\u{2B27}\u{FE0E}︎"],
    /* Q3 Options */ [ "Oxfords or kitten heels.", "Crocs! They're comfy and easy to wear!", "Uggs. They're SO cozy and they're back in style.", "Nothing beats a well-made pair of boots.", "My Chucks.", "\u{270B}\u{FE0E}\u{274D}\u{FE0E} \u{25A0}\u{FE0E}\u{25A1}\u{FE0E}\u{29EB}\u{FE0E} \u{25FB}\u{FE0E}\u{2653}\u{FE0E}\u{264D}\u{FE0E}\u{1F675}\u{2353}\u{FE0E}"],
    /* Q4 Options */ [ "Portand", "Vermont in the fall", "Nashville", "Tokyo", "Panama City Beach" ,"\u{270B}\u{FE0E} \u{2B25}\u{FE0E}\u{264B}\u{FE0E}\u{25A0}\u{FE0E}\u{29EB}\u{FE0E} \u{29EB}\u{FE0E}\u{25A1}\u{FE0E} \u{2B27}\u{FE0E}\u{29EB}\u{FE0E}\u{264B}\u{FE0E}\u{2353}\u{FE0E} \u{2652}\u{FE0E}\u{25A1}\u{FE0E}\u{274D}\u{FE0E}\u{264F}\u{FE0E}"],
    /* Q5 Options */ [ "Martini", "Monster Energy", "A cold one", "Cold Drip Coffee","PSL", "\u{270C}\u{FE0E} \u{264D}\u{FE0E}\u{2752}\u{FE0E}\u{264F}\u{FE0E}\u{264B}\u{FE0E}\u{29EB}\u{FE0E}\u{25C6}\u{FE0E}\u{2752}\u{FE0E}\u{264F}\u{FE0E} \u{25CF}\u{FE0E}\u{2653}\u{FE0E}\u{1F675}\u{264F}\u{FE0E} \u{274D}\u{FE0E}\u{264F}\u{FE0E} \u{264E}\u{FE0E}\u{25A1}\u{FE0E}\u{264F}\u{FE0E}\u{2B27}\u{FE0E} \u{25A0}\u{FE0E}\u{25A1}\u{FE0E}\u{29EB}\u{FE0E} \u{2353}\u{FE0E}\u{264F}\u{FE0E}\u{264B}\u{FE0E}\u{2752}\u{FE0E}\u{25A0}\u{FE0E} \u{2650}\u{FE0E}\u{25A1}\u{FE0E}\u{2752}\u{FE0E} \u{2B27}\u{FE0E}\u{25C6}\u{FE0E}\u{2B27}\u{FE0E}\u{29EB}\u{FE0E}\u{264F}\u{FE0E}\u{25A0}\u{FE0E}\u{264B}\u{FE0E}\u{25A0}\u{FE0E}\u{264D}\u{FE0E}\u{264F}\u{FE0E}"],
    /* Q6 Options */ [ "Facebook", "Pinterest", "Discord", "Twitter/X", "Tiktok", "\u{2653}\u{FE0E}\u{264D}\u{FE0E}\u{25A1}\u{FE0E}\u{25A0}\u{FE0E}\u{2B27}\u{FE0E}\u{1F5B0}\u{FE0E}"],
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
        [0 /*tnr*/,4 /*cs*/,3 /*lob*/,0 /*ub*/,0 /*ha*/,3 /*hel*/,5 /*ari*/,0 /*wing*/], // Content creation
        [0 /*tnr*/,4 /*cs*/,0 /*lob*/,5 /*ub*/,0 /*ha*/,3 /*hel*/,0 /*ari*/,0 /*wing*/], // Catching up on sleep
        [4 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,5 /*ha*/,0 /*hel*/,1 /*ari*/,0 /*wing*/], // Horseback Riding
        [0 /*tnr*/,3 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,5 /*wing*/] // wingodingos
    ],
    /* Q#3 */    [
        [5 /*tnr*/,0 /*cs*/,0 /*lob*/,3 /*ub*/,0 /*ha*/,3 /*hel*/,0 /*ari*/,0 /*wing*/], // Classic
        [0 /*tnr*/,5 /*cs*/,0 /*lob*/,3 /*ub*/,3 /*ha*/,3 /*hel*/,0 /*ari*/,0 /*wing*/], // Crocs
        [0 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,5 /*ari*/,0 /*wing*/], // Uggs
        [0 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,5 /*ha*/,0 /*hel*/,0 /*ari*/,0 /*wing*/], // Boots
        [0 /*tnr*/,0 /*cs*/,5 /*lob*/,4 /*ub*/,0 /*ha*/,5 /*hel*/,0 /*ari*/,0 /*wing*/], // Chucks
        [0 /*tnr*/,3 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,5 /*wing*/] // wingodingos
    ],
    /* Q#4 */    [
        [0 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,0 /*wing*/], // Portand
        [0 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,0 /*wing*/], // Vermont in the fall
        [0 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,0 /*wing*/], // Nash
        [0 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,0 /*wing*/], // Tokyo
        [0 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,0 /*wing*/], // Panama City Beach
        [0 /*tnr*/,3 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,5 /*wing*/] // wingodingos
    ],
    /* Q#5 */    [
        [5 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,0 /*wing*/], // Martini
        [0 /*tnr*/,5 /*cs*/,4 /*lob*/,4 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,0 /*wing*/], // monster
        [0 /*tnr*/,0 /*cs*/,5 /*lob*/,0 /*ub*/,5 /*ha*/,0 /*hel*/,0 /*ari*/,0 /*wing*/], //A cold one
        [3 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,5 /*hel*/,2 /*ari*/,0 /*wing*/], // Cold Drip Coffee
        [0 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,3 /*ha*/,0 /*hel*/,5 /*ari*/,0 /*wing*/], // PSL
        [0 /*tnr*/,3 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,5 /*wing*/] // wingodingos
    ],
    /* Q#6 */    [
        [5 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,5 /*ha*/,0 /*hel*/,5 /*ari*/,0 /*wing*/], // Facebook
        [1 /*tnr*/,0 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,5 /*hel*/,4 /*ari*/,0 /*wing*/], // Pinterest
        [0 /*tnr*/,4 /*cs*/,3 /*lob*/,5 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,0 /*wing*/], // Discord
        [4 /*tnr*/,4 /*cs*/,5 /*lob*/,3 /*ub*/,5 /*ha*/,0 /*hel*/,0 /*ari*/,0 /*wing*/], // Twitter/X
        [0 /*tnr*/,4 /*cs*/,0 /*lob*/,3 /*ub*/,0 /*ha*/,3 /*hel*/,5 /*ari*/,0 /*wing*/], // Tiktok
        [0 /*tnr*/,3 /*cs*/,0 /*lob*/,0 /*ub*/,0 /*ha*/,0 /*hel*/,0 /*ari*/,5 /*wing*/] // wingodingos
    ],
]

// DOM references
const results = document.getElementById("results");
const quiz = document.getElementById("quiz");
const body = document.body.style;
const printResult = document.getElementById("topScore");
const buttonElement = document.getElementById("startButton");
const resultsImage = document.getElementById("resultsImage");
const resultsDescription = document.getElementById("resultsDescription");
const resultsInfoContainer = document.getElementById("resultsInfoContainer");
const pageTitle = document.getElementById("title");



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
    // if there are still quiz questions left...
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
            body.backgroundColor = "#303030";
            body.color = "white";
            resultsImage.innerHTML = `<img src='/img/casablanca.jpg' alt="Black and white photo of Humohrey Bogart and Ingrid Bergman toasting with drinks.">`;
            resultsDescription.innerHTML = `<p>You're classic and old fashioned. Some might call you stuffy and maybe even a little boring, but <i>those</i> people can't even put their phone down at the dinner table.</p>`
            console.log(userLabels[0]);
            break;

        case 1:		// Comic Sans
            results.style.display = "block";
            results.classList.add("comicSans");
            body.background = "none";
            printResult.innerText = userLabels[1];
            body.backgroundColor = "#303030";
            body.color = "white";
            resultsImage.innerHTML = `<img src='/img/clown.jpg' alt="">`;
            resultsDescription.innerText = `You're funny and approachable, but people have a hard time taking you seriously. You're not to everyone's tastes, but the people who really Get You also adore you.`
            console.log(userLabels[1]);
            break;

        case 2: // Lobster
            results.style.display = "block";
            results.classList.add("lobster");
            body.background = "none";
            printResult.innerText = userLabels[2];
            body.background = "rgb(117,220,201)";
            body.background = "linear-gradient(180deg, rgba(117,220,201,1) 17%, rgba(35,116,223,1) 100%)";
            body.color = "white";
            body.textShadow = "1px 1px black"
            resultsImage.innerHTML = `<img src='/img/larry.png' alt="Larry the Lobster from Spongebob">`;
            resultsDescription.innerText = `You're a jock. You like to stay active and work on your gains. You've known the stink of a dirty protein shaker bottle and it's humbled you.`
            console.log(userLabels[2]);
            break;

        case 3:		// Ubuntu
            results.style.display = "block";
            results.classList.add("ubuntu");
            body.background = "none";
            printResult.innerText = userLabels[3];
            body.backgroundColor = "#000000";
            body.color = "white";
            resultsImage.innerHTML = `<img src='/img/futaba.png' alt="Futaba from Persona 5">`;
            resultsDescription.innerText = `You're a geek, but you already knew that. You can appreciate Ubuntu as an open source operating system even if you don't use it yourself. Try drinking water and stretching from time to time.`
            console.log(userLabels[3]);
            break;
        case 4:		// Homemade Apple
            results.style.display = "block";
            results.classList.add("apple");
            printResult.innerText = userLabels[4];
            body.background = "url('https://i.imgur.com/Lt1HywU.jpg')";
            body.backgroundSize = "cover";
            pageTitle.style.color = "white";
            resultsImage.innerHTML = `<img src='/img/dolly.jpg' alt="Dolly Parton adjusting her cowboy hat.">`;
            resultsDescription.innerHTML = `<p>Yer a lil bit country, ain'tcha? Or maybe more Farmhouse Chic.</p> <p>You're not afraid of hard work, but you know how to enjoy the fruits of your labor. Some people find you hard to understand.</p>`
            console.log(userLabels[4]);
            break;
        case 5: // Helvetica
            results.style.display = "block";
            results.classList.add("helvetica");
            body.background = "none";
            printResult.innerText = userLabels[5];
            body.background = "url('/img/img.png') repeat";
            pageTitle.style.color = "white";
            pageTitle.style.textShadow = "1px 1px #000000";
            resultsImage.innerHTML = `<img src='/img/helvetica.jpeg' alt="City photo with a vintage filter, overlayed with the caption: Pick a bad photo, apply a vintage effect and write something in Helvetica.">`;
            resultsDescription.innerText = `You don't keep up with the trends. You're Unique and Different. Sometimes people can't tell you apart from Arial, though.`
            console.log(userLabels[5]);
            break;
        case 6: // Arial
            results.style.display = "block";
            results.classList.add("arial");
            body.background = "none";
            printResult.innerText = userLabels[6];
            body.background = "url('/img/img.png') repeat";
            pageTitle.style.textShadow = "1px 1px #000000";
            resultsImage.innerHTML = `<img src='/img/christiangirlautumn.jpg' alt="Fall-fashion-forward woman (known from Christian Girl Autumn meme) poses in front of a pumpkin patch while holding a pumpkin spice latte.">`;
            resultsDescription.innerText = `You like to keep up with the trends. It makes you seem pretty basic on the surface, but you don't care. You're having a good time! Are you an influencer or just following their lead?`
            console.log(userLabels[6]);
            break;
        case 7: // Wingdings
            results.style.display = "block";
            results.classList.add("wingdings");
            printResult.innerText = userLabels[7];
            body.backgroundColor = "#303030";
            body.color = "white";
            resultsImage.innerHTML = `<img src='/img/jughead.gif' alt="In case you haven't noticed, I'm weird.  I'm a weirdo. I don't fit in and I don't want to fit in.">`;
            resultsDescription.innerText = `You're strange and a little offputting, just the way you like it. You don't render in a lot of browsers and web guides say to replace you with Unicode, but that's because they just don't Get you.`
            console.log(userLabels[7]);
            break;

        default:
            document.getElementById("error").style.display = "block";

    }
}
