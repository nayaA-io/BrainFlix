import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components//Header/Header.js";
import VideoDetails from "./components/VideoDetails/VideoDetails.js";
import Upload from "./pages/UploadPage/Upload.js";
import Home from "./pages/UploadPage/Home.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route index path="/" Component={Home} />
          {/* <Route index path="/video/:id" Component={Home} /> */}

          <Route path="/upload" element={<Upload />} />
          {/* <Route path="/" element={<VideoDetails />} /> */}

          <Route path="/video/:videoId" element={<VideoDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
