import { Router } from "express";

export const routes = Router();

import { userCreateController } from "./controllers/users/userCreate.controller";
import { userListController } from "./controllers/users/userList.controller";

routes.post("/users", userCreateController)
routes.get("/users", userListController)