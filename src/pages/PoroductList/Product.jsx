import { Link } from "react-router-dom";
import styles from "./Product.module.css";

function Product({ prod }) {
  return (
<<<<<<< HEAD
    <Link className={styles.container} to={`${prod.id}`}>
=======
    <div className={styles.container}>
>>>>>>> 351f7c579cd74a2b75cb1bf60acd5f755bb91c41
      <img className={styles.image} src={prod.imgSrc} alt="t-shirt" />
      {prod.discount && <div className={styles.badge}> {prod.discount}%</div>}
      <div className={styles.name}>
        {prod.name} کد {prod.id}
      </div>
      <div className={styles.price}>{prod.price}T</div>
      <div className={styles.preprice}>500000T</div>
    </Link>
  );
}

export default Product;
