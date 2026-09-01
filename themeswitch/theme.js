const select = document.querySelector("select");
const body = document.querySelector("body");

select.addEventListener("change", (e) => {
  const chosenTheme = e.target.value;
  body.dataset.theme = chosenTheme;
  console.log(chosenTheme);
});
