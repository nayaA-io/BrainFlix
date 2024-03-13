import React from "react";
//import Navbar from "../../components/Header/Header";

function Upload() {
  return (
    <>
      <h1> Upload Video</h1>

      <hr />
      <div className="upload__cotnainer">
        <div className="upload__thumbnail"></div>
        <div className="upload__details">
          <form>
            <input
              className="login__input"
              type="text"
              placeholder="Please enter your name to log in"
            />
          </form>
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
