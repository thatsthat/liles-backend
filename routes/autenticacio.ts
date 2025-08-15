import express from "express";
var R = express.Router();

import { login, signup } from "../controllers/autenticacio";

R.post("/login", login);
R.post("/signup", signup);

export default R;
