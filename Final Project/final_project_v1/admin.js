import {
  postNewProduct,
  getAllProducts,
  updateNewProduct,
  deleteProductById,
} from "./products.js";
import { showConfirmationMessage } from "./utils.js";

const imageInputElement = document.querySelector(".add-product-form #image");
const nameInputElement = document.querySelector(".add-product-form #name");
const brandInputElement = document.querySelector(".add-product-form #brand");

const descriptionInputElement = document.querySelector(
  ".add-product-form #description"
);
const priceInputElement = document.querySelector(".add-product-form #price");

// Edit elements
const imageEditInputElement = document.querySelector(".edit-form #image");
const nameEditInputElement = document.querySelector(".edit-form #name");
const brandEditInputElement = document.querySelector(".edit-form #brand");

const descriptionEditInputElement = document.querySelector(
  ".edit-form #description"
);
const priceEditInputElement = document.querySelector(".edit-form #price");

const editContainer = document.getElementById("edit-container");

const toggleEditForm = () => {
  editContainer.classList.toggle("hidden");
};

const updateData = ({ name, brand, image, description, price }) => {
  nameEditInputElement.value = name;
  brandEditInputElement.value = brand;
  imageEditInputElement.value = image;
  descriptionEditInputElement.value = description;
  priceEditInputElement.value = price;
};

const resetEditInputData = () => {
  updateData({ brand: "", name: "", image: "", description: "", price: "" });
};

let editingId = null;

const populateProductsTable = async () => {
  const products = await getAllProducts();
  console.log(products);

  const tableContent = products
    .map(
      (product, index) =>
        `<tr>
			<th scope="row">${index + 1}</th>
			<td><img src="${product.imgURL}" width="50" height="50"></td>
			<td>${product.name}</td>
			<td>${product.brand}</td>
      <td>${product.price} Lei</td>
			<td>
				<button id="${product.id}" class="btn btn-danger">
					<i class="fa-regular fa-trash-can"></i>
				</button>
				<button class="btn btn-warning edit-btn">
					<i class="fa-solid fa-pencil"></i>
				</button>
			</td>
		</tr>`
    )
    .join("");

  document.getElementById("products-table-body").innerHTML = tableContent;

  document
    .getElementsByClassName("edit-btn")[0]
    .addEventListener("click", function () {
      console.dir(this);
      console.log(products[0]);
      const first = products[0];
      const name = first.name;
      const brand = first.brand;
      const image = first.imgURL;
      const description = first.description;
      const price = first.price;

      editingId = first.id;

      updateData({
        brand: brand,
        name: name,
        image: image,
        description: description,
        price: price,
      });

      console.log({ name, brand, image, description, price });
      // const {name,brand,image,description,price}=first
      editContainer.classList.toggle("hidden");
    });

  document
    .getElementById("edit-product")
    .addEventListener("click", async () => {
      const product = {
        name: nameEditInputElement.value,
        brand: brandEditInputElement.value,
        image: imageEditInputElement.value,
        description: descriptionEditInputElement.value,
        price: priceEditInputElement.value,
      };
      await updateNewProduct(product, editingId);
      window.location.reload(); //face refresh
    });
  document
    .getElementById("cancel-edit-product")
    .addEventListener("click", () => {
      toggleEditForm();
      resetEditInputData();
      editingId = null;
      console.log("edit cancel!");
    });
};

// document.querySelectorAll(".edit-btn").addEventListener("");
window.addEventListener("DOMContentLoaded", populateProductsTable);

const addProduct = async () => {
  const product = {
    name: nameInputElement.value,
    brand: brandInputElement.value,
    image: imageInputElement.value,
    description: descriptionInputElement.value,
    price: priceInputElement.value,
  };

  const response = await postNewProduct(product);
  showConfirmationMessage(
    "add-product-message",
    response,
    "Produsul a fost adaugat cu succes!"
  );
};

document.getElementById("add-product").addEventListener("click", addProduct);

document.getElementById("add-new-product").addEventListener("click", () => {
  console.log("test");
  document.querySelector(".add-product-container").classList.toggle("hidden");
});

const handleProducts = async (event) => {
  if (event.target.classList.contains("fa-trash-can")) {
    const productId = event.target.parentNode.id;
    const response = await deleteProductById(productId);
    if (response.ok) {
      await populateProductsTable();
    }
  }
};

document
  .getElementById("products-list")
  .addEventListener("click", handleProducts);
