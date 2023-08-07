document.getElementById("addToListButton").addEventListener("click", addItem);

function addItem() {
  const list = document.querySelector(".list");
  const item = document.createElement("li");
  item.textContent = document.getElementById("addToList").value;
  list.appendChild(item);
  document.getElementById("addToList").value = null;
}
