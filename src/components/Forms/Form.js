import React, { useState } from "react";
import userAvatar from "../../assets/images/mohan-muruge.jpg";
import "../Forms/Form.css";
function CommentForm({ comments }) {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("New comment:", newComment);

    setNewComment("");
  };
  return (
    <>
      <p className="comments__form-title">Join the conversation</p>
      <form className="comments__form" onSubmit={handleSubmit}>
        <div className="Header_user-avatar">
          <img className="User__avatar" src={userAvatar} alt="User Avatar" />
        </div>

        {/* <div className="input__area"> */}
        <textarea
          className="comment__Input"
          placeholder="Add a new comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          required
        ></textarea>

        <button className="comment__submit button">➕COMMENT</button>
        {/* </div> */}
      </form>
    </>
  );
}

export default CommentForm;
