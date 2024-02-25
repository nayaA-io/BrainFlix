import React from "react";
import videoDetails from "../data/video-details.json";

const VideoDetails = ({ mainVideo }) => {
  console.log(mainVideo);
  // Accessing the data in JSON format using destructuring assignment
  const { title, channel, description, views, likes, duration, comments } =
    videoDetails[0];

  return (
    <div className="main__video">
      <div className="main-video__details">
        <h1 className="main-video__title">{title}</h1>
        <p className="main-video__channel">{channel}</p>
        <p className="main-video__views">{views} views</p>
        <p className="main-video__likes">{likes} likes</p>
        <p className="main-video__description">{description}</p>
      </div>
      <div className="main-video__comments">
        <h2 className="main-video__comments-title">Comments</h2>
        <ul className="main-video__comments-list">
          {comments.map((comment) => (
            <li key={comment.id} className="main-video__comment">
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
