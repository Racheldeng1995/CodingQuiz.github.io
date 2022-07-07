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

var startCountDown = function(num) {
    var timeLeft = num;

    var timeInterval = setInterval(function () {
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
    quizEl.appendChild(ansEl)
    console.log(quizEl)
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
    var submitButton = document.createElement("button")
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

var penaltyCountDown = function() {

}
buttonEl.addEventListener("click",function(){
    startCountDown(100);
    startQuiz();

})

var quizCounter = 0

// when any of the button of the quiz gets clicked, create next question
var startQuiz = function () {
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
                
                if (quizCounter < 2) {
                    createQuizEl(quizCounter+1);
                    checkAnswer(ansValue,inputValue.slice(inputValue.length - 1));
                }
                else{
                    allDone(timerEl.getAttribute("value"))
                    console.log(timerEl.getAttribute("value"))
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



