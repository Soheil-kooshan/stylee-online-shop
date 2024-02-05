import { useRef, useState } from "react";
import styles from "./PriceRange.module.css";

function PriceRange() {
  const [minValue, setMin] = useState(0);
  const [maxValue, setMax] = useState(10000);

  const showMin = useRef(0);
  const showMax = useRef(10000);

  if (Number(minValue) <= Number(maxValue)) {
    showMin.current = minValue;
    showMax.current = maxValue;
  } else if (Number(maxValue) < Number(minValue)) {
    showMax.current = minValue;
    showMin.current = maxValue;
  }

  return (
    <div className={styles.container}>
      <h4>محدوده قیمت</h4>

      <div className={styles.priceContent}>
        <div>
          <label>Min</label>
          <p className={styles.minValue}>{showMin.current}</p>
        </div>
        <div>
          <label>Max</label>
          <p className={styles.maxValue}>{showMax.current}</p>
        </div>
      </div>

      <div className={styles.rangeSlider}>
        <div className={styles.rangeFill}></div>
        <input
          type={"range"}
          className={styles.minPrice}
          min={0}
          max={10000}
          step={10}
          onChange={(e) => {
            setMin(e.target.value);
          }}
        />
        <input
          type={"range"}
          className={styles.minPrice}
          min={0}
          max={10000}
          step={10}
          defaultValue={10000}
          onChange={(e) => {
            setMax(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default PriceRange;
