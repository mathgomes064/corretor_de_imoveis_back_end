import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appErro";
import { updateImovelService } from "../../services/imoveis/updateImovel.service";

export const updateImovelController = async(req: Request, res: Response) =>{
    try {
        const imovel = req.body
        const id = req.params.id
        
        const updateImovel = await updateImovelService(imovel, id)

        return res.json({message: "Updated Imovel", updateImovel})
        
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}