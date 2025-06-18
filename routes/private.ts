import express from "express";
var privateRouter = express.Router();

// Require controller modules.
import * as privatec from "../controllers/privateController";

privateRouter.get("/llista-castells", privatec.llistaCastells);
privateRouter.get("/llista-actuacions", privatec.llistaActuacions);
privateRouter.get("/llista-temporades", privatec.llistaTemporades);
privateRouter.get("/actuacions-temporada/:year", privatec.actuacionsTemporada);

//privateRouter.post("/:rxId", privatec.create);

export default privateRouter;
