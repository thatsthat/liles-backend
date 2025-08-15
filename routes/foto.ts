import multer from "multer";
import express from "express";
import { validateToken } from "../middleware/auth";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
var R = express.Router();

// Require controller modules.
import * as C from "../controllers/foto";

R.post("/", validateToken, upload.array("avatar"), C.crea);
//fotoR.post("/", upload.single("avatar"), C.crea);
R.get("/", C.llista);
R.get("/:id", C.detalls);
R.delete("/:id", validateToken, C.esborra);
R.patch("/:id", validateToken, C.modifica);

export default R;
