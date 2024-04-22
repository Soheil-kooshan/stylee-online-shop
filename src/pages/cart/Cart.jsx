import Bill from "./bill";
import CartItem from "./cartItem";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.css";

function Cart() {
  const cartItems = useSelector((state) => state.cart.products);
  console.log(cartItems);

  return (
    <div className={styles.container}>
      <div>
        {cartItems.map((item) => {
          <CartItem
            name={item.name}
            image={item.imgSrc}
            price={item.price}
            discount={item.discount}
          />;
        })}
      </div>
      <Bill cartItems={cartItems}/>
    </div>
  );
}

export default Cart;
