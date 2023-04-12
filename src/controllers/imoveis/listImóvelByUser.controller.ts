import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appErro";
import { listImovelByUserService } from "../../services/imoveis/listImóvelbyUser.service";

export const listImovelByUserController = async(req: Request, res: Response) =>{
    try {
        const userId = req.params.id

        const imoveis = await listImovelByUserService(userId)

        return res.status(200).json(imoveis);
        
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res);
          }
    }
}