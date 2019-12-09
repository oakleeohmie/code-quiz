var startButton = document.querySelector("#start");
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "In JavaScript, what is a block of code called that is used to perform a specific task?",
        choices: ["string", "variable", "function", "declaration"],
        answer: "function"
    }
];
function startTimer() {
    function startTimer() {
        setTime();

        interval = setInterval(function () {
            secondsElapsed++;
            renderTime();
        }, 1000);
    }
    var timeleft = 45;
    var downloadTimer = setInterval(function () {
        document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
        timeleft -= 1;
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("timer").innerHTML = "Finished"
        }
    }, 1000);
}

startButton.addEventListener("click", startTimer);