import express from "express";
var privateRouter = express.Router();

// Require controller modules.
import * as privatec from "../controllers/privateController";

privateRouter.post("/", privatec.create);
privateRouter.get("/llista-castells", privatec.llistaCastells);
privateRouter.get("/resultats-castells", privatec.resultatsCastells);
privateRouter.get("/llista-actuacions", privatec.llistaActuacions);
privateRouter.get("/llista-temporades", privatec.llistaTemporades);
privateRouter.get("/temporada/:year", privatec.actuacionsTemporada);

export default privateRouter;
