import { Router } from "express";

export const routes = Router();

import { createSessionController } from "../controllers/session/createSession.controller";

const sessionRoutes = Router();

sessionRoutes.post("", createSessionController)

export default sessionRoutes;