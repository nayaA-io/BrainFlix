import React from "react";
import thumbnail from "../../assets/images/mohan-muruge.jpg";
//import Navbar from "../../components/Header/Header";

function Upload() {
  return (
    <>
      <hr />
      <div className="upload__container">
        <h1> Upload Video</h1>
        <hr />
        <div className="upload__content">
          {/* <div className="upload__thumbnail-img"> */}
          <img className="upload__thumbnail" src={thumbnail} alt="" />
          {/* </div> */}
          <div className="upload__details">
            <form className="upload__form">
              <label>TITLE YOUR VIDEO</label>
              <input
                className="upload__tittle-input"
                type="text"
                placeholder="Add a title to your video"
              />
              <label>ADD A VIDEO DESCRIPTION</label>
              <textarea
                className="upload__tittle-input"
                type="text"
                placeholder="Add a tittle"
              ></textarea>
            </form>
          </div>
        </div>
        <hr />
        <div className="upload__action">
          <p>Cancel</p>
          <button className="header__upload-button" type="submit">
            Upload
          </button>
        </div>
      </div>
    </>
  );
}

export default Upload;

/* <form className="Header__upload-file">
<input
  type="file"
  accept=".jpg, .jpeg, .png, .gif, .svg, .pdf"
  id="uploadFileInput"
  name="filename"
  placeholder="Upload"
  style={{ display: "none" }}
  ref={FileUpload}
/>
<button
  className="Upload__button"
  type="button"
  onClick={handleUploadButtonClick}
>
  🔼Upload
</button>
</form> */
