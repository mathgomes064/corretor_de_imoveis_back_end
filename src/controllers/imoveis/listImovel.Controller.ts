import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appErro"
import { listImovelService } from "../../services/imoveis/listImovel.service"

export const listImovelController = async(req: Request, res: Response) =>{
    try {
        const imoveis = await listImovelService()

        return res.send(imoveis)
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}