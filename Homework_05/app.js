var btnAdd = document.querySelector("#btnAdd");
var items = document.querySelector("#items");
var messageElement = document.querySelector("#message");

btnAdd.addEventListener("click", addItem);

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
