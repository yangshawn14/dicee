var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var randomImageSource1 = "images/" + randomDiceImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

// For dice2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

// simplified solution using string formatting - have to use backticks "` `" & "${}" 
// document.querySelector(".img1").setAttribute("src", `/images/dice${randomNumber1}.png`);
// document.querySelector(".img2").setAttribute("src", `/images/dice${randomNumber2}.png`);




// IF player1 Wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
}

// IF player2 Wins
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}

// IF Tie
else {
    document.querySelector("h1").innerHTML = "🚩 Draw 🚩";
}
