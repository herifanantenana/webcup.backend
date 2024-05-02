import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import dotenv from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// TODO: 🚧 add import routes

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/images", express.static(path.join(__dirname, "../uploads/images")));
app.use("/files", express.static(path.join(__dirname, "../uploads/files")));
app.use("/videos", express.static(path.join(__dirname, "../uploads/videos")));

// TODO: 🚧 add routes

export default app;
