import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import { router as routes } from "./routes/index.js";

export function buildApp(): Application {
  const app = express();

  app.use(express.json());
  app.use(morgan("dev"));

  app.use("/api", routes);

  // error handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err);
    res.status(err.status || 500).json({
      error: "Internal Server Error",
      message: err.message || "unexpected",
    });
  });

  return app;
}
