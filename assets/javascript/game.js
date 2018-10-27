// Javascript page for Unit-4-Game - Crystal Collector
var scoreCounter = 0;
var targetNumber = 0;


function generateRandomNumber(min, max) {
    return parseInt(Math.floor(Math.random() * (max - min)) + min);
}

function setTargetNumber() {
    targetNumber = generateRandomNumber(18, 120);
    $("#target-number").text(targetNumber);
}

setTargetNumber();
scoreCounter = 0;
$("#score-counter").text(scoreCounter);
console.log(scoreCounter, targetNumber)

// newTargetNumber(targetNumber);
// newScoreCounter(scoreCounter);
console.log(scoreCounter, targetNumber)

var winCounter = 0;
var lossCounter = 0;
$("#win-counter").text(winCounter);
$("#loss-counter").text(lossCounter);

console.log(scoreCounter)
var numberOptions = 0;

var crystalValueArray = [];
for (var i = 1; i < 5; i++) {
    var imageCrystal = $("#crystal" + [i]);
    imageCrystal.attr("data-crystalvalue", generateRandomNumber(1, 12));
    $("#crystals").append(imageCrystal);

}



$(".crystal-image").on("click", function () {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    console.log(scoreCounter);
    scoreCounter += crystalValue;
    console.log(scoreCounter);

    $("#score-counter").text(scoreCounter);
    console.log(scoreCounter, targetNumber);
    // debugger
    if (scoreCounter == targetNumber) {
        winCounter++;
        $("#win-counter").text(winCounter);
        setTargetNumber();
        scoreCounter = 0;
        $("#score-counter").text(scoreCounter);
        for (var i = 1; i < 5; i++) {
            var imageCrystal = $("#crystal" + [i]);
            imageCrystal.attr("data-crystalvalue", generateRandomNumber(1, 12));
            $("#crystals").append(imageCrystal);
        }
    } else if (scoreCounter > targetNumber) {
        lossCounter++;
        $("#loss-counter").text(lossCounter);
        setTargetNumber();
        scoreCounter = 0;
        $("#score-counter").text(scoreCounter);
        for (var i = 1; i < 5; i++) {
            var imageCrystal = $("#crystal" + [i]);
            imageCrystal.attr("data-crystalvalue", generateRandomNumber(1, 12));
            $("#crystals").append(imageCrystal);
        }

    }

});

