const express = require("express");
const app = express();
const videos = require("./routes");
require(`dotenv`).config();

const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Root path");
});

app.use("./routes", videos);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
