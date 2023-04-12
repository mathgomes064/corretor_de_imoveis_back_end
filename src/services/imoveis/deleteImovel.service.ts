import { AppDataSource } from "../../data-source";
import { Imovel } from "../../entities/imovel.entity";

export const deleteImovelService = async(id: string) =>{
    const imovelRepository = AppDataSource.getRepository(Imovel)

    const imoveis = await imovelRepository.findOneBy({ id })

    if (!imoveis) {
        throw new Error("Imovel not found");
    }

    await imovelRepository.delete(imoveis)

    const deleteImovel = await imovelRepository.findOneBy({ id: id });

    return deleteImovel!
}
