import data from "./data";

async function newProducs() {
  const allProducts = await data();
  const proArr = await allProducts[0].products;
  const sorted = proArr.sort((a, b) => {
    return a.date - b.date;
  });

  return sorted;
}

export default newProducs;
