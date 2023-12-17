import styles from "./Category.module.css";

function Category({ src, text }) {
  return (
    <div className={styles.category}>
      <img src={src} alt={text} />
      <span>{text}</span>
    </div>
  );
}

export default Category;
