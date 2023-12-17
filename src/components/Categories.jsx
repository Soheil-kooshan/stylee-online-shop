import Category from "./Category";
import styles from "./Categories.module.css";
const category = [
  { src: "src/assets/categories/jacket.jpg", text: "کاپشن" },
  { src: "src/assets/categories/t-shirt.jpg", text: "تیشرت" },
  { src: "src/assets/categories/jeans.jpg", text: "شلوار" },
  { src: "src/assets/categories/belt.jpg", text: "کمربند" },
  { src: "src/assets/categories/shirt.jpg", text: "پیراهن" },
];

function Categories() {
  return (
    <div className={styles.categories}>
      {category.map((cat) => {
        return <Category src={cat.src} text={cat.text} key={cat.text} />;
      })}
    </div>
  );
}

export default Categories;
