import styles from "./ProdInfo.module.css";

function ProdInfo() {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src="src\assets\photos\clothes\jacket\2.webp"
        alt="jacket"
      />
      <div className={styles.info}>
        <ul>
          <li className={styles.name}>اسم محصول</li>
          <li>جنس</li>
          <li>رنگ</li>
          <li>سایز :large</li>
          <div className={styles.price}>450000T</div>
          <button>افزودن به سبد</button>
        </ul>
      </div>
    </div>
  );
}

export default ProdInfo;
