"use strict";

window.addEventListener("DOMContentLoaded", start);

// Skabelon
const animalTemplate = {
  name: "",
  desc: "",
  type: "",
  age: "",
};

const allAnimals = [];

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    // Splitter hvert dyr til 4 objekter i et array - [`Mandu`, `the`, `amazing`, `cat`]
    let values = jsonObject.fullname.split(" ");
    // Gemmer de rigtige værdier
    let nameData = values[0];
    let typeData = values[3];
    let descData = values[2];
    // TODO: Create new object with cleaned data - and store that in the allAnimals array
    // Laver et nyt object med animalTemplate som skabelon
    const animal = Object.create(animalTemplate);
    // Fylder de gemte data ind i det nye object
    animal.name = nameData;
    animal.type = typeData;
    animal.desc = descData;
    animal.age = jsonObject.age;
    // Skubber det nye animal object ind i allAnimals arrayet
    allAnimals.push(animal);
    // TODO: MISSING CODE HERE !!!
  });

  displayList();
}

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
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
