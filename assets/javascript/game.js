$(document).ready(function() {
    // --------------variables for loop option-----------------
    var crystal;
    var resultCrystal;
    var crystalValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
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

    function reset() {
            $('.crystals').text("");
            yourScore = 0;
            $('#your-score').text(0);
            startGame();
        }
        // assign random numbers at start of game

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
            // ----------------------loop option----------------
            // for (var i = 0; i < colors.length; i++) {
            // var resultCrystal = eval("colors[i]"+crystal);
            // console.log(resultCrystal);
            // resultCrystal = $('<img>');
            // resultCrystal.attr('data-num', colors[i]+RandomValue);
            // resultCrystal.attr('src', './assets/images/'+colors[i]+'.jpg');
            // resultCrystal.attr('alt', ''+colors[i]+' Crystal');
            // resultCrystal.attr('class', 'images');
            // $('.crystals').append(resultCrystal);
            // }
            // playGame();
            // ----------------------loop option 2----------------
            // for (var i = 0; i < randomValue.length; i++) {
            // var Crystal = $('<img>');
            // imageCrystal.attr('data-num', numbers[i]);
            // imageCrystal.attr('src', './assets/images/??????.jpg');
            // imageCrystal.attr('alt', 'crystals');
            // $('.crystals').append(Crystal);
            // }
            // playGame();
        }
        // when one of the crystals is clicked, add value of crystal to user score
        // if user score is greater than random number then add 1 to losses and restart game
        // if user score equals random number then add 1 to wins and reset game

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
        // ----------------test scenario--------------
        // $('.crystals').on('click', function() {
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