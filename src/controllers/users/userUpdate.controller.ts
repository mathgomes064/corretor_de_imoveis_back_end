import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appErro"
import { userUpdateService } from "../../services/users/userUpdate.service"

export const userUpdateController = async(req: Request, res: Response) =>{
    try {
        const user = req.body
        const id = req.params.id

        const updateUser = await userUpdateService(user, id);

        return res.json({ message: "Updated user", updateUser });
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}