import data from "./data";

async function discountProducts() {
  const allProducts = await data();
  const proArr = await allProducts[0].products;
  const discountProducts = proArr
    .filter((res) => res.discount)
    .sort((a, b) => {
      return b.discount - a.discount;
    });

  return discountProducts;
}

export default discountProducts;
