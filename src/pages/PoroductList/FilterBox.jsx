import PriceRange from "./PriceRange";
import styles from "./FilterBox.module.css";
import ColorSelection from "./ColorSelection";
import { useState } from "react";
function FilterBox() {
  const [showPrice, setShowPrice] = useState(false);
  const [showColor, setShowColor] = useState(false);
  return (
    <div className={styles.container}>
      <h3>فیلتر ها</h3>
      <p className={styles.filterItem} onClick={() => setShowPrice(!showPrice)}>
        بر اساس قیمت
        <img src="src\assets\icons\arrow-down-svgrepo-com.svg" alt="arrow" />
      </p>
      {showPrice && <PriceRange />}
      <div className={styles.buttonContainer}>
        <button>حذف فیلتر</button>
        <button>اعمال فیلتر</button>
      </div>
    </div>
  );
}

export default FilterBox;
