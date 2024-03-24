import styles from "./Product.module.css";

function Product({ prod }) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={prod.imgSrc} alt="t-shirt" />
      {prod.discount && <div className={styles.badge}> {prod.discount}%</div>}
      <div className={styles.name}>
        {prod.name} کد {prod.id}
      </div>
      <div className={styles.price}>{prod.price}T</div>
      <div className={styles.preprice}>500000T</div>
    </div>
  );
}

export default Product;
