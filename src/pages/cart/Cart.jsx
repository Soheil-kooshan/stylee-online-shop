import Bill from "./bill";
import CartItem from "./cartItem";

function Cart() {
  return (
    <div>
      <CartItem />
      <CartItem />
      <Bill />
    </div>
  );
}

export default Cart;
