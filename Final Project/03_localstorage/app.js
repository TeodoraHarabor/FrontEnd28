const createCardFromProduct = (product) => {
  return `<div class='card'>
      <img src='${product.imgURL}' />
      <h3>${product.name}</h3>
      <p>${product.brand}</p>
      <p>${product.price} Lei</p>
      <a href="details.html?product_id=${product.id}"class="btn-details">DETAILS</a>
      <button id=${product.id} class="btn-right add-to-cart">Add to cart</button>
   </div>`;
};

const createFilterItemsArray = (minPrice, maxPrice) => {
  const filterInterval = (maxPrice - minPrice) / 5;

  const filterItems = [
    { start: minPrice, end: minPrice + filterInterval - 1 },
    {
      start: minPrice + filterInterval,
      end: minPrice + 2 * filterInterval - 1,
    },
    {
      start: minPrice + 2 * filterInterval,
      end: minPrice + 3 * filterInterval - 1,
    },
    {
      start: minPrice + 3 * filterInterval,
      end: minPrice + 4 * filterInterval - 1,
    },
    {
      start: minPrice + 4 * filterInterval,
      end: maxPrice,
    },
  ];

  return filterItems;
};

const createInnerHTMLforPriceFilter = (minPrice, maxPrice) => {
  const filterItemsIntervals = createFilterItemsArray(minPrice, maxPrice);

  const innerHTMLFilterCheckBoxes = filterItemsIntervals
    .map(
      (interval) =>
        `
      <div>
         <label>${interval.start} - ${interval.end}</label>
         <input type="checkbox" >
      </div>
   `
    )
    .join("");

  document.getElementById("price-filter").innerHTML = innerHTMLFilterCheckBoxes;
};

createInnerHTMLforPriceFilter(40, 540);

const getProductsOnIndexPage = () => {
  fetch("	https://6325aac670c3fa390f8c6c4d.mockapi.io/products")
    .then((result) => result.json())
    .then((products) => {
      const productCards = products.map((product) =>
        createCardFromProduct(product)
      );
      const innerHTMLProducts = productCards.join("");
      document.querySelector(".products-container").innerHTML =
        innerHTMLProducts;
    });
};

window.addEventListener("DOMContentLoaded", getProductsOnIndexPage);

const filterByPrice = (event) => {
  if (event.target.type == "checkbox") {
    const checkboxes = document
      .getElementById("price-filter")
      .querySelectorAll("[type=checkbox]");

    checkboxes.forEach((checkbox) => {
      if (checkbox != event.target) {
        checkbox.checked = false;
      }
    });
  }

  if (event.target.checked == true) {
    const startPrice =
      event.target.previousElementSibling.textContent.split(" - ")[0];
    const endPrice =
      event.target.previousElementSibling.textContent.split(" - ")[1];

    fetch("	https://6325aac670c3fa390f8c6c4d.mockapi.io/products")
      .then((result) => result.json())
      .then((products) => {
        const filteredByPriceProducts = products.filter(
          (product) =>
            product.price >= Number(startPrice) &&
            product.price <= Number(endPrice)
        );

        const productCards = filteredByPriceProducts.map((product) =>
          createCardFromProduct(product)
        );
        const innerHTMLProducts = productCards.join("");
        document.querySelector(".products-container").innerHTML =
          innerHTMLProducts;
      });
  } else {
    fetch("	https://6325aac670c3fa390f8c6c4d.mockapi.io/products")
      .then((result) => result.json())
      .then((products) => {
        const productCards = products.map((product) =>
          createCardFromProduct(product)
        );
        const innerHTMLProducts = productCards.join("");
        document.querySelector(".products-container").innerHTML =
          innerHTMLProducts;
      });
  }
};

document
  .getElementById("price-filter")
  .addEventListener("click", filterByPrice);

const addProductToCart = async (id) => {
  let products = JSON.parse(localStorage.getItem("products"));
  if (products == null) products = [];
  console.log(products);
  products.push(id);

  localStorage.setItem("products", JSON.stringify(products));
};

const handleActions = (event) => {
  if (event.target.classList.contains("add-to-cart")) {
    const productId = event.target.id;
    addProductToCart(productId);
  }
};

document
  .querySelector(".products-container")
  .addEventListener("click", handleActions);
