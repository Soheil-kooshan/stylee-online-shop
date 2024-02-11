import { useState } from "react";
import styles from "./Login.module.css";
function Login() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <div onClick={() => setShowLogin(true)} className={styles.loginIcon}>
        <p> ورود</p>
        <img
          src="src/assets/icons/login_FILL0_wght400_GRAD0_opsz24.svg"
          alt="login"
        />
      </div>
      {showLogin && (
        <div className={styles.loginBox}>
          <img
            onClick={() => setShowLogin(false)}
            className={styles.close}
            src="src\assets\icons\close.svg"
            alt="close"
          />
          <p className={styles.welcome}>خوش آمدید</p>
          <label>شماره همراه</label>
          <input type="text" />
          <label>رمز</label>
          <input type="password" minLength={6} />
          <button>ورود</button>
        </div>
      )}
    </>
  );
}

export default Login;
