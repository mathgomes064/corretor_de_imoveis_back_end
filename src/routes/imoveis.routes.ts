import { Router } from "express";

export const routes = Router();

import { createImovelController } from "../controllers/imoveis/createImovel.controller";
import { AuthTokenMiddleware } from "../middlewares/authToken.middleware";
import { listImovelController } from "../controllers/imoveis/listImovel.Controller";
import { listImovelByUserController } from "../controllers/imoveis/listImóvelByUser.controller";
import { updateImovelController } from "../controllers/imoveis/updateImovel.controller";
import { deleteImovelController } from "../controllers/imoveis/deleteImovelController";
import { listImovelByIdController } from "../controllers/imoveis/listImovelById.controller";

const imoveisRoutes = Router();

imoveisRoutes.post("", AuthTokenMiddleware, createImovelController)
imoveisRoutes.get("", AuthTokenMiddleware, listImovelController)
imoveisRoutes.get("/:id", AuthTokenMiddleware, listImovelByIdController)
imoveisRoutes.get("/:id/user", AuthTokenMiddleware, listImovelByUserController)
imoveisRoutes.patch("/:id", AuthTokenMiddleware, updateImovelController)
imoveisRoutes.delete("/:id", AuthTokenMiddleware, deleteImovelController)


export default imoveisRoutes;