import express from "express";
var publicRouter = express.Router();

import user from "../controllers/publicController";

publicRouter.post("/login", user.login);
publicRouter.post("/signup", user.signup);

export default publicRouter;
