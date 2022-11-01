const cartItems = JSON.parse(localStorage.getItem("cart"));

const createTable = () => {
  const table = document.querySelector(".table");

  cartItems.forEach((product) => {
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);

    cell1.innerHTML = `<img class="cartImg" src=${product.imgURL}></img></a>`;
    cell2.innerHTML = `<a href="details.html?product_id=${product.id}" class="cartName">${product.name}</a>`;
    cell3.textContent = product.brand;
    cell4.textContent = product.price + " Lei";
    cell5.textContent = `${product.items}<input type="button">`;
    cell5.innerHTML = `
        <input class="minus" type="button" value="-"> ${product.items} <input type="button" class="plus" value="+">
      `;
    cell6.innerHTML = `<a class="removeBtn" data-product-id=${product.id}>Remove</a>`;
    cell7.innerHTML = `<span class="cart-row-total"> ${
      product.items * product.price
    } lei</span>`;
  });
};

window.addEventListener("DOMContentLoaded", createTable);

function tableButtonClicked(event) {
  // const = constant => nu se poate modifica, asa ca folosim let
  let products = JSON.parse(localStorage.getItem("cart"));

  switch (event.target.classList[0]) {
    case "removeBtn":
      event.target.parentElement.parentElement.remove();

      // nu functiona pt ca nu lua id produsului corect
      const productId = event.target.getAttribute("data-product-id");
      const indexOfProduct = products.findIndex((object) => {
        return object.id === productId;
      });

      products.forEach((product) => {
        if (product.id === productId) {
          products.splice(indexOfProduct, 1);
        }
      });

      localStorage.setItem("cart", JSON.stringify(products));
      break;
    case "minus":
      console.log("minus");
      break;
    case "plus":
      console.log("plus");
      break;
  }
}
document
  .querySelector(".tableDiv")
  .addEventListener("click", tableButtonClicked);
