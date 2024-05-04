import styles from "./Bill.module.css";
import { discountCalc } from "../../helper/discount";
import tooman from "../../helper/tooman";

function Bill({ cartItems }) {
  const totalPrice = cartItems.reduce((total, item) => {
    return (total += item.price);
  }, 0);
  const totaldiscount = cartItems.reduce((total, item) => {
    return (total += discountCalc(item.price, item.discount));
  }, 0);

  const finalPrice = totalPrice - totaldiscount;

  return (
    <div className={styles.container}>
      <span>کل مبلغ :{tooman(totalPrice)} </span>
      <span>تخفیف کل:{tooman(totaldiscount)}</span>
      <span>مبلغ قابل پرداخت:{tooman(finalPrice)}</span>
      <button>تایید و پرداخت</button>
    </div>
  );
}

export default Bill;
