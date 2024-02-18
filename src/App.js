import "./App.css";
import Navbar from "./components/Header.js";
import videos from "./data/videos.json";
//import VideoDetails from "./components/VideoDetails.js";

function App() {
  return (
    <>
      <Navbar />

      <section className="video__container">
        {/* <VideoDetails video={video} /> */}
        <div>
          {videos.map((video) => (
            <div key={video.id} className="video__container">
              <video controls poster={video.image} className="video-thumbnail">
                Your browser does not support the video tag.
              </video>

              <h2>{video.title}</h2>
              <p>{video.channel}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
