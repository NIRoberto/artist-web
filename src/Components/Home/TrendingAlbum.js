import React, { useState } from "react";
import { TrendAlbum } from "./data";

const TrendingAlbum = () => {
  const [trendAlbum, setTrendAlbum] = useState(TrendAlbum);
  return (
    <div className="trendAlbum">
      <h1>Upcoming album</h1>
      {trendAlbum.map((Desc) => {
        const { id, title, desc, dateNumber, date } = Desc;
        console.log(dateNumber);
        return (
          <div key={id} className="upcoming-album">
            <div className="main-sec1">
              <div className="date">
                <h3 className="title">{dateNumber}</h3>
              </div>
              <div className="sub-date">
                <span>{date}</span>
              </div>
            </div>

            <div className="main-sec2">
              <div className="main-title">
                <h2>{title}</h2>
              </div>
              <div className="desc">
                <p>{desc}</p>
              </div>
            </div>
            <div className="main-sec3">
              <button type="button">Ticket</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrendingAlbum;
