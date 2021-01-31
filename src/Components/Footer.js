import React from "react";
import "../style/style.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="main">
          <div className="logo">Ducer</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            laboriosam magnam. Dignissimos?
          </div>
        </div>
        <div className="second">
          <h1>Latest post</h1>
          <ul>
            <li>
              <a href="http://pioano.com">Drum</a>
            </li>
            <li>
              <a href="http://">post</a>
            </li>
            <li>
              <a href="http://">Songs</a>
            </li>
          </ul>
        </div>
        <div className="third">
          <h2>Follow me </h2>

          <div className="list">
            <ol>
              <li>
                <a href="" className="sosial-links">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="" className="sosial-links">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="" className="sosial-links"></a>
              </li>
              <li>
                <a href="" className="sosial-links">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="developer">
        <p>Powered By Robert Niyitanga</p>
      </div>
    </footer>
  );
};

export default Footer;
