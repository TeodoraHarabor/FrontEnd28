const PRODUCTS_URL = "https://6325aac670c3fa390f8c6c4d.mockapi.io/products/";

export const getAllProducts = async () => {
  const result = await fetch(PRODUCTS_URL);
  const products = await result.json();

  return products;
};

export const getProductById = async (id) => {
  const result = await fetch(PRODUCTS_URL + id);
  const product = await result.json();

  return product;
};

export const postNewProduct = async (product) => {
  const response = await fetch(PRODUCTS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return response;
};

export const updateNewProduct = async (product, id) => {
  const response = await fetch(PRODUCTS_URL + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return response;
};

export const deleteProductById = async (id) => {
  const response = await fetch(PRODUCTS_URL + id, {
    method: "DELETE",
  });

  return response;
};
