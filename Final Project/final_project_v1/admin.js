import { createProductCard } from "./cards.js";
import { getAllProducts } from "./products.js";

window.addEventListener("DOMContentLoaded", async () => {
  const products = await getAllProducts();
  console.log(products);
  const productsCards = products.map((product) => createProductCard(product));

  document.querySelector(".container").innerHTML = productsCards.join("");
});
