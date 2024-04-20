import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../store/productsSlice";
import { useEffect } from "react";
<<<<<<< HEAD
import { useParams } from "react-router-dom";
=======
>>>>>>> 351f7c579cd74a2b75cb1bf60acd5f755bb91c41
import Product from "./Product";
import styles from "./ProductList.module.css";

function ProductList() {
<<<<<<< HEAD
  const array = useSelector((state) => state.products.PureData);
  console.log(array);
=======
  const array = useSelector((state) => state.products.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);
>>>>>>> 351f7c579cd74a2b75cb1bf60acd5f755bb91c41

  return (
    <div className={styles.container}>
      {array.products?.map((product) => {
        return <Product prod={product} key={product.id} />;
      })}
    </div>
  );
}

export default ProductList;
