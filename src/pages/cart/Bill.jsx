import styles from "./Bill.module.css";

function Bill() {
  return (
    <div className={styles.container}>
      <span className={styles.prePrice}>کل مبلغ :1300000 </span>
      <span className={styles.discount}>تخفیف کل:140000</span>
      <span className={styles.total}>مبلغ قابل پرداخت:100000</span>
      <button className={styles.button}>تایید و پرداخت</button>
    </div>
  );
}

export default Bill;
