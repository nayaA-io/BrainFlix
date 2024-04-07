import "./App.css";

<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components//Header/Header.js";
// import VideoDetails from "./components/VideoDetails/VideoDetails.js";
import Upload from "./pages/UploadPage/Upload.js";
import Home from "./pages/UploadPage/Home.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:videoId" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
=======
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
>>>>>>> main
    </>
  );
}

export default App;
