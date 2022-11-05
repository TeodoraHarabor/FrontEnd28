const cartItems = JSON.parse(localStorage.getItem("cart"));
var selectedRow = null;
var cartTotal = 0;

window.onload = function () {
  addEventsForRemoveBtn();
  addEventsForAddBtn();
  addEventsForDeleteBtn();
  calculateTotal(cartItems);
};

window.addEventListener("DOMContentLoaded", () => {
  createTheTable();
});

function createTheTable() {
  if (cartItems.length) {
    cartItems.forEach((item) => {
      insertNewData(item);
    });
  }
}

function insertNewData(item) {
  var table = document
    .getElementById("cartItems")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);

  let cell1 = newRow.insertCell(0);
  cell1.innerHTML = `<img class="cartImg" src=${item.imgURL}></img></a>`;
  let cell2 = newRow.insertCell(1);
  cell2.innerHTML = `<a href="details.html?product_id=${item.id}" class="cartName">${item.name}</a>`;
  let cell3 = newRow.insertCell(2);
  cell3.textContent = item.brand;
  let cell4 = newRow.insertCell(3);
  cell4.textContent = item.price + " Lei";
  let cell5 = newRow.insertCell(4);
  cell5.textContent = item.items;
  let cell6 = newRow.insertCell(5);
  cell6.innerHTML = `<input id="remove" class="minus" type="button" value="-" data-product-id=${item.id}> 
    <input id="add" type="button" class="plus" value="+" data-product-id=${item.id}>
    <a class="removeBtn" data-product-id=${item.id}>Remove</a>`;
  let cell7 = newRow.insertCell(6);
  cell7.innerHTML = `<span class="cart-row-total"> 
  ${item.items * item.price} lei</span>`;
}

function onRemoveItem(event) {
  let products = JSON.parse(localStorage.getItem("cart"));
  const productId = event.target.getAttribute("data-product-id");
  let product = getProductById(products, productId);

  if (product?.items > 1) {
    const updatedProduct = decrementItemQuantity(products, productId);
    let selectedRow = event.target.parentElement.parentElement;
    selectedRow.cells[4].innerHTML = updatedProduct.items;
    selectedRow.cells[6].innerHTML = `<span class="cart-row-total"> ${
      updatedProduct.items * updatedProduct.price
    } lei</span>`;
  }
}

function onAddItem(event) {
  let products = JSON.parse(localStorage.getItem("cart"));
  const productId = event.target.getAttribute("data-product-id");

  const updatedProduct = incrementItemQuantity(products, productId);

  let selectedRow = event.target.parentElement.parentElement;
  selectedRow.cells[4].innerHTML = updatedProduct.items;
  selectedRow.cells[6].innerHTML = `<span class="cart-row-total"> 
  ${updatedProduct.items * updatedProduct.price} lei</span>`;
}

function onDeleteItem(event) {
  let products = JSON.parse(localStorage.getItem("cart"));
  const productId = event.target.getAttribute("data-product-id");
  let product = getProductById(products, productId);

  event.target.parentElement.parentElement.remove();
  removeProductFromCart(products, product);
  localStorage.setItem("cart", JSON.stringify(products));
}

function getProductById(products, productId) {
  return products[getIndexOfProductInArray(products, productId)];
}

function removeProductFromCart(products, product) {
  let index = 0;
  products.forEach((prod) => {
    if (prod.id === product.id) {
      products.splice(index, 1);
    }
    index++;
  });
  calculateTotal(products);
  return products;
}

function incrementItemQuantity(products, productId) {
  const index = getIndexOfProductInArray(products, productId);
  products[index].items = products[index].items + 1;
  localStorage.setItem("cart", JSON.stringify(products));
  calculateTotal(products);
  return products[index];
}

function decrementItemQuantity(products, productId) {
  const index = getIndexOfProductInArray(products, productId);
  products[index].items = products[index].items - 1;
  localStorage.setItem("cart", JSON.stringify(products));
  calculateTotal(products);
  return products[index];
}

function getIndexOfProductInArray(products, productId) {
  const index = products.findIndex((object) => {
    return object.id === productId;
  });

  return index;
}

function addEventsForRemoveBtn() {
  var removeBtns = document.getElementsByClassName("minus");
  for (var i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener("click", onRemoveItem);
  }
}

function addEventsForAddBtn() {
  var removeBtns = document.getElementsByClassName("plus");
  for (var i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener("click", onAddItem);
  }
}

function addEventsForDeleteBtn() {
  var removeBtns = document.getElementsByClassName("removeBtn");
  for (var i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener("click", onDeleteItem);
  }
}

function calculateTotal(items) {
  let total = 0;

  if (cartItems.length) {
    items.forEach((item) => {
      total = total + item.items * item.price;
    });
  }

  document.getElementById("cartTotal").innerHTML = total + " lei";

  return total;
}

//confirmattion msg

document.querySelector(".buyBtn").addEventListener("click", () => {
  document.querySelector(".buyConfirmation").classList.remove("hidden");
  setTimeout(() => {
    document.querySelector(".buyConfirmation").classList.add("hidden");
  }, 2000);
});
