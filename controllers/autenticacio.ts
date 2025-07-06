import jwt from "jsonwebtoken";
import { body, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import { PrismaClient } from "../generated/client";
import { Request, Response, NextFunction } from "express";
const prisma = new PrismaClient();

// Handle Post create on POST.
export const signup = [
  // Validate and sanitize fields.
  body("email", "Please provide a valid email address.")
    .trim()
    .isLength({ min: 1 })
    .isEmail()
    .escape(),
  body("email").custom(async (value) => {
    if (value) {
      const user = await prisma.usuari.findUnique({
        where: {
          correu: value,
        },
      });

      if (user) {
        throw new Error("Email address already in use");
      }
    }
  }),
  body("password", "Please provide a password.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("name", "Please provide a name for the user")
    .trim()
    .isLength({ min: 1 })
    .escape(),

  // Process request after validation and sanitization.
  async (req: Request, res: Response, next: NextFunction) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // There are errors.
      res.status(400).json({ error: errors.array()[0].msg });
    } else {
      // Signup data is valid. Proceed with signup
      try {
        bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
          if (typeof hashedPassword === "string") {
            await prisma.usuari.create({
              data: {
                nom: req.body.name,
                correu: req.body.email,
                contrassenya: hashedPassword,
              },
            });
          }
        });
        res.json("Sign Up Completed!");
      } catch (err) {
        next(err);
      }
    }
  },
];

export const login = [
  // Validate and sanitize fields.
  body("email", "Please provide an email and password")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("password", "Please provide an email and password")
    .trim()
    .isLength({ min: 1 })
    .escape(),

  // Process request after validation and sanitization.
  async (req: Request, res: Response, next: NextFunction) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ error: errors.array()[0].msg });
    } else {
      // Data from form is valid. Proceed with authentication
      next();
    }
  },
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await prisma.usuari.findUnique({
        where: {
          correu: req.body.email,
        },
      });

      if (!user) {
        res.status(403).json({ error: "Incorrect username" });
      }
      var match = false;
      if (user) {
        match = await bcrypt.compare(req.body.password, user.contrassenya);
      }
      if (!match) {
        // passwords do not match!
        res.status(403).json({ error: "Incorrect password" });
      } else {
        const tokn = jwt.sign(
          { user },
          "iepiep",
          { expiresIn: "3600s" },
          (err, token) => {
            res.json({
              token,
            });
          }
        );
      }
    } catch (err) {
      next(err);
    }
  },
];
