import { useRef, useState } from "react";
import styles from "./PriceRange.module.css";
import tooman from "../../helper/tooman";

function PriceRange() {
  const [minValue, setMin] = useState(0);
  const [maxValue, setMax] = useState(2000000);
  const [show, setShow] = useState(false);

  const showMin = useRef(0);
  const showMax = useRef(2000000);

  if (Number(minValue) <= Number(maxValue)) {
    showMin.current = minValue;
    showMax.current = maxValue;
  } else if (Number(maxValue) < Number(minValue)) {
    showMax.current = minValue;
    showMin.current = maxValue;
  }

  return (
    <div className={styles.container}>
      <div className={styles.priceContent}>
        <div className={styles.priceContainer}>
          <label>Min</label>
          <div className={styles.minValue}>{tooman(showMin.current)}</div>
        </div>
        <div className={styles.priceContainer}>
          <label>Max</label>
          <div className={styles.maxValue}>{tooman(showMax.current)}</div>
        </div>
      </div>
      <div className={styles.rangeSlider}>
        <div className={styles.rangeFill}></div>
        <input
          type={"range"}
          className={styles.minPrice}
          min={0}
          max={2000000}
          step={10}
          onChange={(e) => {
            setMin(e.target.value);
          }}
        />
        <input
          type={"range"}
          className={styles.minPrice}
          min={0}
          max={2000000}
          step={10}
          defaultValue={10000}
          onChange={(e) => {
            setMax(e.target.value);
          }}
        />
      </div>{" "}
    </div>
  );
}

export default PriceRange;
