"use strict";

const klik = document.querySelector("button");
const input = document.querySelector("input");
const resultBox = document.querySelector("p");

klik.addEventListener("click", moms);

function moms(price, moms = 1.25) {
  price = input.value;
  console.log(price * moms);
  let result = price * moms;
  resultBox.innerHTML = "Moms er: " + result + "kr.";
}
