let productInfo;
const searchParamString = window.location.search; //aici este query string
const searchParams = new URLSearchParams(searchParamString);
let productId = searchParams.get("product_id");

const showProductDetails = async () => {
  const productURL = `https://6325aac670c3fa390f8c6c4d.mockapi.io/products/${productId}`;
  const result = await fetch(productURL);
  productInfo = await result.json();
  const productCardDetails = `
        <div class="details">
           <img src='${productInfo.imgURL}'/> </br>
           <div class="dts">
           <h3>${productInfo.name}</h3>
               <p>${productInfo.brand}</p>
               <p>${productInfo.price} Lei</p><br>
               <p>Stock: ${productInfo.stock}</p>
              <input type="button" id="add-to-cart" class="add-to-cart" value="Add to cart"/>
          </div>
          <p class='description'></br> Description:</br> ${productInfo.description}</p>
          <div class="details-message hidden">
       ${productInfo.name} has been added to cart!
    </div>
        </div>
     `;

  document.querySelector(".product-details").innerHTML = productCardDetails;
};

document.querySelector(".product-details").addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    addProductToCart();
    document.querySelector(".details-message").classList.remove("hidden");
    setTimeout(() => {
      document.querySelector(".details-message").classList.add("hidden");
    }, 2000);
  }
});

const addProductToCart = () => {
  let cart = [];
  // If there is no cart in local storage, add product + items to cart array
  if (localStorage.getItem("cart") === null) {
    cart.push({ ...productInfo, items: 1 });
    // Else, get the cart, turn it into an array of objects
  } else {
    cart = JSON.parse(localStorage.getItem("cart"));
    // Find the product in the cart by id
    const productInCart = cart.find((prod) => prod.id == productId);
    // If it finds the product in the cart, update product.items by input quantity
    if (productInCart !== undefined) {
      productInCart.items += 1;
      // If it does not find the product in the cart, add product + items to cart array
    } else {
      cart.push({ ...productInfo, items: 1 });
    }
  }
  // If there are products in the cart, put cart in local storage
  if (cart.length > 0) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

window.addEventListener("DOMContentLoaded", showProductDetails);
// let btnAddToCartFromDetails = document.querySelector("#add-to-cart");
// console.log(btnAddToCartFromDetails);

// btnAddToCartFromDetails.addEventListener("click", () => {
//   document.querySelector(".details-message").classList.remove("hidden");
//   setTimeout(() => {
//     document.querySelector(".details-message").classList.add("hidden");
//   }, 2000);
// });
