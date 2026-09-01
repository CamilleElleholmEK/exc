const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

const btn = document.querySelector("#btn");
// const box = document.querySelector("#tekst");
let sfw = false;
const popup = document.querySelector("dialog");

btn.addEventListener("click", () => {
  console.log("Virker");
  const box = document.querySelector("#tekst");
  let tekst = box.textContent;

  if (sfw === true) {
    popup.showModal();
  } else {
    curseWords.forEach(function (word) {
      tekst = tekst.replace(word.bad, `<span class="good">${word.good}</span>`);
    });
  }
  box.innerHTML = tekst;
  sfw = true;
});
