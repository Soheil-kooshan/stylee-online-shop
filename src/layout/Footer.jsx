import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <ul>
          <li>خرید</li>
          <li>تیشرت</li>
          <li>کاپشن</li>
          <li>کمبرند</li>
          <li>شلوار</li>
          <li>پیراهن</li>
        </ul>
        <ul>
          <li>خدمات به مشتریان</li>
          <li>پرسش های متدوال</li>
          <li>رویه بازگرداندن کالا</li>
          <li>حریم خصوصی</li>
        </ul>
        <ul>
          <li>اطلاعات استایلی</li>
          <li>درباره استایلی</li>
          <li>تماس با استایلی</li>
        </ul>
        <ul>
          <li>با ما همراه باشید</li>
          <li>
            <img src="src\assets\icons\instagram.svg" alt="instagram" />
          </li>
          <li>
            <img src="src\assets\icons\telegram.svg" alt="telegram" />
          </li>
          <li>
            <img src="src\assets\icons\whatsapp.svg" alt="whatsapp" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
