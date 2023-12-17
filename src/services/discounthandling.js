import data from "./data";

function discountProducts() {
  const allProducts = data();
  const newProducts = allProducts.filter((product) => product.discount);
  console.log(newProducts);
  return allProducts;
}

export default discountProducts;
