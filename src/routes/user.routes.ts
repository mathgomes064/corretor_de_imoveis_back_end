import { Router } from "express";

export const routes = Router();

import { userCreateController } from "../controllers/users/userCreate.controller";
import { userListController } from "../controllers/users/userList.controller";
import { userListProfileController } from "../controllers/users/userListProfile.controller";
import { AuthTokenMiddleware } from "../middlewares/authToken.middleware";
import { userUpdateController } from "../controllers/users/userUpdate.controller";
import { userDeleteController } from "../controllers/users/userDelete.controller";

const userRoutes = Router();

userRoutes.post("", userCreateController)
userRoutes.get("", userListController)
userRoutes.get("/me", AuthTokenMiddleware, userListProfileController)
userRoutes.patch("/:id", AuthTokenMiddleware ,userUpdateController)
userRoutes.delete("/:id", AuthTokenMiddleware ,userDeleteController)


export default userRoutes;