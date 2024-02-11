import styles from "./Login.module.css";
function Login() {
  return (
    <>
      <div className={styles.loginIcon}>
        <p> ورود</p>
        <img
          src="src/assets/icons/login_FILL0_wght400_GRAD0_opsz24.svg"
          alt="login"
        />
      </div>
      <div className={styles.loginBox}>
        <p className={styles.welcome}>خوش آمدید</p>

        <label>شماره همراه</label>
        <input type="text" />
        <label>رمز</label>
        <input type="password" minLength={6} />
        <p className={styles.signUpCheck}>ثبت نام نکرده ام</p>
      </div>
    </>
  );
}

export default Login;
