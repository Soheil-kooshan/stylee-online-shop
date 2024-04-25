import styles from "./Navbar.module.css";
import Search from "../components/search";
import Menu from "../components/Menu";
import Logo from "../components/logo";
import Login from "../components/Login";
import GoToCart from "../components/GoToCart";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation().pathname;
  console.log(location);
  return (
    <>
      <div className={styles.navbar}>
        <Logo />
        <Search />
        <Login />
        {location !== "/cart" && <GoToCart />}
        <Menu />
      </div>
    </>
  );
}

export default Navbar;
