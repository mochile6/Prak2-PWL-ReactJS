import React from "react";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="home" href="#">
        Home
      </a>
      <a className="about" href="#">
        About
      </a>
      <a className="biodata" href="#">
        Biodata
      </a>
    </nav>
  );
}
