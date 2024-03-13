import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components//Header/Header.js";

import Upload from "./pages/UploadPage/Upload.js";
import VideoPlayer from "./pages/UploadPage/VideoPlayer.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route index path="/" Component={VideoPlayer} />

          <Route path="/upload" Component={Upload} />

          {/* <Route path="/video/:videoId" element={<VideoDetailsPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
