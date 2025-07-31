import multer from "multer";
import express from "express";
import { validateToken } from "../middleware/auth";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
var fotoR = express.Router();

// Require controller modules.
import * as fotoC from "../controllers/foto";

fotoR.post("/", validateToken, upload.array("avatar"), fotoC.crea);
//fotoR.post("/", upload.single("avatar"), fotoC.crea);
fotoR.get("/", fotoC.llista);
fotoR.get("/:id", fotoC.detalls);
fotoR.delete("/:id", validateToken, fotoC.esborra);
fotoR.patch("/:id", validateToken, fotoC.modifica);

export default fotoR;
