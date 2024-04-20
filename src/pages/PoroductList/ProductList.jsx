import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../store/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import styles from "./ProductList.module.css";

function ProductList() {
  const array = useSelector((state) => state.products.PureData);
  console.log(array);

  return (
    <div className={styles.container}>
      {array.products?.map((product) => {
        return <Product prod={product} key={product.id} />;
      })}
    </div>
  );
}

export default ProductList;
