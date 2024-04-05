const express = require("express");
const app = express();
const videos = require("./routes/videos");
require(`dotenv`).config();
const cors = require("cors");

const PORT = process.env.PORT || 8082;

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );

app.use(cors());
app.use(express.json());
app.use(express.static("public/images"));

app.get("/", (req, res) => {
  res.send("Server is running....");
});

app.use("/videos", videos);
// app.use("./videos/:id", videos);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
