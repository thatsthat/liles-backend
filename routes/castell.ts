import express from "express";
import { validateToken } from "../middleware/auth";
var castellR = express.Router();

// Require controller modules.
import * as castellC from "../controllers/castell";

castellR.get("/tipus", castellC.tipus);
castellR.post("/", validateToken, castellC.crea);
castellR.get("/", castellC.llista);
castellR.get("/:id", castellC.detalls);
castellR.delete("/:id", validateToken, castellC.esborra);
castellR.patch("/:id", validateToken, castellC.modifica);

export default castellR;
