import type { Response } from "express";
import jwt from "jsonwebtoken";
import type { Types } from "mongoose";

const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

const generateToken = (res: Response, userId: Types.ObjectId | string): string => {
  const jwtSecret = process.env.JWT_TOKEN;

  if (!jwtSecret) {
    throw new Error("JWT_TOKEN environment variable is not defined");
  }

  const token = jwt.sign({ userId: userId.toString() }, jwtSecret, {
    expiresIn: "7d",
  });

  const isProduction = process.env.NODE_ENV === "production";

  res.cookie("token", token, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "strict" : "lax",
    maxAge: SEVEN_DAYS_MS,
  });

  return token;
};

export default generateToken;