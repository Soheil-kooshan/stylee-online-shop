import { useState } from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
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
              <li>
                مردانه
                <img
                  src="src\assets\icons\arrow_back_ios_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="arrow"
                />
                <ul className={styles.mob_sub_menu}>
                  <li>
                    {" "}
                    <Link to={"Products/category/کاپشن_مردانه"}>کاپشن</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"Products/category/تیشرت_مردانه"}>تیشرت</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"Products/category/شلوار_مردانه"}>شلوار</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"Products/category/پیراهن_مردانه"}>پیراهن</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"Products/category/کمربند_مردانه"}>کمربند</Link>
                  </li>
                </ul>
              </li>
              <li>
                زنانه
                <img
                  src="src\assets\icons\arrow_back_ios_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="arrow"
                />
                <ul className={styles.mob_sub_menu}>
                  <li>
                    {" "}
                    <Link to={"Products/category/کاپشن_زنانه"}>کاپشن</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"Products/category/تیشرت_زنانه"}>تیشرت</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"Products/category/شلوار_زنانه"}>شلوار</Link>
                  </li>
                </ul>
              </li>
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
              <img
                src="src\assets\icons\arrow-down-svgrepo-com.svg"
                alt="arrow"
              />
              <ul className={styles.desk_sub_menu}>
                <li>
                  <Link to={"Products/category/کاپشن_مردانه"}>کاپشن</Link>
                </li>
                <li>
                  <Link to={"Products/category/تیشرت_مردانه"}>تیشرت</Link>
                </li>
                <li>
                  <Link to={"Products/category/شلوار_مردانه"}>شلوار</Link>
                </li>
                <li>
                  <Link to={"Products/category/پیراهن_مردانه"}>پیراهن</Link>
                </li>
                <li>
                  <Link to={"Products/category/کمربند_مردانه"}>کمربند</Link>
                </li>
              </ul>
            </li>

            <li>
              زنانه
              <img
                src="src\assets\icons\arrow-down-svgrepo-com.svg"
                alt="arrow"
              />
              <ul className={styles.desk_sub_menu}>
                <li>
                  <Link to={"Products/category/کاپشن_زنانه"}>کاپشن</Link>
                </li>
                <li>
                  <Link to={"Products/category/تیشرت_زنانه"}>تیشرت</Link>
                </li>
                <li>
                  <Link to={"Products/category/شلوار_زنانه"}>شلوار</Link>
                </li>
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
