import React, { useState } from "react";
import MainVideo from "../../components/MainVideo/MainVideo.js";
import VideoDetails from "../../components/VideoDetails/VideoDetails.js";
import sideVideoData from "../../data/videos.json";
import SideVideo from "../../components/SideVideo.js";
import mainVideoData from "../../data/video-details.json";

function VideoPlayer() {
  const [mainVideo, setMainVideo] = useState(mainVideoData[0]);

  const handleVideoSelection = (video) => {
    setMainVideo(video);
  };
  return (
    <>
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

export default VideoPlayer;
