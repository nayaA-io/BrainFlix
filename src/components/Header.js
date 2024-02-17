import brainFlixLogo from "../assets/images/logo/brainFlix-logo.svg";
import { useRef } from "react";
import userAvatar from "../assets/images/mohan-muruge.jpg";
// import React, { useState } from "react";

function Navbar() {
  const FileUpload = useRef(null);

  const handleUploadButtonClick = () => {
    FileUpload.current.click();
  };

  return (
    <header>
      <div className="Header__container">
        <a href="../App.js">
          <img src={brainFlixLogo} className="Brand__logo" alt="BrainFlix" />
        </a>

        <div className="Header__content searchbar upload-btn">
          <input className="Search__bar" type="text" placeholder="🔍 Search" />

          {/* <div className="Header_user-avatar">
            <img className="User__avatar" src={userAvatar} alt="User Avatar" />
          </div> */}
          {/* <div className="Header__upload-button"> */}
          <form className="Header__upload-file">
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
          </form>
          <div className="Header_user-avatar">
            <img className="User__avatar" src={userAvatar} alt="User Avatar" />
          </div>
          {/* </div> */}
        </div>
      </div>
    </header>
  );
}

// function FileUpload() {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // You can perform file upload logic here
//     if (selectedFile) {
//       console.log("Selected file:", selectedFile);
//     } else {
//       console.log("No file selected");
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="file"
//           onChange={handleFileChange}
//           accept=".jpg, .jpeg, .png, .gif, .svg, .pdf" // Specify accepted file types
//         />
//       </form>
//     </div>
//   );
// }

//export { Navbar };
export default Navbar;
// export default FileUpload;
