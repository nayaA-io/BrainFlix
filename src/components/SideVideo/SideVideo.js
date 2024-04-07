import React from "react";
import "./sidevideo.scss";
import { Link } from "react-router-dom"; // Import the external CSS file

function SideVideo({ sideVideos, handleVideoSelection }) {
  return (
    <section className="sidevideo_container">
      <div>
        {sideVideos.map((video) => (
          <div className="sidevideo__container">
            <Link
              className="sidevideo__link"
              key={video.id}
              to={`/video/${video.id}`}
            >
              <video poster={video.image} className="sidevideo-thumbnail">
                <source src={video.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="Sidechannel__details">
                <h2>{video.title}</h2>
                <p>{video.channel}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SideVideo;
