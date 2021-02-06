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
        <div className=" content1 main-text   ">
          <h2 className="text-5xl mr-2   ">Contact</h2>
        </div>

        <div className=" content2 Other-text flex flex-row w-full mt-8   text-white">
          <Link to="/">
            <span className="text-white">Home /</span>
          </Link>

          <Link className="text-white " to="/contact">
            <span className="text-white">Contact</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
