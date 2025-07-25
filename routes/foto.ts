import express from "express";
import { validateToken } from "../middleware/auth";
var fotoR = express.Router();
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Require controller modules.
import * as fotoC from "../controllers/foto";

fotoR.post("/", validateToken, upload.array("avatar"), fotoC.crea);
fotoR.get("/", fotoC.llista);
fotoR.get("/:id", fotoC.detalls);
fotoR.delete("/:id", validateToken, fotoC.esborra);
fotoR.patch("/:id", validateToken, fotoC.modifica);

export default fotoR;
