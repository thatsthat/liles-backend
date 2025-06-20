import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "../generated/client";
const prisma = new PrismaClient();

// Handle Post create on POST.
/* const create = async (req: Request, res: Response, next: NextFunction) => {
  const message = await prisma.message.create({
    data: {
      sender: { connect: { id: req.user.id } },
      receiver: { connect: { id: +req.params.rxId } },
      content: req.body.content,
    },
  });
  return res.send(message);
}; */

export const llistaActuacions = async (
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

export const llistaCastells = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const castells = await prisma.castell.findMany({
    orderBy: {
      id: "desc",
    },
  });
  res.send(castells);
};

export const llistaTemporades = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const actuacions = await prisma.actuacio.findMany({
    orderBy: {
      data: "desc",
    },
    select: {
      data: true,
    },
  });
  const anys = actuacions.map(
    (a) => new Date(a.data).toLocaleDateString("en", { year: "numeric" }) //{ year: "2-digit" })
  );
  const temporades = [...new Set(anys)];
  res.send(temporades);
};

export const actuacionsTemporada = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const year = req.params.year;
  var fullYear = "";
  if (year.length === 2) {
    if (year.charAt(0) === "9") fullYear = "19" + year;
    else fullYear = "20" + year;
  } else fullYear = year;
  const actuacions = await prisma.actuacio.findMany({
    where: {
      data: {
        gte: new Date(fullYear + "-01-01"),
        lte: new Date(fullYear + "-12-31"),
      },
    },
    orderBy: {
      data: "asc",
    },
    include: {
      castells: true,
    },
  });
  res.send(actuacions);
};
