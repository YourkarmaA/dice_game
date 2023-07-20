//player 1 dice number
var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = randomDiceImage;
var player1 = document.querySelectorAll("img")[0];
player1.setAttribute("src", randomImageSource);

//player 2 dice number
var randomNumber2 = Math.floor((Math.random()*6)+1);
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = randomDiceImage2;
var player2 = document.querySelectorAll("img")[1];
player2.setAttribute("src", randomImageSource2);

//who won
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins! 🚩"
}else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩"
} else {
    document.querySelector("h1").innerHTML="Draw!"
}