import "./App.css";

import React, { useState, useEffect } from "react";
import Navbar from "./components/Header.js";
import MainVideo from "./components/MainVideo.js";
import VideoDetails from "./components/VideoDetails.js";
//import Form from "./Form";
//import Comments from "./Comments";
import SideVideo from "./components/SideVideo.js";
import mainVideoData from "./data/video-details.json";
import sideVideoData from "./data/videos.json";
function App() {
  const [mainVideo, setMainVideo] = useState({});
  const [sideVideos, setSideVideos] = useState([]);

  useEffect(() => {
    setMainVideo(mainVideoData);

    setSideVideos(sideVideoData);
  }, []);

  return (
    <>
      <Navbar />
      <MainVideo mainVideo={mainVideo} />
      <section className="video__details-container">
        <div>
          <VideoDetails mainVideo={mainVideo} />
          {/* <Form />
          <Comments mainVideo={mainVideo} /> */}
        </div>
        <div>
          <SideVideo sideVideos={sideVideos} />
        </div>
      </section>
    </>
  );
}

export default App;
