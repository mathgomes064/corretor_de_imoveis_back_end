import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appErro"
import { IImovelCreate } from "../../interfaces/imoveis"
import { createImovelService } from "../../services/imoveis/createImovel.service"

export const createImovelController = async(req: Request, res:Response) =>{
    try {
        const imovel: IImovelCreate = req.body

        const newImovel = await createImovelService(imovel)
        
        return res.status(201).send(newImovel)
        
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}