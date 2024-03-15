import styles from "./Navbar.module.css";
import Search from "../components/search";
import Menu from "../components/Menu";
import Logo from "../components/logo";
import Login from "../components/Login";

function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <Logo />
        <Search />
        <Login />
        <Menu />
      </div>
    </>
  );
}

export default Navbar;
