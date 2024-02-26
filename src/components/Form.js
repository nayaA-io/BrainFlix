import React, { useState } from "react";
import userAvatar from "../assets/images/mohan-muruge.jpg";
import "./Form.css";
function CommentForm({ comments }) {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("New comment:", newComment);

    setNewComment("");
  };
  return (
    <>
      <h3 className="comments__form-title">Join the conversation</h3>
      <form className="comments__form" onSubmit={handleSubmit}>
        <div className="Header_user-avatar">
          <img className="User__avatar" src={userAvatar} alt="User Avatar" />
        </div>

        <input
          className="comments__input"
          placeholder="Add a new comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button className="comments__submit" type="submit">
          Add Comment
        </button>
      </form>
    </>
  );
}

export default CommentForm;
