
$(document).ready(function(){

    

    // var luke = '<div class="iviewer_image_mask" ' +  
    //       'src: url(http://vignette3.wikia.nocookie.net/starwars/images/6/62/LukeGreenSaber-MOROTJ.png/revision/latest?cb=20150426200707);">'+
    //       '</div>';

    var luke = $("<div>")
    .prepend("<p id='new'>Luke</p>")
    .add('<img src="./assets/images/luke.jpg" alt="Luke" />')
    .attr('title', 'Lukas');
    luke.data({
        health: 100,
        name: 'Luke',
        attack: 20
    }),


$("#characters-to-play").append(luke);

// Create Div for each of the characters
//     characters will contain attributes with "Health Points", "Attack Power", and "Counter Attack Power"
//     characters will diplay character name at top, image then Health Points at bottom

// on start all characters will be desplayed in characters to play

// First character selected moves to "your character" row and move remaining characters to "enemies avaliable to attack"

// Second character selected moves to "Defender" row

// Attacking
    
//     Your Character Attack Power increases by its base Attack Power on every click.
//     Defender Health Points is reduced by Your character attack power.
//     Defender counter attack decreases your character health points at a constant rate
//     If your character Healthpoints is 0 or less then first character is defeated
//     If defender Health Points is 0 or less then second character is defeated




// If first character is defeated
//     attack button is disabled
//     restart button appears

// If first defender is defeated
//     remove defender
//     disable attack button with a message that "no enemy here"
//     allow user to pick character from "enemies available to attack"










});