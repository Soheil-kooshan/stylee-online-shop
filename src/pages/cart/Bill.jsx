import styles from "./Bill.module.css";

function Bill({ cartItems }) {
  const totalPrice = cartItems.reduce((total, item) => {
    return (total += item.price);
  }, 0);
  const totaldiscount = cartItems.reduce((total, item) => {
    return (total += item.discount);
  }, 0);

  const finalPrice = totalPrice - totaldiscount;

  return (
    <div className={styles.container}>
      <span>کل مبلغ :{totalPrice} </span>
      <span>تخفیف کل:{totaldiscount}</span>
      <span>مبلغ قابل پرداخت:{finalPrice}</span>
      <button>تایید و پرداخت</button>
    </div>
  );
}

export default Bill;
