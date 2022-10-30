const cart = JSON.parse(localStorage.getItem("cart"));

const createTable = () => {
  document.querySelector(".tableDiv").innerHTML = `
	<table class="table">
		<tr>
			<th>Image</th>
			<th>Name</th>
			<th>Brand</th>
			<th>Price</th>
			<th>Quantity</th>
			<th>Remove</th>
		</tr>
	</table>`;
  const table = document.querySelector(".table");
  cart.forEach((product) => {
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell1.innerHTML = `<img class="cartImg" src=${product.imgURL}></img></a>`;
    cell2.textContent = product.name;
    cell3.textContent = product.brand;
    cell4.textContent = product.price + " Lei";
    cell5.textContent = `${product.items}<input type="button">`;
    cell5.innerHTML = `<input class="btnquantity" type="button" value="-"> ${product.items} <input type="button" class="btnquantity" value="+">`;
  });
};

window.addEventListener("DOMContentLoaded", createTable);
