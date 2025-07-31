import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "../generated/client";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";
const prisma = new PrismaClient();

export const crea = async (req: Request, res: Response, next: NextFunction) => {
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
  );

  const results = await Promise.all(
    req.files.map(async (file) => {
      const fileName = uuidv4() + ".jpg";
      const fileData = await supabase.storage
        .from("imatges")
        .upload(fileName, file.buffer, {
          cacheControl: "3600",
          upsert: false,
          contentType: "image/jpeg",
        });
      const urlData = supabase.storage
        .from("imatges")
        .getPublicUrl(fileData.data.path);
      const fotoData = {
        nom: fileName,
        autorId: req.user.id,
        actuacioId: +req.body.actuacioId,
        collaId: +req.body.collaId,
        castellId: +req.body.castellId,
        url: urlData.data.publicUrl,
      };
      const foto = await prisma.foto.create({
        data: fotoData,
      });
    })
  );
  return res.json({ message: "fotos uploaded" });
};

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
