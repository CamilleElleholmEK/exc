const endpoint = `https://kea-alt-del.dk/kata-distortion/`;
const tal = document.querySelector("span");
const h1 = document.querySelector("h1");

function loadJSON(endpoint, callback) {
  fetch(endpoint)
    .then((response) => response.json())
    .then((jsonData) => callback(jsonData));
}

function JSONLoaded(jsonData) {
  console.log(jsonData.inQueue);
  tal.textContent = jsonData.inQueue;
}
// loadJSON(endpoint, JSONLoaded);
setInterval(() => loadJSON(endpoint, JSONLoaded), 10000);
