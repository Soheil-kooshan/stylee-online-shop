import styles from "./Bill.module.css";

function Bill() {
  return (
    <div className={styles.container}>
      <span>کل مبلغ :1300000 </span>
      <span>تخفیف کل:140000</span>
      <span>مبلغ قابل پرداخت:100000</span>
      <button>تایید و پرداخت</button>
    </div>
  );
}

export default Bill;
