import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Header.js";
import MainVideo from "./components/MainVideo.js";
import VideoDetails from "./components/VideoDetails.js";

import SideVideo from "./components/SideVideo.js";
import mainVideoData from "./data/video-details.json";
import sideVideoData from "./data/videos.json";
function App() {
  const [mainVideo, setMainVideo] = useState(mainVideoData[0]);

  const handleVideoSelection = (video) => {
    setMainVideo(video);
  };

  return (
    <>
      <Navbar />
      <MainVideo mainVideo={mainVideo} />
      <section className="video__details-container">
        <div>
          <VideoDetails mainVideo={mainVideo} />
        </div>
        <div>
          <SideVideo
            sideVideos={sideVideoData}
            handleVideoSelection={handleVideoSelection}
          />
        </div>
      </section>
    </>
  );
}

export default App;
