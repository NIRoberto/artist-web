import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style/style.css";

const NavBar = () => {
  const [Burger, setBurger] = useState(false);
  const [Width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  });
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <h5>DUCER</h5>
        </Link>
      </div>

      <ul className={!Burger ? "nav-list" : "ul"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/artist">Artist</Link>
        </li>
        <li>
          <Link to="/album">Album</Link>
        </li>
        <li>
          <Link to="/contact"> Contact</Link>
        </li>
        <li className="Login">
          <Link className="login" to="/login">
            Login
          </Link>
        </li>
      </ul>
      <div className="humBurger-btn">
        <i
          onClick={() => setBurger(!Burger)}
          className={Burger ? "fas fas fa-bars" : " fas fa-times"}
        ></i>
      </div>
    </header>
  );
};

export default NavBar;
