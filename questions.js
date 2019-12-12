var startButton = document.querySelector("#start");
var timeLeft = 60

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
};
Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
};

Quiz.prototype.guess = function (answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
    else {
        timeLeft -= 15
    }

    this.questionIndex++;
};

Quiz.prototype.isEnded = function () {
    return this.questionIndex === this.questions.length;
};

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
};

Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
}
function populate() {
    if (quiz.isEnded()) {
        showScores();
    }
    else {

        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;


        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
    }

};
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
};
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    // added to score function to end timer when scores are shown
    clearInterval();
    timeLeft = 0
    document.getElementById("timer").innerHTML = "Finished";
    prompt("Please enter your initials to save your score!")

};

function startTimer() {
    function startTimer() {
        setTime();
        interval = setInterval(function () {
            secondsElapsed++;
            renderTime();
        }, 1000);
    }
    var downloadTimer = setInterval(function () {
        document.getElementById("timer").innerHTML = timeLeft + " seconds remaining";
        timeLeft -= 1;
        if (timeLeft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("timer").innerHTML = "Finished"

        }
    }, 1000);
    showQuiz();
    hideButton();
};
function deductTime() {
    timeLeft -= 15;
    document.getElementById("timer").innerHTML = timeLeft + " seconds remaining";
};
function wrongAnswer() {
    if (answer == guess) {
        return null;
    }
    else {
        deductTime();
    }
};
function showQuiz() {
    const quiz = document.querySelector(".app-quiz");
    quiz.classList.add("app-quizOn")
};
function hideButton() {
    const quiz = document.querySelector(".app-start-button");
    quiz.classList.add("app-hideButton")
};
var questions = [
    new Question("Commonly used data types DO NOT include:", ["strings", "booleans", "alerts", "numbers"], "alerts"),
    new Question("The condition in an if / else statement is enclosed within ____.", ["quotes", "parentheses", "curly brackets", "square brackets"], "parentheses"),
    new Question("In JavaScript, what is a block of code called that is used to perform a specific task?", ["string", "variable", "function", "declaration"], "function"),
    new Question("Which tag do we use to input JavaScript into the html?", ["< html >", "< script >", "< javascript >", "< body >"], "< script >"),
];

var quiz = new Quiz(questions);
startButton.addEventListener("click", startTimer);
populate();
