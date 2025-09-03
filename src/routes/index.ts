import { Router, Request, Response } from "express";

export const router = Router();

router.get("/health", (_req: Request, res: Response) => {
  res.json({ ok: true, env: process.env.NODE_ENV || "dev" });
});
