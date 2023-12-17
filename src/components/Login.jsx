import styles from "./Login.module.css";
function Login() {
  return (
    <div className={styles.login}>
      <p> ورود</p>
      <img
        src="src/assets/icons/login_FILL0_wght400_GRAD0_opsz24.svg"
        alt="login"
      />
    </div>
  );
}

export default Login;
