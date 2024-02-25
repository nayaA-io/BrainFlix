import videos from "../data/videos.json";

function SideVideo() {
  return (
    <section className="sidevideo__container">
      <div>
        {videos.map((video) => (
          <div key={video.id} className="sidevideo__content">
            <video poster={video.image} className="sidevideo-thumbnail">
              Your browser does not support the video tag.
            </video>{" "}
            <div className="Sidechannel__details">
              <h2>{video.title}</h2>
              <p>{video.channel}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SideVideo;
