import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

// Verify Token
export function validateToken(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  var token = "";
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader == "undefined") res.sendStatus(403);
  else {
    const bearer = bearerHeader.split(" ");
    token = bearer[1];
  }
  try {
    const decode = jwt.verify(token, "iepiep");
    if (typeof decode === "object") req.user = decode.user;
    next();
  } catch (err) {
    //.redirect("/login_page");
    res.sendStatus(403);
  }
  return;
}
