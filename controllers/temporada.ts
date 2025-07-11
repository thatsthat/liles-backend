import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "../generated/client";
const prisma = new PrismaClient();

export const llista = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const temporades = await prisma.temporada.findMany({
    orderBy: {
      year: "desc",
    },
  });
  res.send(temporades);
};

export const detalls = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const temporada = await prisma.temporada.findUnique({
    where: {
      id: +req.params.id,
    },
    include: {
      actuacions: {
        include: {
          castells: false,
          ciutat: true,
        },
        orderBy: {
          data: "asc",
        },
      },
    },
  });
  res.send(temporada);
};

export const crea = async (req: Request, res: Response, next: NextFunction) => {
  res.send("Crea temporada");
};

export const esborra = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("Esborra temporada");
};

export const modifica = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("Modifica temporada");
};
