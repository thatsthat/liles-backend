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

const llistaActuacions = async (
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
const llistaCastells = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const actuacions = await prisma.castell.findMany({
    orderBy: {
      id: "desc",
    },
  });
  res.send(actuacions);
};
const privatec = { llistaCastells, llistaActuacions };

export default privatec;
