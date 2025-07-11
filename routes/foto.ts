import express from "express";
import { validateToken } from "../middleware/auth";
var fotoR = express.Router();

// Require controller modules.
import * as fotoC from "../controllers/foto";

fotoR.post("/", validateToken, fotoC.crea);
fotoR.get("/", fotoC.llista);
fotoR.get("/:id", fotoC.detalls);
fotoR.delete("/:id", validateToken, fotoC.esborra);
fotoR.patch("/:id", validateToken, fotoC.modifica);

export default fotoR;
