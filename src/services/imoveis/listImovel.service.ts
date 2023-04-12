import { AppDataSource } from "../../data-source"
import { Imovel } from "../../entities/imovel.entity"


export const listImovelService = async() =>{
    const imovelRepository = AppDataSource.getRepository(Imovel)

    const imoveis = imovelRepository.find()

    return imoveis
}