import brainFlixLogo from "../../assets/images/logo/brainFlix-logo.svg";
//import { useRef } from "react";
import { Link } from "react-router-dom";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import userAvatar from "../../assets/images/mohan-muruge.jpg";
import "./Header.css";
//import Upload from "../../pages/UPloadPage/Upload";

function Navbar() {
  // const FileUpload = useRef(null);

  // const handleUploadButtonClick = () => {
  //   FileUpload.current.click();
  // };

  return (
    <header>
      <div className="Header__container">
        <Link to="/">
          <img src={brainFlixLogo} className="Brand__logo" alt="BrainFlix" />
        </Link>

        <div className="Header__content searchbar upload-btn">
          <input className="Search__bar" type="text" placeholder="🔍 Search" />

          {/* <div className="Header_user-avatar">
            <img className="User__avatar" src={userAvatar} alt="User Avatar" />
          </div> */}

          {/*  */}

          <div className="header__upload-button">
            <Link className="upload__link" to="/upload">
              Upload
            </Link>
            {/* <Routes>
              <Route
                path="/src/pages/UPloadPage/Upload.js"
                element={<Upload />}
              />
            </Routes>{" "} */}
          </div>

          <div className="Header_user-avatar">
            <img className="User__avatar" src={userAvatar} alt="User Avatar" />
          </div>
          {/* </div> */}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
