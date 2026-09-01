const knap = document.querySelector("button");
const h1 = document.querySelector("h1");

knap.addEventListener("click", (e) => {
  h1.dataset.filter === "bat"
    ? (h1.dataset.filter = "fox")
    : h1.dataset.filter === "fox"
      ? (h1.dataset.filter = "bat")
      : h1.dataset.filter === "fox";
});

// ternary
h1.dataset.filter === "bat"
  ? (h1.dataset.filter = "fox")
  : h1.dataset.filter === "fox"
    ? (h1.dataset.filter = "bat")
    : h1.dataset.filter === "fox";

// almindelig if else
if (h1.dataset.filter === "bat") {
  h1.dataset.filter = "fox";
} else {
  h1.dataset.filter = "bat";
}
