import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "../generated/client";
const prisma = new PrismaClient();

export const llista = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const actuacions = await prisma.actuacio.findMany({
    orderBy: {
      data: "desc",
    },
  });
  res.send(actuacions);
};

export const detalls = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const actuacio = await prisma.actuacio.findUnique({
    where: {
      id: +req.params.id,
    },
    include: {
      castells: { include: { colla: true, tipusCastell: true }  },
      ciutat: true,
      colles: true,
    },
  });
  console.log(actuacio)
  res.send(actuacio);
};

export const crea = async (req: Request, res: Response, next: NextFunction) => {
  return res.send("crea actuacio");
};

export const esborra = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.send("Esborra actuacio");
};

export const modifica = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.send("modifica actuacio");
};
