import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appErro"
import { deleteImovelService } from "../../services/imoveis/deleteImovel.service"


export const deleteImovelController = async(req: Request, res: Response) =>{
    try {
        const id = req.params.id

        const deletedImovel = await deleteImovelService(id)
        return res.status(204).json("");
    } catch (err) {
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}
