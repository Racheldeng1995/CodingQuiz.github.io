var quizQustion = [
    {
        quizId : 1,
        quizDetails: {
            quizQuestion: "Commanly used data type DO Not include:",
            quizChoice: [
                "1. strings",
                "2. booleans",
                "3. alerts",
                "4. numbers"
            ]
        },
    quizAnswer: 3
    },
    {
        quizId : 2,
        quizDetails: {
            quizQuestion: "The condition in an if/else statement is enclosed with _____",
            quizChoice: [
                "1. quotes",
                "2. curly brackets",
                "3. parenthesis",
                "4. square brackets"
            ]
        },
        quizAnswer: 3
    },
    {
        quizId : 3,
        quizDetails: {
            quizQuestion: "Arrays in JavaScript can be used to store _____",
            quizChoice: [
                "1. numbers and strings",
                "2. other arrays",
                "3. booleans",
                "4. All of above"
            ]
        },
        quizAnswer: 4
    }
]

var timerEl = document.querySelector("#timer")
var buttonEl = document.querySelector("#start-btn")
var quizEl = document.querySelector("#content-quiz")


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

var startQuiz = function () {
    document.getElementById('content-start').style.display = "none";

    for (var i = 0; i < quizQustion.length; i++){
        // document.getElementById('content-quiz').style.display = "block";
        var createQuizEl = function(quizQustion) {
            quizEl.innerHTML = 
                "<h1>" + quizQustion[i]["quizDetails"]["quizQuestion"] + "<h1>";
            
            var quizChoiceEl = document.createElement("ul");

            for(var j = 0; j < quizQustion[i]["quizDetails"]["quizChoice"].length; j++ ) {
                var listQuizEl = document.createElement("li")
                var listBtnEl = document.createElement("button")
                listBtnEl.className = "main-quiz-btn"
                listBtnEl.setAttribute("id", "" + quizQustion[i]["quizId"] + j)
                listBtnEl.innerHTML = quizQustion[i]["quizDetails"]["quizChoice"][j]
                listQuizEl.appendChild(listBtnEl)
                quizChoiceEl.appendChild(listQuizEl)
            }
        var BtnEl = document.querySelector(quizQustion[i]["quizId"] + "-" + quizQustion[i]["quizDetails"][j][0])
        }
    }

}
