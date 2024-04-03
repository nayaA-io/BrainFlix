const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

//const videodata = require("./Videodata");
// const dataPath = path.join("../data/videos.json");

const readFile = (path) => {
  const content = JSON.parse(fs.readFileSync(path));
  return content;
};

//let videos = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

//////////////////////////////////////// Function to save updated data back to the JSON file
// const saveData = () => {
//   fs.writeFileSync(dataPath, JSON.stringify(videos, null, 2), "utf-8");
// };

// In the route, use function above like this:

const videos = readFile("../data/videos.json");

//////////////////////////////////////// Fetch and parse JSON data inside the route
//const jsonData = videodata(dataPath);
// videos = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

/// Chand the name of filecotnet
fs.writeFileSync("../data/videos.json", JSON.stringify(fileContent));

//////////////////////////////////////////////////// GET VIDEO
router.get("/", (req, res) => {
  const videoList = videos.map((video) => ({
    id: video.id,
    title: video.title,
    channel: video.channel,
    image: video.image,
  }));
  res.json(videoList);
});

///////////////////////////////////////////// Get BY ID

router.get("/:id", (req, res) => {
  const videoId = req.params.id;
  const video = videos.find((v) => v.id.toString() === videoId);

  if (!video) {
    return res.status(404).json({ message: "Video Not Found" });
  }
  res.json(video);
});

/////////////////////////////////////////////////// POST
router.post("/", (req, res) => {
  const { title, channel, image } = req.body;

  if (!title || !channel || !image) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const newVideo = {
    id: (Math.random() * 1000).toFixed(),
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
  saveData();
  res.status(201).json(newVideo);
});

module.exports = router;
