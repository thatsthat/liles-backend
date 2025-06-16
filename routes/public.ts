import express from "express";
var publicRouter = express.Router();

import { login, signup } from "../controllers/publicController";

publicRouter.post("/login", login);
publicRouter.post("/signup", signup);

export default publicRouter;
