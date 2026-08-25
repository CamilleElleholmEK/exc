import { randomNumber } from "../utils/utils_lib.js";

const arr = [];

function makeColumn() {
  let number = randomNumber(100);
  const list = document.querySelector("ul");
  const li = document.createElement("li");
  arr.push(number);
  li.style.setProperty("--height", number);
  list.appendChild(li);
  if (arr.length > 20) {
    arr.shift();
    list.removeChild(list.firstElementChild);
  }
}

setInterval(makeColumn, 700);
