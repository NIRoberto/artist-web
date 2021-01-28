import React, { useState } from "react";
import "../style/style.css";

const Spotlight = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="spotLight">
      <h1>Spotlight</h1>

      <div className="spot-section">
        <div className="video">
          <video
            title="Genda by Ducer lyrics"
            width="100%"
            src="/video/Genda by Ducer (video lyrics).mp4"
            controls
          ></video>
        </div>
        <div className="subscribe-form">
          <h2>Subscribe</h2>
          <span>Subscribe here to get all update on your email</span>
          <form>
            <input
              type="text"
              placeholder="Enter your email here"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <button> Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
