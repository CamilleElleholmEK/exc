"use strict";

const select = document.querySelector("select");
const body = document.querySelector("body");
const storedTheme = localStorage.getItem("themeSwitch");

if (storedTheme !== null) {
  console.log("Stored theme", storedTheme);
  setTheme(storedTheme);
  select.value = storedTheme;
}

select.addEventListener("change", (e) => {
  let chosenTheme = e.target.value;
  setTheme(chosenTheme);
});

function setTheme(chosenTheme) {
  body.dataset.theme = chosenTheme;
  localStorage.setItem("themeSwitch", chosenTheme);
}
