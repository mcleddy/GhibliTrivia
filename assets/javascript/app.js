function Game() {
    //attributes
    this.correctAnswers = 0;
    this.incorrectAnswers= 0;
    this.currentQuestionIndex = 0;
    this.questions = [
        {
            question: "The city, Koriko in Kiki's Delivery Service was inspired by what European city?",
            answers: ["London", "Berlin", "Tokyo", "Stockholm"],
            rightAnswer: "Stockholm"
        }, {
            question: "Which two Ghibli movies were released together as a double feature?",
            answers: ["Kiki's Delivery Service and Castle in the Sky","My Neighbor Totoro and Grave of the Fireflies","Porco Roso and Kiki's Delivery Service","My Neighbor Totoro and Tales from Earthsea"],
            rightAnswer: "My Neighbor Totoro and Grave of the Fireflies"

        },{
            question: "Which Ghibli movie was the first movie animated movie distributed by Disney to have a PG-13?",
            answers: ["Tales from Earthsea", "Grave of the Fireflies", "The Wind Rises", "Princess Mononoke"],
            rightAnswer: "Princess Mononoke"

        },{
            question: "Studio Ghibli founder and director Hayao Miyazaki declined attending the Oscars one year in protest of what U.S. action?",
            answers: ["The U.S. increasing Japanese import tariffs", "The U.S. bombings of Iraq", "Increase in U.S. Pollution Output", "The U.S. breaking trade agreements"],
            rightAnswer: "The U.S. bombings of Iraq"

        },{
            question: "The Studio has a policy that no more than what amount of animation can be digitally rendered?",
            answers: ["25%", "15%", "10%", "20%"],
            rightAnswer: "10%"

        },{
            question: "The environmentalist message in Nausicaa of the Valley if the Wind was largely inspired by mercury poisoning of what body of water?",
            answers: ["The East Sea", "Minimata Bay", "Lake Toya", "Yamazaki River"],
            rightAnswer: "Minimata Bay"

        },{
            question: "The name Laputa is a reference to the floating island from what book?",
            answers: ["Treasure Island", "Swiss Family Robinson", "Illiad", "Gulliver's Travels"],
            rightAnswer: "Gulliver's Travels"

        },{
            question: "Which Studio Ghibli film is the only non-English language movie to win the Oscar for Best Animated Feature?",
            answers: ["Princess Mononoke", "My Neighbor Totoro", "Ponyo", "Spirited Away"],
            rightAnswer: "Spirited Away"

        },{
            question: "What animal did the animator's observe to use as a refence for Haku's dragon mouth?",
            answers: ["Cat", "Bear", "Dog", "Tiger"],
            rightAnswer: "Dog"

        },{
            question: "Hayao Miyazaki always handles what aspect of the film making process?",
            answers: ["Voice Casting", "Script Writing", "Storyboarding", "Scheduling"],
            rightAnswer: "Storyboarding"
        }
    ];

    //timer function
    var questionTimer = 0;
    var intervalId = null;

    this.startTimer = function () {
        questionTimer = 30;
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    this.stop = function () {
        clearInterval(intervalId);
    questionTtimer = [ ];
        $("#timer").text(questionTimer);
    }

    function decrement() {
        $("#timer").empty();
        $("#timer").append("<h2>" + questionTimer + "</h2>");
        questionTimer--;
        if (questionTimer === -1) {
            stop();
            alert("Out of Time!");
            clickNextButton();
        }
    }

};
///end game function
var currentGame = new Game();
var currentQuestion

$("#questionContainer").hide();
$("#next").hide();
$("#answerContainer").hide();
$("#resultsContainer").hide();

//starting game function
$("#start").on("click", function () {
    $("#start").hide();
    $("#instructions").show();
    $("#next").show();
    $("#questionContainer").show();
    $("#answerContainer").show();
    currentGame.startTimer();
    var i = currentGame.currentQuestionIndex
    $("#questionContainer").text( currentGame.questions[i].question);


    $("#answer1").text(currentGame.questions[0].answers[0]);
    $("#answer2").text(currentGame.questions[0].answers[1]);
    $("#answer3").text(currentGame.questions[0].answers[2]);
    $("#answer4").text(currentGame.questions[0].answers[3]);
});

$("#next").on("click", function () {
    clickNextButton();
});

//scoring quiz
function clickNextButton() {
    score();

    if (currentGame.currentQuestionIndex === 9) {
        currentGame.stop
        endGameShowScore();
    }

    else {

        $('input[name=radio-1').attr('checked', false);
        currentGame.startTimer();

        currentGame.currentQuestionIndex = (currentGame.currentQuestionIndex + 1);
        $("#questionContainer").text( currentGame.questions[currentGame.currentQuestionIndex].question);

        $("#answer1").text(currentGame.questions[currentGame.currentQuestionIndex].answers[0]);
        $("#answer2").text(currentGame.questions[currentGame.currentQuestionIndex].answers[1]);
        $("#answer3").text(currentGame.questions[currentGame.currentQuestionIndex].answers[2]);
        $("#answer4").text(currentGame.questions[currentGame.currentQuestionIndex].answers[3]);

    };

    function score() {

        var answer = currentGame.questions[currentGame.currentQuestionIndex].rightAnswer
        console.log(answer);

        var guess = currentGame.questions[currentGame.currentQuestionIndex].answers[$('input[name=radio-1]:checked').val()];
        console.log(guess);

        //checking guesses
        if (answer === guess) {
            currentGame.correctAnswers++;
        } else {
            currentGame.incorrectAnswers++;
        }
        console.log(currentGame.correctAnswers);
        console.log(currentGame.incorrectAnswers);
    };

    function endGameShowScore() {
        $("#questionContainer").hide();
        $("#answerContainer").hide();
        currentGame.stop();
        $("#timer").remove();
        $("#next").hide();
        $("#resultsContainer").show();
        $("#results").text("Correct Answers: " + currentGame.correctAnswers + " Incorrect Answers: " + currentGame.incorrectAnswers);

    };

};
