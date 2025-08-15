import express from "express";
import { validateToken } from "../middleware/auth";
var R = express.Router();

// Require controller modules.
import * as C from "../controllers/castell";

R.get("/tipus", C.tipus);
R.post("/", validateToken, C.crea);
R.get("/", C.llista);
R.get("/:id", C.detalls);
R.delete("/:id", validateToken, C.esborra);
R.patch("/:id", validateToken, C.modifica);

export default R;
