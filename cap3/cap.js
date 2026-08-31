const name = "camille";

const capName1 = name.substring(0, 2);
const capName2 = name.substring(2, 3).toUpperCase();
const capName3 = name.substring(3);

const newName = capName1 + capName2 + capName3;

console.log(capName1);
console.log(capName2);
console.log(capName3);
console.log(newName);

const navn = "bIrGiTtE";

const cap = navn.substring(0, 1).toUpperCase();
const rest = navn.substring(1).toLowerCase();

const cappedNavn = cap + rest;

console.log(cap);
console.log(rest);
console.log(cappedNavn);
