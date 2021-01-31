import React, { useState } from "react";
import { Artist } from "./data";

const ArtLineUp = () => {
  const [artist, setArtist] = useState(Artist);
  return (
    <div className="artistLineUp">
      <h1>Artist lineup</h1>
      <div className="artistCard">
        {artist.map((desc) => {
          const { id, name, FB, TW, IG, img } = desc;
          return (
            <div key={id} className="card">
              <img src={img} alt="music" />

              <div className="info">
                <div className="social">
                  <a href={FB}>
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href={IG}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href={TW}>
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
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

export default ArtLineUp;
