import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <Link to="pageone">
          <p>Fact number 1</p>
        </Link>
        <Link to="pagetwo">
          <p>Fact number 2</p>
        </Link>
        <Link to="pagethree">
          <p>Fact number 3</p>
        </Link>
        <Link to="pagefour">
          <p>Fact number 4</p>
        </Link>
        <Link to="pagefive">
          <p>Fact number 5</p>
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
