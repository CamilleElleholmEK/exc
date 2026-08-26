const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const tbodyPointer = document.querySelector("tbody");
const btns = document.querySelectorAll("#btnBox button");
showTheseVehicles(vehicles);

function activeBtn(clicked) {
  btns.forEach((btn) => btn.classList.remove("active"));
  clicked.classList.add("active");
}

// Alle el køretøjer
function isEl(vehicle) {
  return vehicle.isElectric === true;
}
const isElFiltered = vehicles.filter(isEl);
document.querySelector("#elBtn").addEventListener("click", (e) => {
  activeBtn(e.target);
  showTheseVehicles(isElFiltered);
});

// Mere end to sæder
function moreSeats(vehicle) {
  return vehicle.passengers > 2;
}
const moreSeatsFiltered = vehicles.filter(moreSeats);
document.querySelector("#seatsBtn").addEventListener("click", (e) => {
  activeBtn(e.target);
  showTheseVehicles(moreSeatsFiltered);
});

// Jonas' el køretøjer
function elJonas(vehicle) {
  return vehicle.ownedBy === "Jonas" && vehicle.isElectric === true;
}
const elJonasFiltered = vehicles.filter(elJonas);
document.querySelector("#jonasBtn").addEventListener("click", (e) => {
  activeBtn(e.target);
  showTheseVehicles(elJonasFiltered);
});

// Rugbrødsmotor og minimum 2 sæder
function rugbrod(vehicle) {
  return vehicle.fuel === "Rugbrød" && vehicle.passengers > 1;
}
const rugbrodFiltered = vehicles.filter(rugbrod);
document.querySelector("#rugbrodBtn").addEventListener("click", (e) => {
  activeBtn(e.target);
  showTheseVehicles(rugbrodFiltered);
});

document.querySelector("#allBtn").addEventListener("click", (e) => {
  activeBtn(e.target);
  showTheseVehicles(vehicles);
});

function pretty(value) {
  return value === undefined ? "" : value === true ? "X" : value;
}

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${pretty(each.fuel)}</td>
  <td>${each.passengers}</td> 
  <td>${pretty(each.stops)}</td>
  <td>${pretty(each.ownedBy)}</td>
  <td>${pretty(each.isElectric)}</td>
  <td>${pretty(each.isTandem)}</td>
</tr>`;
  });
}
