import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "../generated/client";
const { createClient } = require("@supabase/supabase-js");
const prisma = new PrismaClient();

export const crea = [
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(process.env.SUPABASE_URL);
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY
    );
    const fileData = await supabase.storage
      .from("imatges")
      .upload(req.file.originalname, req.file.buffer, {
        cacheControl: "3600",
        upsert: false,
      });

    const urlData = supabase.storage
      .from("odin")
      .getPublicUrl(fileData.data.path);

    var parentData = {};
    if (req.body.parentId) parentData = { connect: { id: +req.body.parentId } };
    await prisma.file.create({
      data: {
        name: req.file.originalname,
        owner: { connect: { id: req.user.id } },
        parent: parentData,
        url: urlData.data.publicUrl,
      },
    });

    console.log(data);

    return res.json({ message: "File saved" });
  },
];

export const llista = async (
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

export const tipus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const castells = await prisma.tipusCastell.findMany({
    select: {
      nomCurt: true,
      id: true,
    },
  });
  res.send(castells);
};

export const detalls = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const castell = await prisma.castell.findUnique({
    where: {
      id: +req.params.id,
    },
  });
  res.send(castell);
};

export const modifica = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.send("modifica castell");
};

export const esborra = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.send("Esborra castell");
};
