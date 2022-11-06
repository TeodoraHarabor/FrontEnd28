const showProductDetails = async () => {
  const searchParamString = window.location.search; //aici este query string

  const searchParams = new URLSearchParams(searchParamString);

  const productId = searchParams.get("product_id");

  const productURL = `https://6325aac670c3fa390f8c6c4d.mockapi.io/products/${productId}`;
  const result = await fetch(productURL);
  const productInfo = await result.json();
  console.log(productId);
  const productCardDetails = `
        <div class="details">
           <img src='${productInfo.imgURL}'/> </br>
           <div class="dts">
           <h3>${productInfo.name}</h3>
               <p>${productInfo.brand}</p>
               <p>${productInfo.price} Lei</p><br>
               <p>Stock: ${productInfo.stock}</p>
              <input type="button" class="add-to-cart" value="Add to cart"/>
          </div>
          <p class='description'></br> Description:</br> ${productInfo.description}</p>
        </div>
     `;

  document.querySelector(".product-details").innerHTML = productCardDetails;
};

let prodResult;
let productId;
document.querySelector(".product-details").addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    productId = e.target.id;
    addProductToCart();
  }
});

const addProductToCart = () => {
  let myProduct = prodResult.find((product) => product.id == productId);
  console.log(myProduct);
  let cart = [];
  if (localStorage.getItem("cart") === null) {
    cart.push({ ...myProduct, items: 1 });
  } else {
    cart = JSON.parse(localStorage.getItem("cart"));
    const productInCart = cart.find((product) => product.id == productId);
    if (productInCart != undefined) {
      productInCart.items += 1;
    } else {
      const productToBeAddedInCart = { ...myProduct, items: 1 };
      cart.push(productToBeAddedInCart);
    }
  }
  if (cart.length > 0) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

window.addEventListener("DOMContentLoaded", showProductDetails);
