import styles from "./Logo.module.css";
function Logo() {
  return (
    <img
      src="src/assets/logo/stylee.svg"
      alt="stylee logo"
      className={styles.logo}
    />
  );
}

export default Logo;
