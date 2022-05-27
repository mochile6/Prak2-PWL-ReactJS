import React from "react";
import { Link } from "react-router-dom";
import styles from "./style";

const NavBar = () => {
  const classes = styles();
  return (
    <nav>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <Link className={classes.link} to="/home">
            Home
          </Link>
        </li>
        <li className={classes.li}>
          <Link className={classes.link} to="/biodata">
            Biodata
          </Link>
        </li>
        <li className={classes.li}>
          <Link className={classes.link} to="/komentar">
            komentar
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
