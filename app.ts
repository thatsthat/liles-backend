require("@dotenvx/dotenvx").config();
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import bcrypt from "bcryptjs";
import cors from "cors";
import publicRouter from "./routes/public";
import privateRouter from "./routes/private";
import { validateToken } from "./middleware/auth";

var app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
console.log(process.env.ORIGIN);
app.use(cors({ origin: process.env.ORIGIN }));

app.use("/", publicRouter);
app.use("/private", privateRouter);
//app.use("/private", validateToken, privateRouter);

module.exports = app;
