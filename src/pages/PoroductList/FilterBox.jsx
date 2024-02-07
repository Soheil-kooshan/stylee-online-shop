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
      <p className={styles.filterItem} onClick={() => setShowPrice(!showPrice)}>بر اساس قیمت</p>
      {showPrice && <PriceRange />}
      <p className={styles.filterItem} onClick={() => setShowColor(!showColor)}>بر اساس رنگ </p>
      {showColor && <ColorSelection />}
    </div>
  );
}

export default FilterBox;
