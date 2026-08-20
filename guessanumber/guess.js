"use strict";
// random tal her
let tal = Math.round(Math.random() * 100);
console.log(tal);

// konfetti?
function showConfetti() {
  // trigger confetti
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}

// knap der tjekker værdi - anonym funktion, if else
const btn = document.querySelector(".check");
const feedback = document.getElementById("feedback");

btn.addEventListener("click", () => {
  let guess = document.getElementById("input").valueAsNumber;
  // Kan også laves som input som let og så
  // const guess = Number(input.value)

  if (guess === tal) {
    feedback.innerHTML = "Rigtigt gættet!";
    showConfetti();
  } else {
    if (guess < tal) {
      if (feedback.innerHTML == "Dit tal er for lavt") {
        feedback.innerHTML = "Dit tal er stadig for lavt";
      } else {
        feedback.innerHTML = "Dit tal er for lavt";
      }
    } else {
      if (feedback.innerHTML == "Dit tal er for højt") {
        feedback.innerHTML = "Dit tal er stadig for højt";
      } else {
        feedback.innerHTML = "Dit tal er for højt";
      }
    }
  }
});
