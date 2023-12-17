function data() {
  return fetch("src/products.json")
    .then((res) => res.json())
    .then((data) => data);
}

export default data;
