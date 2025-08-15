import express from "express";
import { validateToken } from "../middleware/auth";
var R = express.Router();

// Require controller modules.
// R = Router; C = Controller
import * as C from "../controllers/temporada";

R.post("/", validateToken, C.crea);
R.get("/", C.llista);
R.get("/:id", C.detalls);
R.delete("/:id", validateToken, C.esborra);
R.patch("/:id", validateToken, C.modifica);

export default R;
