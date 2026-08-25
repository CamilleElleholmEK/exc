"use strict";

const crumbBox = document.querySelector(".crumbBox");
const btn = document.querySelector("#generate");
const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

btn.addEventListener("click", addCrumbs);

function addCrumbs(e) {
  crumbBox.innerHTML = crumbs();
}

function crumbs() {
  let tekst = "";
  bc.forEach((element, index) => {
    if (index !== bc.length - 1) {
      tekst += `<a href=${element.link}>${element.name}</a>`;
      tekst += "/";
    } else {
      tekst += `<p style="margin: 0px 10px;">${element.name}</p>`;
    }
  });
  return tekst;
}
