import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentForm from "../Forms/Form";

const baseUrl = "https://project-2-api.herokuapp.com/";
const apiKey = "7f3aa449-5d3a-4790-8243-c7f8b9210d55";

const VideoDetails = ({ videoId }) => {
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}videos/${videoId}/?api_key=${apiKey}`
        );
        setVideoDetails(response.data);
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };

    if (videoId) {
      fetchVideoDetails();
    }
  }, [videoId]);

  if (!videoDetails) {
    return null;
  }

  const { title, description, views, likes, comments = [] } = videoDetails;

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <span>Likes: {likes}</span>
        <span>Views: {views}</span>
      </div>
      <h3>Comments:</h3>
      <ul>
        <CommentForm />
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.name}:</strong> {comment.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoDetails;
