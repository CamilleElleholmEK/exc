const navn = "Camille Elleholm Hyldkrog";
console.log(navn);

const firstName = navn.substring(0, navn.indexOf(" "));
const middleName = navn.substring(firstName.length + 1, navn.lastIndexOf(" "));
const lastName = navn.substring(firstName.length + middleName.length + 2);

console.log(firstName);
console.log(middleName);
console.log(lastName);
