"use strict";

let guess = document.querySelector(".guess");
let checkButton = document.querySelector(".check");
let againButton = document.querySelector(".again");

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let number = Math.trunc(Math.random() * 20 + 1);
let score = 5;

let highScore = 0;

checkButton.addEventListener("click", function () {
  let guessValue = Number(guess.value);
  if (!guessValue) {
    // document.querySelector(".message").textContent = "No Number!";
    displayMessage("No Number!");
    // When player Wins
  } else if (guessValue === number) {
    // document.querySelector(".message").textContent = "You Win!";
    displayMessage("You Win!");
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "green";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".high-score").textContent = highScore;
    }
    // If Guess Too High
  } else if (guessValue !== number) {
    if (score > 1) {
      //   document.querySelector(".message").textContent =
      //     guessValue > number ? "Too high" : "Too Low";
      displayMessage(guessValue > number ? "Too high" : "Too Low");
      // Have to decrease the score BEFORE putting it in the textcontent
      score--;
      document.querySelector(".current-score").textContent = score;
    } else {
      //   document.querySelector(".message").textContent = "You Lose";
      displayMessage("You Lose!");
      document.querySelector(".current-score").textContent = 0;
      document.querySelector(".number").textContent = number;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

againButton.addEventListener("click", function () {
  score = 5;
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".current-score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".high-score").textContent = highScore;
});
