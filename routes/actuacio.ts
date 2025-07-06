import express from "express";
import { validateToken } from "../middleware/auth";
var actuacioR = express.Router();

// Require controller modules.
import * as actuacioC from "../controllers/actuacio";

actuacioR.post("/", validateToken, actuacioC.crea);
actuacioR.get("/", actuacioC.llista);
actuacioR.get("/:id", actuacioC.detalls);
actuacioR.delete("/:id", validateToken, actuacioC.esborra);
actuacioR.patch("/:id", validateToken, actuacioC.modifica);

export default actuacioR;
