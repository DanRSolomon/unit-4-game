// Javascript page for Unit-4-Game - Crystal Collector
var scoreCounter = 0;

var targetNumber = 0

targetNumber = parseInt([Math.floor(Math.random() * 102) + 18]);
$("#target-number").text(targetNumber);

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

for (var i = 1; i < 5; i++) {

    var imageCrystal = $("#crystal" + [i]);

    // imageCrystal.addClass("crystal-image");

    // imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    numberOptions = [Math.floor(Math.random() * 11) + 1];
    imageCrystal.attr("data-crystalvalue", numberOptions);

    $("#crystals").append(imageCrystal);
}



$(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    console.log(scoreCounter);
    scoreCounter += crystalValue;
    console.log(scoreCounter);

    $("#score-counter").text(scoreCounter);
    console.log(scoreCounter, targetNumber);

    if (scoreCounter == targetNumber) {
        $("#win-counter").text(winCounter++);
        targetNumber = parseInt([Math.floor(Math.random() * 102) + 18]);
        $("#target-number").text(targetNumber);        
        scoreCounter = 0;
        $("#score-counter").text(scoreCounter);
    } else if (scoreCounter > targetNumber) {
        $("#loss-counter").text(lossCounter++);
        targetNumber = parseInt([Math.floor(Math.random() * 102) + 18]);
        $("#target-number").text(targetNumber);        
        scoreCounter = 0;
        $("#score-counter").text(scoreCounter);
    }

});

