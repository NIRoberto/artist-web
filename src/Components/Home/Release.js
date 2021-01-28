import React from "react";

const Release = () => {
  return (
    <div className="release">
      <h1>Latest release</h1>
      <br />

      <div className="album-info">
        <div className="infos">
          <div className="img">
            <img src="/images/music1.jpg" alt="Music" />
          </div>
          <div className="album-text">
            <div className="title">
              <h2>Genda by Ducer</h2>
            </div>
            <div className="text">
              <p>
                Most happening band Blood Chain recently has released their
                debut album called “HEAVEN”. Officialy the album released on May
                19, 2018 in Harmonik Studio, Venice. This Alternative Rock Band
                made 12 songs with total 36:20 minutes timeline.
              </p>
            </div>
          </div>
        </div>

        <div className="view-video">
          <div className="video">
            <br />
            <iframe
              title="release"
              width="360"
              src="https://www.youtube.com/embed/fFbS4pADBos"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      {/* <div className="listen-demo">
        <audio
          id="audio"
          controls
          src="/audio/y2mate.com - Savage Love  GMA  Live Music Video_64kbps.mp3"
          type="mp3"
        />
      </div> */}
    </div>
  );
};

export default Release;
