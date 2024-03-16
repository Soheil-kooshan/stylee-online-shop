import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../store/productsSlice";
import { useEffect } from "react";
import Product from "./Product";
import styles from "./ProductList.module.css";

function ProductList() {
  const array = useSelector((state) => state.products.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className={styles.container}>
      {array.products?.map((product) => {
        return <Product prod={product} key={product.id} />;
      })}
    </div>
  );
}

export default ProductList;
