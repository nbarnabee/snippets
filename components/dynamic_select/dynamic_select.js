const items = {
  "Thing A": "Aoooo",
  "Thing B": "Boooo",
  "Thing C": "Coooo",
};

const selectMenu = document.getElementById("generic-select");
options = [];

for (let item in items) {
  const option = document.createElement("option");
  option.value = item;
  option.textContent = item;
  option.addEventListener("click", showValue);
  selectMenu.appendChild(option);
}

function showValue(e) {
  displayPoint = document.getElementById("display");
  console.log(e.target.value);
  displayPoint.textContent = items[e.target.value];
}
