"use strict";

document
  .querySelector("body")
  .addEventListener("mousemove", (e) => changeColor(e));

function changeColor(e) {
  const fullWidth = window.innerWidth;
  const fullHeight = window.innerHeight;
  let lValue = (e.clientX / fullWidth) * 100;
  let sValue = (e.clientY / fullHeight) * 100;

  document
    .querySelector("body")
    .style.setProperty("background-color", `hsl(180, ${sValue}%, ${lValue}%)`);
}
