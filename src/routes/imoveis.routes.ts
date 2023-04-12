import { Router } from "express";

export const routes = Router();

import { createImovelController } from "../controllers/imoveis/createImovel.controller";
import { AuthTokenMiddleware } from "../middlewares/authToken.middleware";
import { listImovelController } from "../controllers/imoveis/listImovel.Controller";

const imoveisRoutes = Router();

imoveisRoutes.post("", AuthTokenMiddleware, createImovelController)
imoveisRoutes.get("", AuthTokenMiddleware, listImovelController)

export default imoveisRoutes;