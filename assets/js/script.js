var quizQustion = [
    {
        quizId : 1,
        quizDetails: {
            quizQuestion: "Commanly used data type DO Not include:",
            quizChoice1: "1. strings",
            quizChoice2: "2. booleans",
            quizChoice3: "3. alerts",
            quizChoice4: "4. numbers",
        },
    quizAnswer: 3
    },
    {
        quizId : 2,
        quizDetails: {
            quizQuestion: "The condition in an if/else statement is enclosed with _____",
            quizChoice1: "1. quotes",
            quizChoice2: "2. curly brackets",
            quizChoice3: "3. parenthesis",
            quizChoice4: "4. square brackets",
        },
        quizAnswer: 3
    },
    {
        quizId : 3,
        quizDetails: {
            quizQuestion: "Arrays in JavaScript can be used to store _____",
            quizChoice1: "1. numbers and strings",
            quizChoice2: "2. other arrays",
            quizChoice3: "3. booleans",
            quizChoice4: "4. All of above",
        },
        quizAnswer: 4
    }
]

var timerEl = document.querySelector("#timer")
var buttonEl =document.querySelector("#start-btn")


var startCountDown = function() {
    var timeLeft = 100;

    setInterval(function () {
        timeLeft--;
        if (timeLeft === 0) {
            clearInterval(timeLeft);
        }
        else {
            timerEl.innerHTML = "Time: " + timeLeft;
        }
    }, 1000)
}

buttonEl.addEventListener("click",function(){
    startCountDown();
    startQuiz();
})

var startQuiz = function showDiv() {
    document.getElementById('content-quiz').style.display = "block";
    document.getElementById('content-start').style.display = "none";
 }
