import styles from "./CartItem.module.css";

function CartItem({ name, image, price, discount }) {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.image} src={image} alt="photo" />
      </div>
      <div className={styles.infoBox}>
        <span className={styles.name}>{name}</span>
        <span className={styles.discount}>تحفیف: {discount}</span>
        <span className={styles.price}>قیمت : {price}</span>
      </div>
    </div>
  );
}

export default CartItem;
