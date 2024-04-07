function SideVideo({ sideVideos, handleVideoSelection }) {
  return (
    <section className="sidevideo__container">
      <div>
        {sideVideos.map((video) => (
          <div
            key={video.id}
            className="sidevideo__content"
            onClick={() => handleVideoSelection(video)}
          >
            <video poster={video.image} className="sidevideo-thumbnail">
              <source src={video.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
