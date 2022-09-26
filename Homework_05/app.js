var btnAdd = document.querySelector("#btnAdd");
var items = document.querySelector("#items");
var messageElement = document.querySelector("#message");
var btnClear = document.querySelector("#btnClear");
var sortAsc = document.querySelector("#sortAsc");
var sortDesc = document.querySelector("#sortDesc");

btnAdd.addEventListener("click", addItem);
items.addEventListener("click", cutItem);
btnClear.addEventListener("click", clearList);

var greetingMessage = "Good, you have nothing to buy!";

displayMessage(greetingMessage);

function addItem() {
  var newItem = document.querySelector("#newItem");
  if (inputIsValid(newItem.value)) {
    items.innerHTML += "<li >" + newItem.value + "</li";
    newItem.value = "";
    messageElement.style.visibility = "hidden";
  } else {
    displayMessage("Please provide non empty input!");
  }
}

newItem.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    btnAdd.click();
  }
});

function inputIsValid(input) {
  if (input) {
    return true;
  }
  return false;
}

function displayMessage(message) {
  messageElement.innerText = message;
  messageElement.style.visibility = " visible";
}

function cutItem(event) {
  var style = event.target.style;
  if (!style.textDecoration) {
    style.textDecoration = "line-through";
  } else {
    style.textDecoration = "";
  }
}

function clearList() {
  document.querySelector("#items").innerHTML = "";
}
displayMessage(greetingMessage);

sortAsc.addEventListener("click", asc);
sortDesc.addEventListener("click", desc);

function asc() {
  [...items.children]
    .sort((a, b) => (a.textContent > b.textContent ? 1 : -1))
    .forEach((node) => items.appendChild(node));
}

function desc() {
  [...items.children]
    .sort((a, b) => (a.textContent < b.textContent ? 1 : -1))
    .forEach((node) => items.appendChild(node));
}
