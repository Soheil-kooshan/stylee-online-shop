import styles from "./CartItem.module.css";

function CartItem() {
  return (
    <div className={styles.container}>
      <div>
        <img
          className={styles.image}
          src="src\assets\photos\clothes\jean\5.webp"
          alt="photo"
        />
      </div>
      <div className={styles.infoBox}>
        <span className={styles.name}>اسم محصول</span>
        <span className={styles.discount}>تحفیف:</span>
        <span className={styles.price}>قیمت : 400000</span>
      </div>
    </div>
  );
}

export default CartItem;
