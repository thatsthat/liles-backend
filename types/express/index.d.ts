import { Usuari } from "../custom";
import { Express } from "express";

// to make the file a module and avoid the TypeScript error
export {};

declare global {
  namespace Express {
    export interface Request {
      user?: Usuari;
      files?: Express.Multer.File[];
      file?: Express.Multer.File;
    }
  }
}
