export const createProductCard = (product) =>
  `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src=${product.imgURL} alt="Card image cap">
  <div class="card-body">
     <p class="card-title" style="margin-right:60px">${product.name}</p>
     <a href="#" class="btn btn-dark">Details</a>
  </div>
</div>
`;
