import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import { send } from "process";
import { errorHandler } from "./Middleware/errorHandler.js";

dotenv.config({
    path: "./.env",
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(errorHandler);

app.get("/", (req, res) => {
    res, send("Welcome to First Practice Project of Nodejs");
});

app.use((err, req, res, next) => {
    res.status(500).json({
        success: false,
        message: err.message,
    });
});

export default app;
