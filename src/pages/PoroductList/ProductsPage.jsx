import ProductList from "./ProductList";
import FilterBox from "./filterBox";
import styles from "./ProductsPage.module.css";
function ProductsPage() {
  return (
    <div className={styles.container}>
      <FilterBox />
      <ProductList />
    </div>
  );
}

export default ProductsPage;
