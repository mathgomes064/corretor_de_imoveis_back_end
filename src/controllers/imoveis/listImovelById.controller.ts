import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appErro";
import { listImovelByIdService } from "../../services/imoveis/listImovelById.service";

export const listImovelByIdController = async(req: Request, res: Response) =>{
    try {
        const imovelId = req.params.id;

        const imovel = await listImovelByIdService(imovelId);

        return res.send(imovel)
        
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res);
          }
    }
}