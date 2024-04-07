import React, { useState, useEffect, useRef } from "react";
import thumbnail from "../../assets/images/mohan-muruge.jpg";
import axios from "axios";

function Upload() {
  const [video, setVideo] = useState([]);
  const formRef = useRef();

  const addVideo = async (e) => {
    e.preventDefault();
    const titleInput = formRef.current.querySelector("#title");
    const descriptionInput = formRef.current.querySelector("#description");
    const newVideo = {
      title: titleInput.value,
      description: descriptionInput.value,
    };

    try {
      const { data: savedVideo } = await axios.post(
        "http://localhost:8082/videos",
        newVideo
      );
      setVideo([...video, savedVideo]);
      titleInput.value = "";
      descriptionInput.value = "";
    } catch (err) {
      console.log("Failed to save video", err);
    }
  };

  return (
    <>
      <hr />
      <div className="upload__container">
        <h1>Upload Video</h1>
        <hr />
        <form className="upload__form" onSubmit={addVideo} ref={formRef}>
          <div className="upload__content">
            {/* <div className="upload__thumbnail-img"> */}
            <img className="upload__thumbnail" src={thumbnail} alt="" />
            {/* </div> */}
            <div className="upload__details">
              {/* <form className="upload__form" onSubmit={addVideo} ref={formRef}> */}
              <label>TITLE YOUR VIDEO</label>
              <input
                className="upload__tittle-input"
                type="text"
                id="title"
                placeholder="Add a title to your video"
              />
              <label>ADD A VIDEO DESCRIPTION</label>
              <textarea
                className="upload__tittle-input"
                type="text"
                id="description"
                placeholder="Add a title"
              ></textarea>
              {/* </form> */}
            </div>
          </div>
          <hr />
          <div className="upload__action">
            <p>Cancel</p>
            <button className="header__upload-button" type="submit">
              Upload
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Upload;
