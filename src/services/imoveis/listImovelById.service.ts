import { AppDataSource } from "../../data-source"
import { Imovel } from "../../entities/imovel.entity"


export const listImovelByIdService = async(id: string) =>{
    const imovelRepository = AppDataSource.getRepository(Imovel);
    const imovel = await imovelRepository.findOne({
        where: {
            id
        }
    })
    if(imovel != undefined){
        return imovel
    }
    throw Error("Imovel not found.")
}