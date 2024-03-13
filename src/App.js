import "./App.css";

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components//Header/Header.js";
import MainVideo from "./components/MainVideo/MainVideo.js";
import VideoDetails from "./components/VideoDetails/VideoDetails.js";
import SideVideo from "./components/SideVideo.js";
import Upload from "./pages/UPloadPage/Upload.js";
import mainVideoData from "./data/video-details.json";
import sideVideoData from "./data/videos.json";
function App() {
  const [mainVideo, setMainVideo] = useState(mainVideoData[0]);

  const handleVideoSelection = (video) => {
    setMainVideo(video);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/upload" Component={Upload} />
          {/* <Route path="/video/:videoId" element={<VideoDetailsPage />} /> */}
        </Routes>
      </BrowserRouter>

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
