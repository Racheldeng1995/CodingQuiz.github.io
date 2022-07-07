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
var allDoneSec = document.querySelector("#all-done")
var finalPageSec = document.querySelector("#final-page")
console.log(finalPageSec)


var timeInterval = null

var startCountDown = function(num) {
    var timeLeft = num;

    timeInterval = setInterval(function () {
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timeInterval);
        }
        else {
            timerEl.innerHTML = "Time: " + timeLeft;
            timerEl.setAttribute("value", timeLeft)
        }
    }, 1000)
}

function stopCountDown() {
    // To cancel an interval, pass the timer to clearInterval()
    clearInterval(timeInterval);
  }

var checkAnswer = function(answer, input){
    var ansEl = document.createElement("p")
    ansEl.className = "quiz-anwser"
    if (input == answer-1) {
        ansEl.innerHTML = "Correct!"
        console.log(input)
        console.log(answer)
    }
    else {
        ansEl.innerHTML = "Wrong!"
        console.log(input)
        console.log(answer)
    }

    return ansEl
}

var allDone = function(time) {
    document.getElementById('content-quiz').style.display = "none";
    document.getElementById('all-done').style.display = "block";
    var allDoneEl = document.createElement("h1")
    allDoneEl.innerHTML = "All done!"
    var scoreEl = document.createElement("p")
    scoreEl.innerHTML = "Your final score is " + time
    var initialEl = document.createElement("form")
    initialEl.className = "form"
    var initialName = document.createElement("label")
    initialName.innerHTML = "Enter Initials"
    var initiaInput = document.createElement("input")
    initiaInput.className = "form-input"
    initiaInput.id = "ini-name"
    var submitButton = document.createElement("button")
    submitButton.id = "submit-btn"
    submitButton.innerHTML = "Submit"
    submitButton.className = "form-submit"
    initialEl.appendChild(initialName)
    initialEl.appendChild(initiaInput)
    initialEl.appendChild(submitButton)
    allDoneSec.appendChild(allDoneEl)
    allDoneSec.appendChild(scoreEl)
    allDoneSec.appendChild(initialEl)
    console.log(allDoneSec)
}


getHighScore = function (result) {
    document.getElementById('all-done').style.display = "none";
    document.getElementById('final-page').style.display = "block";
    var finalPageEl = document.createElement("h1")
    finalPageEl.innerHTML = "High scores"
    console.log(finalPageEl)
    var scoreEl = document.createElement("p")
    scoreEl.innerHTML = "1. " + result
    console.log(scoreEl)
    var finalButtonEl = document.createElement("section")
    finalButtonEl.className = "form"
    var goBackBtn = document.createElement("button")
    goBackBtn.innerHTML = "Go back"
    goBackBtn.className = "form-submit"
    goBackBtn.id = "go-back"
    var clearHighScore = document.createElement("button")
    clearHighScore.innerHTML = "Clear high score"
    clearHighScore.className = "form-submit"
    finalButtonEl.appendChild(goBackBtn)
    finalButtonEl.appendChild(clearHighScore)
    console.log(finalButtonEl)
    finalPageSec.appendChild(finalPageEl)
    finalPageSec.appendChild(scoreEl)
    finalPageSec.appendChild(finalButtonEl)
    console.log(finalPageSec)
    //alert("here")
}

var penaltyCountDown = function() {

}

buttonEl.addEventListener("click",function(){
    startQuiz();
})

// if (localStorage.getItem("quizResult") == null) {
//     var quizResult = []
//     getResult();
// }
// else if (localStorage.getItem("quizResult") != null) {
//     var quizResult = JSON.parse(localStorage.getItem("quizResult"))
//     getResult()
// }

var quizCounter = 0

// when any of the button of the quiz gets clicked, create next question
var startQuiz = function () {
    startCountDown(100);
    document.getElementById('content-start').style.display = "none";


    var createQuizEl = function(quizCounter) {
        document.getElementById('content-quiz').style.display = "block";
        var ansValue = quizQustion[quizCounter]["quizAnswer"]
        console.log(ansValue)
        quizEl.innerHTML = 
            "<h1>" + quizQustion[quizCounter]["quizDetails"]["quizQuestion"] + "</h1>";
        console.log(quizEl)
        var quizChoiceEl = document.createElement("ul");
        console.log(quizChoiceEl)
        var listBtnEl
        for(var j = 0; j < quizQustion[quizCounter]["quizDetails"]["quizChoice"].length; j++ ) {
            (function (j) {
            var listQuizEl = document.createElement("li")
            listBtnEl = document.createElement("button")
            listBtnEl.className = "main-quiz-btn"
            listBtnEl.id = "but"+"" + quizQustion[quizCounter]["quizId"] + j
            listBtnEl.innerHTML = quizQustion[quizCounter]["quizDetails"]["quizChoice"][j]
            console.log(listBtnEl)
            var inputValue = listBtnEl.id
            console.log(inputValue)

            listBtnEl.addEventListener("click", function() {
                
                if (quizCounter < 2 && timerEl.getAttribute("value") != 0) {
                    createQuizEl(quizCounter+1);
                    quizEl.append(checkAnswer(ansValue,inputValue.slice(inputValue.length - 1)));
                    var ans = checkAnswer(ansValue,inputValue.slice(inputValue.length - 1))
                    if(ans.innerHTML == "Wrong!") {
                        //alert("here")
                        var remain = timerEl.getAttribute("value") - 10
                        console.log(remain)
                        stopCountDown()
                        startCountDown(remain)
                        
                    }
                }
                else{
                    var ans = checkAnswer(ansValue,inputValue.slice(inputValue.length - 1))
                    if(ans.innerHTML == "Wrong!") {
                        
                        var remain = timerEl.getAttribute("value") - 10
                        console.log(remain)
                        stopCountDown()
                        startCountDown(remain)
                    }
                    else{
                        var remain = timerEl.getAttribute("value")
                    }
                    allDone(remain)
                    console.log(remain)
                    allDoneSec.appendChild(checkAnswer(ansValue,inputValue.slice(inputValue.length - 1)))
                    stopCountDown()
                    var submitBtn = document.getElementById ("submit-btn")
                    console.log(submitBtn)

                    var submitBtn = document.getElementById ("submit-btn")
                    console.log(submitBtn)

                    if (localStorage.getItem("quizResult") == null) {
                        var quizResult = []
                    }
                    else if (localStorage.getItem("quizResult") != null) {
                        var quizResult = JSON.parse(localStorage.getItem("quizResult"))
                    }

                    submitBtn.addEventListener("click", function(event) {
                        event.preventDefault();
                        var quizResultName = document.getElementById("ini-name").value
                        var quizResultScore = remain
                        console.log(quizResultName)
                        console.log(quizResultScore)
                        resultArray = {"name": quizResultName, "score":quizResultScore}
                        console.log(resultArray)
                        quizResult.push(resultArray)
                        console.log(quizResult)
                        localStorage.setItem("quizResult", JSON.stringify(quizResult));
                        var finalScore = JSON.parse(localStorage.getItem("quizResult"))
                        console.log(finalScore)
                        
                        var highest = Math.max(...finalScore.map(o => o.score))
                        console.log(highest)
                        var highestItem = finalScore.filter(item => item.score == highest)
                        console.log(highestItem)
                        var finalResult = highestItem[0]["name"]+"-"+highestItem[0]["score"]
                        console.log(finalResult)
                        getHighScore(finalResult)  
                        var goBack = document.getElementById ("go-back")
                        console.log(document.getElementById ("go-back"))
                        goBack.addEventListener("click", function(event) {
                            event.preventDefault();
                            document.getElementById('content-start').style.display = "block";
                            document.getElementById('final-page').style.display = "none";
                        })                      
                        })


                }
            })
            console.log(listBtnEl)
            listQuizEl.appendChild(listBtnEl)
            console.log(listQuizEl)
            quizChoiceEl.appendChild(listQuizEl)
            console.log(quizChoiceEl)
            }(j))
        }
        quizEl.appendChild(quizChoiceEl)
        console.log(quizEl)

        btnArray = []
        
    }

    createQuizEl(0)

// var submitBtn = document.getElementById ("submit-btn")
// console.log(submitBtn)

// if (localStorage.getItem("quizResult") == null) {
//     var quizResult = []
// }
// else if (localStorage.getItem("quizResult") != null) {
//     var quizResult = JSON.parse(localStorage.getItem("quizResult"))
// }

// submitBtn.addEventListener("click", function() {
//     var quizResultName = document.getElementById("ini-name").value
//     var quizResultScore = timerEl.getAttribute("value")
//     console.log(quizResultName)
//     console.log(quizResultScore)
//     resultArray = {"name": quizResultName, "score":quizResultScore}
//     console.log(resultArray)
//     quizResult.push(resultArray)
//     console.log(quizResult)
//     localStorage.setItem("quizResult", JSON.stringify(quizResult));
//     var finalScore = JSON.parse(localStorage.getItem("quizResult"))
//     console.log(finalScore)
    
//     var highest = Math.max(...finalScore.map(o => o.score))
//     console.log(highest)
//     var highestItem = finalScore.filter(item => item.score == highest)
//     console.log(highestItem)
//     var finalResult = highestItem[0]["name"]+"-"+highestItem[0]["score"]
//     console.log(finalResult)
//     getHighScore(finalResult)
//     alert("here")
//     })

// var saveResult = function() {
//     var submitBtn = document.getElementById ("submit-btn")
//     console.log(submitBtn)
  
//     var getResult = function() {submitBtn.addEventListener("click", function() {
//         var quizResultName = document.getElementById("ini-name").value
//         var quizResultScore = timerEl.getAttribute("value")
//         console.log(quizResultName)
//         console.log(quizResultScore)
//         resultArray = {"name": quizResultName, "score":quizResultScore}
//         console.log(resultArray)
//         quizResult.push(resultArray)
//         console.log(quizResult)
//         localStorage.setItem("quizResult", JSON.stringify(quizResult));
//         var finalScore = JSON.parse(localStorage.getItem("quizResult"))
//         console.log(finalScore)
        
//         var highest = Math.max(...finalScore.map(o => o.score))
//         console.log(highest)
//         var highestItem = finalScore.filter(item => item.score == highest)
//         console.log(highestItem)
//         var finalResult = highestItem[0]["name"]+"-"+highestItem[0]["score"]
//         console.log(finalResult)
//         getHighScore(finalResult)
//         alert("here")
//         })
//     }
//     if (localStorage.getItem("quizResult") == null) {
//         var quizResult = []
//         getResult();
//     }
//     else if (localStorage.getItem("quizResult") != null) {
//         var quizResult = JSON.parse(localStorage.getItem("quizResult"))
//         getResult()
//     }
// };

    // if (quizCounter < 3) {
    //     createQuizEl(quizCounter)
    //     console.log(quizCounter)
        
    // }
    // else {
    //     allDone(timerEl.getAttribute("value"))
    // }

    // quizCounter++
    // var btnEl= []
    // for (i = 0; i < iniQuestion.length; 1++) {
    //     var inputValue = iniQuestion[i]
    //     btnEl[i] = document.getElementById(inputValue)
    //     console.log(inputValue)
    //     console.log(btnEl[i]); 
    //     btnEl[i].addEventListener('click', function (event) {
    //         event.preventDefault();  
    //         createQuizEl(quizQustion[counter]["quizId"], quizQustion[counter]["quizDetails"]["quizQuestion"], quizQustion[counter]["quizDetails"]["quizChoice"])
    //         console.log(ansValue)
    //         console.log(inputValue)
    //         console.log(inputValue.slice(inputValue.length - 1))
    //         checkAnswer(ansValue,inputValue.slice(inputValue.length - 1))
    //         },false)

    // }
    // var btnItem = []
    // //For each question on the bank..
    // //for ( i = 0 ; i < quizQustion.length; i++) {
    // for ( i = 0 ; i < 2 ; i++) {
    //     btnItem[i] = createQuizEl(quizQustion[i]["quizId"], quizQustion[i]["quizDetails"]["quizQuestion"], quizQustion[i]["quizDetails"]["quizChoice"])
    //     console.log('here')
    //     console.log(btnItem[i])
    //     console.log(btnItem[i][0])
    //     console.log(quizEl)
    //     console.log(document.getElementById(btnItem[i][0]))
    //     console.log(quizQustion[i]["quizAnswer"])
    //     var ansValue = quizQustion[i]["quizAnswer"]

    //     var btnEl= []
    //     //For each button?
    //     for(let m = 0; m < btnItem[i].length; m++) {
    //         var inputValue = btnItem[i][m]
    //         btnEl[m] = document.getElementById(inputValue)
    //         console.log(inputValue)
    //         console.log(btnEl[m]); 
    //         btnEl[m].addEventListener('click', function (event) {
    //             event.preventDefault();  
    //             console.log(ansValue)
    //             console.log(inputValue)
    //             console.log(inputValue.slice(inputValue.length - 1))
    //             checkAnswer(ansValue,inputValue.slice(inputValue.length - 1))
    //             },false)   
    //         }

    //     // btnEl[m].addEventListener('click', function (event) {
    //     //     console.log('clicked');
    //     // }, false)
    
    //     }
    // const btnQuiz = document.querySelectorAll('button[id^=but]')
    // btnQuiz.forEach(btn => {
    // btn.addEventListener('click', event => {
    //         console.log( event.target.id );

    //     });
    // });
    
}



