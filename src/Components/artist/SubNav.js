import React from "react";
import { Link } from "react-router-dom";
import "../style/style.css";
const SubNav = () => {
  return (
    <div className="Album-sub-header">
      <div className="img">
        <img
          src="/images/guitarBg.jpg "
          className="object-cover"
          alt="bg images"
        />
      </div>

      <div className="content">
        <div className="content1  main-text">
          <h2 className="text-5xl mr-2"> Artist</h2>
        </div>

        <div className="Other-text flex flex-row w-full mt-8   text-white">
          <Link to="/" className="cursor-pointer">
            <span className="text-white">Home /</span>
          </Link>

          <Link className="text-white cursor-pointer " to="/artist">
            <span className="text-white">Artist</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
