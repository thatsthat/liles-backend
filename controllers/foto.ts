import { Express } from "express";
import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "../generated/client";
import { createClient } from "@supabase/supabase-js";
import {
  PutObjectCommand,
  S3Client,
  UploadPartCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 as uuidv4 } from "uuid";
const prisma = new PrismaClient();

export const crea = async (req: Request, res: Response, next: NextFunction) => {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!
  );

  const R2 = new S3Client({
    endpoint: process.env.R2_ENDPOINT!,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID!,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
    },
    region: "auto",
  });

  let castellId = null;
  if (req.body.castellId.length > 0) castellId = +req.body.castellId;
  const fileName = uuidv4() + ".jpg";
  // Upload to Cloudflare
  const url = await getSignedUrl(
    R2,
    new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: fileName,
      ContentType: "image/jpeg",
    }),
    {
      expiresIn: 60 * 1, // 1 min
    }
  );

  const uploadResponse = await fetch(url, {
    method: "PUT",
    body: new Uint8Array(req.file!.buffer),
    headers: {
      "Content-Type": "image/jpeg",
    },
  });

  console.log(uploadResponse);

  // Upload to Supabase and get URL
  const fileData = await supabase.storage
    .from("imatges")
    .upload(fileName, req.file!.buffer, {
      cacheControl: "3600",
      upsert: false,
      contentType: "image/jpeg",
    });
  const urlData = supabase.storage
    .from("imatges")
    .getPublicUrl(fileData.data!.path);

  const fotoData = {
    nom: fileName,
    autorId: req.user!.id,
    actuacioId: +req.body.actuacioId,
    collaId: +req.body.collaId,
    castellId: castellId,
    url: urlData.data.publicUrl,
  };
  const foto = await prisma.foto.create({
    data: fotoData,
  });

  res.json({ message: "fotos uploaded" });
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
  res.send("modifica castell");
};

export const esborra = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("Esborra castell");
};
