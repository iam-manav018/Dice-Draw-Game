var randomNumber = Math.floor(Math.random()*6) + 1;
var randomImage = "dice" + randomNumber + ".png";
var randomImageSource = "images/" + randomImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomImage1;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource1);
if(randomNumber > randomNumber1){
    document.querySelector("h1").innerHTML= "Player 1 wins!";
}
else if(randomNumber1 > randomNumber){
    document.querySelector("h1").innerHTML= "Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML= "Draw!";
}
