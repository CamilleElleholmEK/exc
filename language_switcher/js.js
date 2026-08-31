const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
let locale = "da";
// Skal være let og ikke const

document.querySelector("#language-select").addEventListener("change", (e) => {
  locale = e.target.value;
  console.log(locale);
  show();
  return locale;
});

function show() {
  const header = document.querySelector(".header");
  const footer = document.querySelector(".footer");
  header.innerHTML = texts[locale].texts[0].text;
  footer.innerHTML = texts[locale].texts[1].text;
}
