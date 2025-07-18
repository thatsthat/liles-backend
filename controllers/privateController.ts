import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "../generated/client";
const prisma = new PrismaClient();

const nomsCastell = [
  "Pde4",
  "5de7",
  "4de7",
  "3de7",
  "Pde4cam",
  "4de7p",
  "Pde5",
  "5de6",
  "3de6",
  "4de6p",
  "4de6",
  "4de8",
  "Pd4balcó",
  "3de6s",
  "7de7",
  "2de6",
  "3de7p",
  "Pde5s",
  "3de6p",
  "7de6",
  "Pde4s",
  "3de7s",
  "2de7",
  "3de6sn",
  "4de6n",
  "4de6pn",
  "4de5a",
  "2de5n",
  "4de7n",
  "2de6n",
  "9de6",
  "5de5n",
  "3de5",
  "4de5",
];

const nomsResultats = ["Descarregat", "Carregat", "Intent desmuntat", "Intent"];

export const create = [
  body("nom", "Nom del castell incorrecte").isIn(nomsCastell),
  body("resultat", "Resultat del castell incorrecte").isIn(nomsResultats),
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send(errors.array());
    } else {
      const castell = await prisma.castell.create({
        data: {
          nom: req.body.nom,
          resultat: req.body.resultat,
          actuacioId: req.body.actuacioId,
        },
      });
      return res.send(castell);
    }
  },
];

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

export const resultatsCastells = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const castells = await prisma.castell.findMany({
    select: {
      resultat: true,
    },
  });
  const rCastells = castells.map((c) => c.resultat);
  const resultatsCastells = [...new Set(rCastells)];
  res.send(resultatsCastells);
};
