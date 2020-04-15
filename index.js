// Set up random numbers

var randomNum1 = Math.random() * 6;
randomNum1 = Math.floor(randomNum1) + 1;
var randomNum2 = Math.random() * 6;
randomNum2 = Math.floor(randomNum2) + 1;

// Get current dicee images

var dice6p1 = document.getElementsByClassName("img1")[0];
var dice6p2 = document.getElementsByClassName("img2")[0];

// For randomNum1 (Player 1)

if (randomNum1 === 1) {
  dice6p1.setAttribute("src", "images/dice1.png");
}

else if (randomNum1 === 2) {
  dice6p1.setAttribute("src", "images/dice2.png");
}

else if (randomNum1 === 3) {
  dice6p1.setAttribute("src", "images/dice3.png");
}

else if (randomNum1 === 4) {
  dice6p1.setAttribute("src", "images/dice4.png");
}

else if (randomNum1 === 5) {
  dice6p1.setAttribute("src", "images/dice5.png");
}

else if (randomNum1 === 6) {
  dice6p1.setAttribute("src", "images/dice6.png");
}

// For randomNum2 (Player 2)

if (randomNum2 === 1) {
  dice6p2.setAttribute("src", "images/dice1.png");
}

else if (randomNum2 === 2) {
  dice6p2.setAttribute("src", "images/dice2.png");
}

else if (randomNum2 === 3) {
  dice6p2.setAttribute("src", "images/dice3.png");
}

else if (randomNum2 === 4) {
  dice6p2.setAttribute("src", "images/dice4.png");
}

else if (randomNum2 === 5) {
  dice6p2.setAttribute("src", "images/dice5.png");
}

else if (randomNum2 === 6) {
  dice6p2.setAttribute("src", "images/dice6.png");
}

// Get the 'Refresh Me' tag

var winningPlayer = document.getElementsByTagName("h1")[0];
// Print out the winning player

if (randomNum1 > randomNum2) {
  winningPlayer.innerHTML = "🚩Player 1 Wins!";
}

else if (randomNum2 > randomNum1) {
  winningPlayer.innerHTML = "Player 2 Wins!🚩";
}

else {
  winningPlayer.innerHTML = "Draw!";
}
