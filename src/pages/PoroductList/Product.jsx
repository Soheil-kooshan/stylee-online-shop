import styles from "./Product.module.css";

function Product() {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src="src\assets\photos\clothes\jean\4.webp"
        alt="t-shirt"
      />
      <div className={styles.badge}>13%</div>
      <div className={styles.name}>اسم محصول</div>
      <div className={styles.price}>400000T</div>
      <div className={styles.preprice}>500000T</div>
    </div>
  );
}

export default Product;
