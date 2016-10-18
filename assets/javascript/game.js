$(document).ready(function() {
    startGame();
    var crystalValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var randomValue = [];
    var yourScore = 0;
    var losses = 0;
    var wins = 0;
    var greenCrystal;
    var purpleCrystal;
    var yellowCrystal;
    var redCrystal;
    // show random numbers at start of game
    function reset() {
        $('#crystals').text("");
        yourScore = 0;
        $('#your-score').text(0);
        startGame();
    }

    function startGame() {
            var randomNumber = Math.floor((Math.random() * 120) + 19);
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
            $('#crystals').append(greenCrystal);
            purpleCrystal = $('<img>');
            purpleCrystal.attr('data-num', purpleRandomValue);
            purpleCrystal.attr('src', './assets/images/Purple.jpg');
            purpleCrystal.attr('alt', 'Purple Crystal');
            $('#crystals').append(purpleCrystal);
            yellowCrystal = $('<img>');
            yellowCrystal.attr('data-num', yellowRandomValue);
            yellowCrystal.attr('src', './assets/images/Yellow.jpg');
            yellowCrystal.attr('alt', 'Yellow Crystal');
            $('#crystals').append(yellowCrystal);
            redCrystal = $('<img>');
            redCrystal.attr('data-num', redRandomValue);
            redCrystal.attr('src', './assets/images/Red.jpg');
            redCrystal.attr('alt', 'Red Crystal');
            $('#crystals').append(redCrystal);
        }
        // ----------------------loop option----------------
        // for (var i = 0; i < randomValue.length; i++) {
        // var Crystal = $('<img>');
        // imageCrystal.attr('data-num', numbers[i]);
        // imageCrystal.attr('src', './assets/images/??????.jpg');
        // imageCrystal.attr('alt', 'crystals');
        // $('#crystals').append(Crystal);
        // }
        // when one of the crystals is clicked, add value of crystal to user score
        // if user score is greater than random number then add 1 to losses and restart game
        // if user score equals random number then add 1 to wins and restart game
    $('#crystals').on('click', function() {
        yourScore = yourScore + parseInt($(this).data('num'));
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
    // ----------------test scenario--------------
    // $('#crystals').on('click', function() {
    //     yourScore++;
    //     $('#your-score').text(yourScore);
    //     if (yourScore == 3) {
    //         wins++;
    //         $('#wins').html("Wins: " + wins);
    //         $('#result-announced').html('You won!!!!');
    //         reset();
    //     } else if (yourScore > 5) {
    //         losses++;
    //         $('#losses').html("Losses: " + losses);
    //         $('#result-announced').html('You lost!');
    //         reset();
    //     }
    // });
});