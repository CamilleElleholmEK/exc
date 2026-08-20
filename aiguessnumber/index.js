"use strict";

// consts
const guessBox = document.querySelector(".guessBox");
const start = document.querySelector(".start");
const low = document.querySelector(".low");
const high = document.querySelector(".high");
const correct = document.querySelector(".correct");

let upper;
let lower;
let guess;
let guessCount;

// eventlistener start
start.addEventListener("click", () => {
  low.disabled = false;
  high.disabled = false;
  correct.disabled = false;
  start.disabled = true;
  upper = 100;
  lower = 1;
  guessCount = 0;
  math();
});

high.addEventListener("click", () => {
  upper = guess - 1;
  math();
});

low.addEventListener("click", () => {
  lower = guess + 1;
  math();
});

correct.addEventListener("click", () => {
  guessBox.innerHTML =
    "Juhuuu! Jeg gættede det på " +
    guessCount +
    " forsøg. Tryk på start for at prøve igen.";
  low.disabled = true;
  high.disabled = true;
  correct.disabled = true;
  start.disabled = false;
});

// generer gæt
function math() {
  guess = Math.floor((lower + upper) / 2);
  guessBox.innerHTML = "Jeg gætter på " + guess;
  guessCount = guessCount + 1;
}

// vinde funktion
