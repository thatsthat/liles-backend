import express from "express";
import { validateToken } from "../middleware/auth";
var R = express.Router();

// Require controller modules.
import * as C from "../controllers/ciutat";

R.get("/", C.llista);

export default R;
