import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appErro"
import { userDeleteService } from "../../services/users/userDelete.service"

export const userDeleteController = async(req: Request, res: Response) =>{
    try {
        const id = req.params.id

        await userDeleteService(id)
        return res.status(204).json({message: "Usuário deletado"});
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}