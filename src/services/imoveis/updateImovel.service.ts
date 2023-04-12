import { AppDataSource } from "../../data-source";
import { Imovel } from "../../entities/imovel.entity";
import { AppError } from "../../errors/appErro";
import { IImovelUpdate } from "../../interfaces/imoveis";


export const updateImovelService = async({status, name, description, valor_compra, valor_venda}: IImovelUpdate, id: string) =>{
    const imovelRepository = AppDataSource.getRepository(Imovel)

    const imoveis = await imovelRepository.findOneBy({id})

    if(!imoveis){
        throw new AppError(409, "imovel not found");
    }

    await imovelRepository.update(id, {...{status, name, description, valor_compra, valor_venda}})

    const imovel = await imovelRepository.findOneBy({id})

    return imovel
}