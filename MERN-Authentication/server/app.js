import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middleware/error.js";
import { connection } from "./database/dbConnection.js";
import userRouter from "./router/userRouter.js"

dotenv.config();

export const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/user", userRouter);

// http://localhot:4000/api/v1/user/register

connection();

// error middleware at the last
app.use(errorMiddleware);
