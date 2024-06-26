const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");
const dotenv = require("dotenv");
const path = require("path");


// TODO: 🚧 add import routes

dotenv.config();

const app = express();
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/images", express.static(path.join(__dirname, "../uploads/images")));
app.use("/files", express.static(path.join(__dirname, "../uploads/files")));
app.use("/videos", express.static(path.join(__dirname, "../uploads/videos")));

app.get("/api", (req, res) => {
  res.send("Hello World Trimobe!")
});

// TODO: 🚧 add routes

module.exports = app;