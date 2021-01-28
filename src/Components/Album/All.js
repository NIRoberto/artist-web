import React from "react";
import { album } from "./data";
import "../style/style.css";

const All = () => {
  return (
    <div className="album">
      <div className="select">
        <div className="type1">
          <button>All</button>
        </div>
        <div className="type1">
          <button>R&B</button>
        </div>
        <div className="type1">
          <button>RAP</button>
        </div>
        <div className="type1">
          <button> TRAP</button>
        </div>
      </div>
      <div className="albumCard">
        {" "}
        {album.map((desc) => {
          const { id, name, img } = desc;
          return (
            <div key={id} className="card">
              <img src={img} alt="music" />

              <div className="info">
                <div className="name">
                  <span>{name}</span>
                </div>
                <div className="profile">
                  <a href="#ig">More</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default All;
