import { Request, Response } from "express";
import { userListService } from "../../services/users/userList.service";
import { AppError, handleError } from "../../errors/appErro";

export const userListController = async(req: Request, res: Response) =>{
    try {
        const users = await userListService();

        return res.send(users)
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res);
          }
    }
}