"use strict";

let guess = document.querySelector(".guess");
let checkButton = document.querySelector(".check");
let againButton = document.querySelector(".again");

let number = Math.trunc(Math.random() * 20 + 1);
let score = 5;

let highScore = 0;

checkButton.addEventListener("click", function () {
  let guessValue = Number(guess.value);
  if (!guessValue) {
    document.querySelector(".message").textContent = "No Number!";
  } else if (guessValue === number) {
    document.querySelector(".message").textContent = "You Win!";
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "green";
    if (score > highScore) {
      document.querySelector(".high-score").textContent = score;
    }
  } else if (guessValue > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High";
      // Have to decrease the score BEFORE putting it in the textcontent
      score--;
      document.querySelector(".current-score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lose";
      document.querySelector(".current-score").textContent = 0;
    }
  } else if (guessValue < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low";
      score--;
      document.querySelector(".current-score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lose";
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
  document.querySelector(".guess").textContent = "";
  document.querySelector("body").style.backgroundColor = "black";
});
