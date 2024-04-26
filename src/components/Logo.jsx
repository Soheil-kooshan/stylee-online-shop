import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
function Logo() {
  return (
    <Link to={"/"}>
      <img
        src="src/assets/logo/stylee.svg"
        alt="stylee logo"
        className={styles.logo}
      />
    </Link>
  );
}

export default Logo;
