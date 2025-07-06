import express from "express";
import { validateToken } from "../middleware/auth";
var temporadaR = express.Router();

// Require controller modules.
// R = Router; C = Controller
import * as temporadaC from "../controllers/temporada";

temporadaR.post("/", validateToken, temporadaC.crea);
temporadaR.get("/", temporadaC.llista);
temporadaR.get("/:id", temporadaC.detalls);
temporadaR.delete("/:id", validateToken, temporadaC.esborra);
temporadaR.patch("/:id", validateToken, temporadaC.modifica);

export default temporadaR;
