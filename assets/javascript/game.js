$(document).ready(function() {
    // --------------global variables-------------
    var colors = ["red", "yellow", "purple", "green"];
    var randomValue = [];
    var randomNumber = 0;
    var yourScore = 0;
    var losses = 0;
    var wins = 0;
    var greenCrystal;
    var purpleCrystal;
    var yellowCrystal;
    var redCrystal;
    startGame();
    // -----------reset game----------------
    function reset() {
            $('.crystals').text("");
            yourScore = 0;
            $('#your-score').text(0);
            startGame();
        }
        // --------assign random numbers at start of game---------

    function startGame() {
            randomNumber = Math.floor((Math.random() * 120) + 19);
            $('#random-number').text(randomNumber);
            var greenRandomValue = Math.floor((Math.random() * 12) + 1);
            var purpleRandomValue = Math.floor((Math.random() * 12) + 1);
            var yellowRandomValue = Math.floor((Math.random() * 12) + 1);
            var redRandomValue = Math.floor((Math.random() * 12) + 1);
            // assign random value to each of the crystals at start of game
            greenCrystal = $('<img>');
            greenCrystal.attr('data-num', greenRandomValue);
            greenCrystal.attr('src', './assets/images/Green.jpg');
            greenCrystal.attr('alt', 'Green Crystal');
            greenCrystal.attr('class', 'images');
            $('.crystals').append(greenCrystal);
            purpleCrystal = $('<img>');
            purpleCrystal.attr('data-num', purpleRandomValue);
            purpleCrystal.attr('src', './assets/images/Purple.jpg');
            purpleCrystal.attr('alt', 'Purple Crystal');
            purpleCrystal.attr('class', 'images');
            $('.crystals').append(purpleCrystal);
            yellowCrystal = $('<img>');
            yellowCrystal.attr('data-num', yellowRandomValue);
            yellowCrystal.attr('src', './assets/images/Yellow.jpg');
            yellowCrystal.attr('alt', 'Yellow Crystal');
            yellowCrystal.attr('class', 'images');
            $('.crystals').append(yellowCrystal);
            redCrystal = $('<img>');
            redCrystal.attr('data-num', redRandomValue);
            redCrystal.attr('src', './assets/images/Red.jpg');
            redCrystal.attr('alt', 'Red Crystal');
            redCrystal.attr('class', 'images');
            $('.crystals').append(redCrystal);
            playGame();
        }
        // ---------------process user input-----------------

    function playGame() {
        $('.images').on('click', function() {
            yourScore = yourScore + parseInt($(this).data(
                'num'));
            $('#your-score').text(yourScore);
            if (yourScore == randomNumber) {
                wins++;
                $('#wins').html("Wins: " + wins);
                $('#result-announced').html('You won!!!!');
                reset();
            } else if (yourScore > randomNumber) {
                losses++;
                $('#losses').html("Losses: " + losses);
                $('#result-announced').html('You lost!');
                reset();
            }
        });
    }
});