const tvs = [
  {
    name: "Samsung",
    price: 2067,
    imageURL:
      "https://s13emagst.akamaized.net/products/32407/32406790/images/res_e2e147afb468d7b4a7e45577fe39c245.jpg?width=720&height=720&hash=DD2FBE28F96B6E6E79D20B9C42B21BF7",
  },
  {
    name: "Star-Light",
    price: 529,
    imageURL:
      "https://s13emagst.akamaized.net/products/4528/4527387/images/res_d77e5448e90074a90b2ea404695caa3c.jpg?width=720&height=720&hash=5D2156EC09103A912C87505D43518332",
  },
  {
    name: "Led",
    price: 1055,
    imageURL:
      "https://s13emagst.akamaized.net/products/40005/40004951/images/res_6547dd9ddb6a0656003501add42298f3.jpg?width=720&height=720&hash=CEADAF8FFB167E12DD725A481A3E41CD",
  },
];

const tvContainer = tvs.map(
  (tv) => `<div class="box">
    <h4>${tv.name}</h4>
    <p>${tv.price}</p>
    <img src='${tv.imageURL}' >
    
</div>
`
);
const container = document.querySelector(".container");
container.innerHTML = tvContainer.join("");

console.log(tvContainer);
