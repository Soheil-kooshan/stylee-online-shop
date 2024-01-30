import { useState } from "react";
import styles from "./Menu.module.css";
function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  function handleIsOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      {!isOpen && (
        <div className={styles.open}>
          <img
            src="src/assets/icons/menu.svg"
            alt="menu"
            onClick={handleIsOpen}
          />
        </div>
      )}

      {isOpen && (
        <>
          <div className={styles.mob_menu}>
            <div className={styles.close}>
              <img
                src="src/assets/icons/close.svg"
                alt="close"
                onClick={handleIsOpen}
              />
            </div>
            <ul>
              <li>مردانه</li>
              <li>زنانه</li>
              <li>بچه گانه</li>
              <li>درباره ما</li>
              <li>تماس با ما</li>
            </ul>
          </div>
        </>
      )}

      <div className={styles.desk_menu}>
        <nav>
          <ul>
            <li>
              مردانه
              <ul className={styles.desk_sub_menu}>
                <li>کاپشن</li>
                <li>تیشرت</li>
                <li>شلوار</li>
                <li>پیراهن</li>
                <li>کمربند</li>
              </ul>
            </li>

            <li>
              زنانه
              <ul className={styles.desk_sub_menu}>
                <li>کاپشن</li>
                <li>تیشرت</li>
                <li>شلوار</li>
              </ul>
            </li>
            <li>بچه گانه</li>
            <span>|</span>
            <li>درباره ما</li>
            <li>تماس با ما</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Menu;
