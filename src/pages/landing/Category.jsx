import { Link } from "react-router-dom";
import styles from "./Category.module.css";

function Category({ src, text }) {
  return (
    <Link to={`/Products/category/${text}`}>
      <div className={styles.category}>
        <img src={src} alt={text} />
        <span>{text}</span>
      </div>
    </Link>
  );
}

export default Category;
