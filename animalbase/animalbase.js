"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};

function start() {
  console.log("ready");
  const btns = document.querySelectorAll("[data-action=filter]");
  // TODO: Add event-listeners to filter and sort buttons
  btns.forEach((btn) => {
    btn.addEventListener("click", filterList);
  });

  loadJSON();
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  // TODO: This might not be the function we want to call first
  displayList(allAnimals);
}

function preapareObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}

function filterList(e) {
  const chosenFilter = e.target.dataset.filter;
  let filteredList = "allAnimals";
  if (chosenFilter === "cat") {
    filteredList = allAnimals.filter(isCat);
  } else if (chosenFilter === "dog") {
    filteredList = allAnimals.filter(isDog);
  } else {
    filteredList = allAnimals;
  }

  displayList(filteredList);
}

function isCat(animal) {
  // Selve filteret for kat
  return animal.type === "cat";
}

function isDog(animal) {
  // Selve filteret for hund
  return animal.type === "dog";
}

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document
    .querySelector("template#animal")
    .content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
