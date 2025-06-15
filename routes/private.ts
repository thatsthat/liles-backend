import express from "express";
var privateRouter = express.Router();

// Require controller modules.
import privatec from "../controllers/privateController";

privateRouter.get("/llista-castells", privatec.llistaCastells);
privateRouter.get("/llista-actuacions", privatec.llistaActuacions);
//privateRouter.post("/:rxId", privatec.create);

export default privateRouter;
