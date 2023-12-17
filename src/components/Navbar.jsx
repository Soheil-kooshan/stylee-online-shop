import { useState } from "react";
import styles from "./Navbar.module.css";
import Search from "./search";
import Menu from "./Menu";
import Logo from "./logo";
import Login from "./Login";

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
