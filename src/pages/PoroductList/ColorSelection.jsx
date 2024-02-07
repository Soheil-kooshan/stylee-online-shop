import styles from "./ColorSelection.module.css";

function ColorSelection() {
  return (
    <div className={styles.container}>
      <div className={styles.colorBox}>
        <span className={styles.darkBrown}></span>
        <span className={styles.brown}></span>
        <span className={styles.black}></span>
        <span className={styles.green}></span>
        <span className={styles.navyBlue}></span>
        <span className={styles.yellow}></span>
        <span className={styles.red}></span>
        <span className={styles.grey}></span>
        <span className={styles.blue}></span>
        <span className={styles.beige}></span>
        <span className={styles.white}></span>
      </div>
    </div>
  );
}

export default ColorSelection;
