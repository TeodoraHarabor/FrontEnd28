const loadProducts = () => {
  const productIds = JSON.parse(localStorage.getItem("products"));

  const products = [];

  const createCardFromProduct = (product) => {
    return `<div class='card'>
        <img src='${product.imgURL}' />
        <h3>${product.name}</h3>
        <p>${product.brand}</p>
        <p>${product.price} </p>
        <a href="details.html?product_id=${product.id}"class="btn-details">DETAILS</a>
        <button id=${product.id} class="add-to-cart">Add to cart</button>
     </div>`;
  };

  productIds.forEach(async (productId) => {
    const result = await fetch(
      `https://6325aac670c3fa390f8c6c4d.mockapi.io/products/${productId}`
    );
    const product = await result.json();
    const innerHTMLProduct = createCardFromProduct(product);

    document.querySelector(".products-container").innerHTML += innerHTMLProduct;
  });
};
window.addEventListener("DOMContentLoaded", loadProducts);
