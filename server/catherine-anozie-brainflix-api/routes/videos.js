const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/videos.json");

const readFile = (filePath) => {
  const content = JSON.parse(fs.readFileSync(filePath));
  return content;
};

const saveData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), "utf-8");
};

const videos = readFile(dataPath);

// GET VIDEO
router.get("/", (req, res) => {
  const videoList = videos.map((video) => ({
    id: video.id,
    title: video.title,
    channel: video.channel,
    image: video.image,
    description: video.description,
    views: video.views,
    likes: video.likes,
    duration: video.duration,
    video: video.video,
    timestamp: video.timestamp,
    comments: video.comments,
  }));
  res.json(videoList);
});

// Get BY ID
// router.get("videos/:id", (req, res) => {
//   const videoId = req.params.id;
//   const video = videos.find((v) => v.id.toString() === videoId);

//   if (!video) {
//     return res.status(404).json({
//       message: "No video with that id exists",
//     });
//   }
//   res.json(video);
// });

////////////////////////////////////////////////////////////////////////////////

router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log("videoID", id);
  fs.readFile("./data/videos.json", (err, data) => {
    if (err) {
      res.status(500).send(" ID FAILED", err);
      return;
    }
    const videoData = JSON.parse(data);
    const video = videoData.find((v) => v.id === id);
    console.log("video", video);
    if (video) {
      res.json(video);
    } else {
      res.status(404).send("Video not found");
    }
  });
});

// fs.readFile(filename, function (err, data) {
//   if (err) {
//     callback(err);
//     return;
//   }
//   try {
//     callback(null, JSON.parse(data));
//   } catch (exception) {}
// });

//////////////////////////////////////////////////////////////////////////////////////

// POST
router.post("/videos/:id/comments", (req, res) => {
  const { title, channel, image } = req.body;
  if (!title || !channel || !image) {
    return res.status(400).json({ message: "Missing fields" });
  }
  const newVideo = {
    id: (Math.random() * 1000).toFixed(0),
    title,
    channel,
    image,
    description: "",
    views: 0,
    likes: 0,
    duration: "0:00",
    video: "",
    timestamp: Date.now(),
    comments: [],
  };
  videos.push(newVideo);
  saveData(videos);
  res.status(201).json(newVideo);
});

module.exports = router;
