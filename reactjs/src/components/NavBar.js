import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <header>
        <table>
          <td class="atas">
            <img
              class="logo"
              src="https://pbs.twimg.com/profile_images/1107597594551681025/f_zyWZRZ_400x400.jpg"
              alt="ITERA"
            />
          </td>
          <td class="atass">Institut Teknologi Sumatera</td>
        </table>
      </header>

      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/biodata">biodata</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
