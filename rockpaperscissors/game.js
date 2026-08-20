"use strict";

let aiChoice;
let plChoice;

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const ai = document.querySelector("#player2");
const draw = document.querySelector("#draw");
const win = document.querySelector("#win");
const lose = document.querySelector("#lose");

paperBtn.addEventListener("click", click);
scissorsBtn.addEventListener("click", click);
rockBtn.addEventListener("click", click);

function click(e) {
  player1.classList.remove("scissors", "rock", "paper");
  ai.classList.remove("scissors", "rock", "paper");
  plChoice = e.target.className;
  choose();
}

function choose() {
  let aiNr = Math.floor(Math.random() * 3);
  if (aiNr === 0) {
    aiChoice = "rock";
  } else if (aiNr === 1) {
    aiChoice = "paper";
  } else {
    aiChoice = "scissors";
  }
  counter();
}

function counter() {
  draw.classList.add("hidden");
  win.classList.add("hidden");
  lose.classList.add("hidden");
  player1.classList.add("shake");
  ai.classList.add("shake");
}

player1.addEventListener("animationend", show);

function show() {
  player1.classList.remove("shake");
  ai.classList.remove("shake");
  if (plChoice === "rock") {
    player1.classList.add("rock");
  } else {
    if (plChoice === "paper") {
      player1.classList.add("paper");
    } else {
      player1.classList.add("scissors");
    }
  }
  if (aiChoice === "rock") {
    ai.classList.add("rock");
  } else {
    if (aiChoice === "paper") {
      ai.classList.add("paper");
    } else {
      ai.classList.add("scissors");
    }
  }
  result();
}

function result() {
  if (aiChoice === plChoice) {
    draw.classList.remove("hidden");
  } else {
    if (
      (plChoice === "rock" && aiChoice === "scissors") ||
      (plChoice === "paper" && aiChoice === "rock") ||
      (plChoice === "scissors" && aiChoice === "paper")
    ) {
      win.classList.remove("hidden");
    } else if (
      (plChoice === "rock" && aiChoice === "paper") ||
      (plChoice === "paper" && aiChoice === "scissors") ||
      (plChoice === "scissors" && aiChoice === "rock")
    ) {
      lose.classList.remove("hidden");
    }
  }
}

// Guides og baggrundsviden fra
// MDN Web Docs & W3Schools
