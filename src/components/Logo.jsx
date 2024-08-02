import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
function Logo() {
  return (
    <div className={styles.logo}>
      <Link to={"/"}>
        <img src="/src/assets/logo/stylee.svg" alt="stylee logo" />
      </Link>
    </div>
  );
}

export default Logo;
