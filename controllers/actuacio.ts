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
      castells: { include: { colla: true, tipusCastell: true } },
      ciutat: true,
      colles: true,
      fotos: true,
    },
  });
  res.send(actuacio);
};

export const crea = async (req: Request, res: Response, next: NextFunction) => {
  res.send("crea actuacio");
};

export const esborra = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("Esborra actuacio");
};

export const modifica = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let lloc = null;
  if (req.body.lloc.length > 0) lloc = req.body.lloc;
  let dataHora = null;
  if (req.body.hora.length > 0) dataHora = req.body.hora;

  let actuacio = await prisma.actuacio.update({
    where: {
      id: +req.params.id,
    },
    data: {
      nom: req.body.nom,
      //ciutat: { update: { data: { nom: req.body.ciutat } } },
      ciutatId: +req.body.ciutatId,
      lloc: lloc,
      data: req.body.data + "T00:00:00Z",
      dataHora: dataHora,
    },
  });

  res.send({ message: "modifica actuacio" });
};
