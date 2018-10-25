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

var crystalValueArray = [];
for (var i = 1; i < 5; i++) {
    var imageCrystal = $("#crystal" + [i]);
    // function checkNumber(numberOptions){
        numberOptions = [Math.floor(Math.random() * 11) + 1];
        // if (crystalValueArray.indexOf(numberOptions) === -1) {
                imageCrystal.attr("data-crystalvalue", numberOptions);
                $("#crystals").append(imageCrystal);
    //     } else {
    //         checkNumber(numberOptions);
    //     }
    // }

   
}



$(".crystal-image").on("click", function() {

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
        targetNumber = parseInt([Math.floor(Math.random() * 102) + 18]);
        $("#target-number").text(targetNumber);        
        scoreCounter = 0;
        $("#score-counter").text(scoreCounter);
        for (var i = 1; i < 5; i++) {
            var imageCrystal = $("#crystal" + [i]);
            numberOptions = [Math.floor(Math.random() * 11) + 1];
            imageCrystal.attr("data-crystalvalue", numberOptions);
            $("#crystals").append(imageCrystal);
        }
    } else if (scoreCounter > targetNumber) {
        lossCounter++;
        $("#loss-counter").text(lossCounter);
        targetNumber = parseInt([Math.floor(Math.random() * 102) + 18]);
        $("#target-number").text(targetNumber);        
        scoreCounter = 0;
        $("#score-counter").text(scoreCounter);
        for (var i = 1; i < 5; i++) {
            var imageCrystal = $("#crystal" + [i]);
            numberOptions = [Math.floor(Math.random() * 11) + 1];
            imageCrystal.attr("data-crystalvalue", numberOptions);
            $("#crystals").append(imageCrystal);
        }
        
    }

});

