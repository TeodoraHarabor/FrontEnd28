const showProductDetails = async () => {
  const searchParamString = window.location.search; //aici este query string

  const searchParams = new URLSearchParams(searchParamString);

  const productId = searchParams.get("product_id");

  // const productURL = "https://6325aac670c3fa390f8c6c4d.mockapi.io/products" + productId;
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
               <p>Quantity:
               <input class="cart-quantity-input" type="number" min="1" step="1">
               </p>
              <input type="button" class="add-to-cart" value="Add to cart"/>
          </div>
          <p class='description'></br> Description:</br> ${productInfo.description}</p>
        </div>
     `;

  document.querySelector(".product-details").innerHTML = productCardDetails;
};

window.addEventListener("DOMContentLoaded", showProductDetails);
