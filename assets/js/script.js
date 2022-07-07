//question bank
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

//get main section from html
var timerEl = document.querySelector("#timer")
var buttonEl = document.querySelector("#start-btn")
var quizEl = document.querySelector("#content-quiz")
var allDoneSec = document.querySelector("#all-done")
var finalPageSec = document.querySelector("#final-page")


//start count down function, can inout any value as start counting point
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

//stop count down function, to stop the current timer
function stopCountDown() {
    clearInterval(timeInterval);
  }


//check answer function
//it's used to check if the user give the correct answer
//and create a section on html to display the result
var checkAnswer = function(answer, input){
    var ansEl = document.createElement("p")
    ansEl.className = "quiz-anwser"
    if (input == answer-1) {
        ansEl.innerHTML = "Correct!"
    }
    else {
        ansEl.innerHTML = "Wrong!"
    }

    return ansEl
}

//This function is used to create html and css styling for all done section
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
}


//This function is used to create html and css styling for final saving page section
//The input is getting from the local storage value
getHighScore = function (result) {
    document.getElementById('all-done').style.display = "none";
    document.getElementById('final-page').style.display = "block";
    var finalPageEl = document.createElement("h1")
    finalPageEl.innerHTML = "High scores"
    var scoreEl = document.createElement("p")
    scoreEl.innerHTML = "1. " + result
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
    finalPageSec.appendChild(finalPageEl)
    finalPageSec.appendChild(scoreEl)
    finalPageSec.appendChild(finalButtonEl)
}


// start the quiz test with clicking onthe start button
buttonEl.addEventListener("click",function(){
    startQuiz();
})


var quizCounter = 0

// The function that execute the algorithm and listen the user behavior
var startQuiz = function () {
    //start count down
    startCountDown(100);
    document.getElementById('content-start').style.display = "none";

    //when any of the button of the quiz gets clicked, create next question
    var createQuizEl = function(quizCounter) {
        document.getElementById('content-quiz').style.display = "block";

        //get the correct answer for later comparison
        var ansValue = quizQustion[quizCounter]["quizAnswer"]
        
        //create question 
        quizEl.innerHTML = 
            "<h1>" + quizQustion[quizCounter]["quizDetails"]["quizQuestion"] + "</h1>";
        
        
        //create question choice
        var quizChoiceEl = document.createElement("ul");
        
        //create question button
        for(var j = 0; j < quizQustion[quizCounter]["quizDetails"]["quizChoice"].length; j++ ) {
            (function (j) {
            var listQuizEl = document.createElement("li")
            listBtnEl = document.createElement("button")
            listBtnEl.className = "main-quiz-btn"
            listBtnEl.id = "but"+"" + quizQustion[quizCounter]["quizId"] + j
            listBtnEl.innerHTML = quizQustion[quizCounter]["quizDetails"]["quizChoice"][j]

            var inputValue = listBtnEl.id
            
            //listen user behaviors
            listBtnEl.addEventListener("click", function() {
                
                //if the question is not the last one, then click button, go to the next question
                //if the question is the last one, click button go to the game over page
                //if run out of time, click any button, go to the game over page
                if (quizCounter < 2 && timerEl.getAttribute("value") != 0) {
                    createQuizEl(quizCounter+1);
                    quizEl.append(checkAnswer(ansValue,inputValue.slice(inputValue.length - 1)));
                    var ans = checkAnswer(ansValue,inputValue.slice(inputValue.length - 1))
                    if(ans.innerHTML == "Wrong!") {

                        //if the user clicks the wrong answer, subtract 10 sec from timer
                        var remain = timerEl.getAttribute("value") - 10
                        stopCountDown()
                        startCountDown(remain)
                        
                    }
                }
                else{
                    var ans = checkAnswer(ansValue,inputValue.slice(inputValue.length - 1))
                    if(ans.innerHTML == "Wrong!") {
                        var remain = timerEl.getAttribute("value") - 10
                        stopCountDown()
                        startCountDown(remain)
                    }
                    else{
                        var remain = timerEl.getAttribute("value")
                    }

                    allDone(remain)
                    allDoneSec.appendChild(checkAnswer(ansValue,inputValue.slice(inputValue.length - 1)))
                    stopCountDown()

                    //submit button functionality
                    //set and get the value from local storage
                    var submitBtn = document.getElementById ("submit-btn")

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
                        var resultArray = {"name": quizResultName, "score":quizResultScore}
                        quizResult.push(resultArray)
                        
                        localStorage.setItem("quizResult", JSON.stringify(quizResult))

                        var finalScore = JSON.parse(localStorage.getItem("quizResult"))                      
                        var highest = Math.max(...finalScore.map(o => o.score))
                        var highestItem = finalScore.filter(item => item.score == highest)    
                        var finalResult = highestItem[0]["name"]+"-"+highestItem[0]["score"]
    
                        getHighScore(finalResult)  

                        //go back to main page button
                        var goBack = document.getElementById ("go-back")

                        goBack.addEventListener("click", function(event) {
                            event.preventDefault();
                            document.getElementById('content-start').style.display = "block";
                            document.getElementById('final-page').style.display = "none";
                        })                      
                    })


                }
            })
            
            listQuizEl.appendChild(listBtnEl)           
            quizChoiceEl.appendChild(listQuizEl)
            }(j))
        }
        quizEl.appendChild(quizChoiceEl)
    
    }

    createQuizEl(0)
}



