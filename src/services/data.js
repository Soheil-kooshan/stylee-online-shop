async function data() {
  const result = [];
  await fetch("src/products.json")
    .then((res) => res.json())
    .then((data) => result.push(data));
  return result;
}

export default data;
