import { randomNumber } from "../utils/utils_lib.js";

const arr = [];

function makeColumn() {
  let number = randomNumber(100);
  const list = document.querySelector("ul");
  const li = document.createElement("li");
  arr.push(number);
  if (arr.length > 20) {
    arr.shift();
    li.style.setProperty("--height", number);
    list.appendChild(li);
    list.removeChild(list.firstElementChild);
  } else {
    li.style.setProperty("--height", number);
    list.appendChild(li);
  }
}

setInterval(makeColumn, 700);
