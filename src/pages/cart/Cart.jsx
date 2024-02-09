import Bill from "./bill";
import CartItem from "./cartItem";
import styles from "./Cart.module.css";

function Cart() {
  return (
    <div className={styles.container}>
      <div>
        <CartItem />
        <CartItem />
      </div>
      <Bill />
    </div>
  );
}

export default Cart;
