import express from "express";
import dotenv from "dotenv";
import logMiddleware from "./middlewares/logMiddleware";
import errorMiddleware from "./middlewares/errorMiddleware";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(logMiddleware)
//Routes

app.use(errorMiddleware);

module.exports = app;

