import { Router } from "express";
import { createSessionController } from "../controllers";
import { loginSchema } from "../schemas";
import { ensureDataIsValidMiddleware } from "../middlewares";

const loginRoutes: Router = Router();

loginRoutes.post(
  "",
  ensureDataIsValidMiddleware(loginSchema),
  createSessionController
);

export { loginRoutes };
