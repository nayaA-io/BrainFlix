import CommentForm from "./Form";

const VideoDetails = ({ mainVideo }) => {
  console.log(mainVideo);

  const comments = mainVideo.comments || [];

  return (
    <div className="main__video">
      <div className="main-video__details">
        <h1 className="main-video__title">{mainVideo.title}</h1>
        <p className="main-video__channel">{mainVideo.channel}</p>
        <p className="main-video__views">{mainVideo.views} views</p>
        <p className="main-video__likes">{mainVideo.likes} likes</p>
        <p className="main-video__description">{mainVideo.description}</p>
      </div>
      <div className="main-video__comments">
        <h3 className="main-video__comments-title">comments</h3>
        <ul className="main-video__comments-list">
          <CommentForm />
          {comments.map((comment, index) => (
            <li key={index} className="main-video__comment">
              <p className="main-video__comment-author">{comment.name}</p>
              <p className="main-video__comment-text">{comment.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VideoDetails;
