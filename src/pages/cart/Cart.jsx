import Bill from "./bill";
import CartItem from "./cartItem";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.css";

function Cart() {
  const cartItems = useSelector((state) => state.cart.products);
  console.log(cartItems);

  return (
    <>
      {cartItems.length === 0 ? (
        <div className={styles.isEmpty}>
          <img
            className={styles.empty_image}
            src="src\assets\icons\emptybox.svg"
            alt="empty box"
          />
          <p className={styles.empty_text}>سبد خرید شما خالی است! </p>
        </div>
      ) : (
        <div className={styles.container}>
          <div>
            {cartItems.map((item) => {
              return (
                <CartItem
                  item={item}
                  name={item.name}
                  image={item.imgSrc}
                  price={item.price}
                  discount={item.discount}
                  id={item.id}
                  key={item.id}
                />
              );
            })}
          </div>
          <Bill cartItems={cartItems} />
        </div>
      )}
    </>
  );
}

export default Cart;
