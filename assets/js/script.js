var timerEl = document.querySelector("#timer")
var buttonEl =document.querySelector("#start-btn")


var startCountDown = function() {
    var timeLeft = 100;

    setInterval(function () {
        timeLeft--;
        if (timeLeft === 0) {
            clearInterval(countdown);
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
