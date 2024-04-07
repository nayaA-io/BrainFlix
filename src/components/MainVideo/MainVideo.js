import React from "react";
<<<<<<< HEAD:src/components/MainVideo/MainVideo.js
=======
//import mainVideoData from "../data/video-details.json";
//import VideoDetails from "./VideoDetails";
>>>>>>> main:src/components/MainVideo.js

function MainVideo({ mainVideo }) {
  //   const videoData = mainVideoData[0];

  return (
    <div className=" main__video-container">
      <div className="video__wrapper">
        <video controls poster={mainVideo.image} className="main-video__player">
          <source src={mainVideo.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default MainVideo;
