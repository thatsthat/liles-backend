import express from "express";
var autenticacioR = express.Router();

import { login, signup } from "../controllers/autenticacio";

autenticacioR.post("/login", login);
autenticacioR.post("/signup", signup);

export default autenticacioR;
