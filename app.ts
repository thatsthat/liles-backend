require("@dotenvx/dotenvx").config();
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import bcrypt from "bcryptjs";
import cors from "cors";
import nocache from "nocache";
import autenticacioR from "./routes/autenticacio";
import temporadaR from "./routes/temporada";
import actuacioR from "./routes/actuacio";
import castellR from "./routes/castell";
import ciutatR from "./routes/ciutat";
import { Request, Response, NextFunction } from "express";

import fotoR from "./routes/foto";
import { validateToken } from "./middleware/auth";

var app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: process.env.ORIGIN }));

app.use("/", autenticacioR);
app.use("/temporada", temporadaR);
app.use("/actuacio", actuacioR);
app.use("/castell", castellR);
app.use("/foto", fotoR);
app.use("/ciutat", ciutatR);
// Every thrown error in the application or the previous middleware function calling `next` with an error as an argument will eventually go to this middleware function
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send(err);
});

module.exports = app;
