import React from "react";
import { Link } from "react-router-dom";
import "../style/style.css";
const SubNav = () => {
  return (
    <div className="Album-sub-header">
      <div className="img">
        <img src="/images/violin.jfif" alt="bg images" />
      </div>

      <div className="content">
        <div className="main-text">
          <h3>Product list </h3>
          <h2>& Album</h2>
        </div>

        <div className="Other-text">
          <Link to="/">Home</Link> /<Link to="/album">Album</Link>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
