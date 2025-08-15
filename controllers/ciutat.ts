import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "../generated/client";
const prisma = new PrismaClient();

export const llista = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const ciutats = await prisma.ciutat.findMany({
    orderBy: {
      nom: "asc",
    },
  });
  res.send(ciutats);
};
