import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../store/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import styles from "./ProductList.module.css";

function ProductList() {
  const { cat } = useParams();
  const array = useSelector((state) => state.products.PureData);
  console.log(array);
  const products = array.products.filter((product) => {
    const res = product.category.find((category) => {
      return category === cat;
    });
    return res !== undefined;
  });

  console.log(products);
  return (
    <div className={styles.container}>
      {products.map((product) => {
        return <Product prod={product} key={product.id} />;
      })}
    </div>
  );
}

export default ProductList;
