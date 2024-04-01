import brainFlixLogo from "../../assets/images/logo/brainFlix-logo.svg";

import { Link } from "react-router-dom";

import userAvatar from "../../assets/images/mohan-muruge.jpg";
//import Upload from "../../pages/UPloadPage/Upload";

function Navbar() {
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
          </div>

          <div className="Header_user-avatar">
            <img className="User__avatar" src={userAvatar} alt="User Avatar" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
