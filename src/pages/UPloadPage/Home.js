import React, { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import MainVideo from "../../components/MainVideo/MainVideo.js";
import VideoDetails from "../../components/VideoDetails/VideoDetails.js";
import SideVideo from "../../components/SideVideo/SideVideo.js";
import axios from "axios";
import "./Home.css";

const baseUrl = "https://project-2-api.herokuapp.com/";
const apiKey = "7f3aa449-5d3a-4790-8243-c7f8b9210d55";

function Home() {
  const [videoList, setVideoList] = useState([]);
  const { videoId } = useParams();
  const [mainVideo, setMainVideo] = useState({});

  // Fetch video data
  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get(`${baseUrl}videos/?api_key=${apiKey}`);
        setVideoList(response.data);
        if (!videoId) {
          setMainVideo(response.data[0]);
        } else {
          const selectedVideo = response.data.find(
            (video) => video.id === videoId
          );
          setMainVideo(selectedVideo);
        }
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchVideoData();
  }, [videoId]);

  const handleVideoSelection = (video) => {
    setMainVideo(video);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <MainVideo mainVideo={mainVideo} />
            <section className="video__details-container">
              <div className="mainVideo__container">
                <VideoDetails videoId={mainVideo.id} />
              </div>
              <div className="sideVideos__container">
                <SideVideo
                  sideVideos={videoList}
                  handleVideoSelection={handleVideoSelection}
                />
              </div>
            </section>
          </>
        }
      />
      <Route
        path="/video/:videoId"
        element={
          <>
            <MainVideo mainVideo={mainVideo} />
            <section className="video__details-container">
              <div>
                <VideoDetails videoId={mainVideo.id} />
              </div>
              <div>
                <SideVideo
                  sideVideos={videoList}
                  handleVideoSelection={handleVideoSelection}
                />
              </div>
            </section>
          </>
        }
      />
    </Routes>
  );
}

export default Home;