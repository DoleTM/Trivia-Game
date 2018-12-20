// An object full of the questions, selections and answers to the trivia questions.
var triviaQuestions = [{
    question: "What is Michael Scott's hidden talent?",
    selection: ["Comedy", "Basketball", "Ice Hockey", "Party Planning"],
    answer: "Ice Hockey"
}, {
    question: "What does Darryl tell Michael to never touch while in the warehouse?",
    selection: ["Baler", "Forklift", "Ladder", "Knife"],
    answer: "Baler"
}, {
    question: "What is the name of the Dentist that Dwight goes to see but really meets up with Jan",
    selection: ["Dr. Hunter", "Crentist", "Rentist", "Dr. Mahan"],
    answer: "Crentist"
}, {
    question: "Who does Michael Scott NOT have a relationship with?",
    selection: ["Pam's Mom", "Cynthia", "Jan", "Carol"],
    answer: "Cynthia"
}, {
    question: "What band was Creed Bratton actually a part of in real life",
    selection: ["Steve Miller Band", "Rolling Stones", "The Pat Travers Band", "Grass Roots"],
    answer: "Grass Roots"
}, {
    question: "What day does Stanley say he likes?",
    selection: ["Pretzel Day", "Michael's Last Day", "Diversity Day", "Recyclops Day"],
    answer: "Pretzel Day"
}];

for (let i = 0; i < triviaQuestions.length; i++) {
    var questionDiv = $("#questions-div");
    // This adds the questions to display on the html
    questionDiv.append("<div>" + triviaQuestions[i].question + "</div>");
// This adds the selection to each question as a radio button to the html
    $("#questions-div").append('<label class="container">' + '<input type="radio" name="radio">' + '<span class="checkmark">' + '</span>' + triviaQuestions[i].selection[0] + '</label>');
    $("#questions-div").append('<label class="container">' + '<input type="radio" name="radio">' + '<span class="checkmark">' + '</span>' + triviaQuestions[i].selection[1] + '</label>');
    $("#questions-div").append('<label class="container">' + '<input type="radio" name="radio">' + '<span class="checkmark">' + '</span>' + triviaQuestions[i].selection[2] + '</label>');
    $("#questions-div").append('<label class="container">' + '<input type="radio" name="radio">' + '<span class="checkmark">' + '</span>' + triviaQuestions[i].selection[3] + '</label>');
}

// Variable for the timer
var timerDisplay = 120;

function timerStart() {
    $("#timer").text("Time Remaining: " + timerDisplay);
    setInterval(timerDisplay, 1000)
    timerDisplay--;
    if (timerDisplay === 0) {
        timerStop();
        $("#timer").empty();
    }
}

function timerStop() {
    clearInterval();
    resultDisplay();
}
// By clicking the start button it will "start" the game.
$("#start").click(function() {
    // Hide the start page.
    $(".start-div").hide();
    // Make the trivia div visible.
    $("#trivia-div").show();

    // Show the time remaining
    timerStart();
    if (timerDisplay === 0) {
        timerStop();
        $("#trivia-div").hide();
        $("#result-div").show();
        resultDisplay();
    } else if ($("#finish").click() === true) {
        $("#trivia-div").hide();
        $("#result-div").show();
        resultDisplay();
    }
});
// Varibles for the results page
    var userInput;
    var userCorrect;
    var displayCorrect = $("#right");
    var displayWrong = $("#wrong");
    var displayNoInput = $("#undefined");

function resultDisplay() {
    for (let i = 0; i < triviaQuestions.length; i++)
        userInput = $().();
        userCorrect = triviaQuestions[i].length
    if (userInput === answer) {
        displayCorrect++;
    } else if (userInput !== answer) {
        displayWrong++;
    } else {
        displayNoInput++;
    }
}