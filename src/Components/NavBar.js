import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style/style.css";

const NavBar = () => {
  const [Burger, setBurger] = useState(false);
  const [Width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      console.log(Width);
    });
  });
  return (
    <header>
      <div className="logo">
        <Link to="/">
          {/* <img src="/images/guitarLogo.svg" alt="logo" /> */}
          <h5>M pro</h5>
        </Link>
      </div>

      <ul className={!Burger ? "nav-list" : "ul"}>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/artist">ARTIST</Link>
        </li>
        <li>
          <Link to="/album">ALBUM</Link>
        </li>
        <li>
          <Link to="/contact"> CONTACT</Link>
        </li>
        <li className="Login">
          <Link className="login" to="/login">
            LOGIN
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
