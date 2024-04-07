//import React, { useState } from "react";
// import axios from "axios";
import CommentForm from "../Forms/Form";
import "../../pages/UploadPage/Home.css";
import userAvatar from "../../assets/images/mohan-muruge.jpg";

// const baseUrl = "https://project-2-api.herokuapp.com/";
// const apiKey = "7f3aa449-5d3a-4790-8243-c7f8b9210d55";

const VideoDetails = ({ mainVideo }) => {
  console.log(mainVideo);
  // const [videoDetails, setVideoDetails] = useState(null);

  // useEffect(() => {
  //   const fetchVideoDetails = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8082/videos");
  //       setVideoDetails(response.data);
  //     } catch (error) {
  //       console.error("Error fetching video details:", error);
  //     }
  //   };

  //   if (videoList) {
  //     fetchVideoDetails();
  //   }
  // }, [videoId]);

  if (!mainVideo) {
    return null;
  }

  const {
    title,
    channel,
    views,
    likes,
    description,
    comments = [],
  } = mainVideo;
  console.log(title);

  return (
    <div className="channel">
      <h2 className="channel__title">{title}</h2>
      <span className="channel__name">By {channel}</span>
      <div className="channel__details">
        <span className="channel__detail views">{views}</span>
        <span className="channel__detail like">{likes}</span>
      </div>

      <hr />
      <p className="channel__description">{description}</p>

      <h3>Comments:</h3>
      <ul className="comments">
        <CommentForm />
        {comments.map((comment) => (
          <li key={comment.id} className="channel__comment">
            <div className="Header_user-avatar">
              <div className="comment__avatar"></div>
              {/* <img
               
                src={userAvatar}
                alt="User Avatar"
              /> */}
            </div>

            <div className="comment__user-info">
              <p className="comment__name">{comment.name}</p>
              <p className="comment__text">{comment.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoDetails;
