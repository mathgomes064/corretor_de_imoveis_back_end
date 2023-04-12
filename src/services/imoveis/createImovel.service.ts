import app from "../../app";
import { AppDataSource } from "../../data-source";
import { Imovel } from "../../entities/imovel.entity";
import { User } from "../../entities/user.entity";
import { IImovelCreate } from "../../interfaces/imoveis";


export const createImovelService = async({status, image, name, description, valor_compra, valor_venda, userId}: IImovelCreate) =>{
    const imovelRepository = AppDataSource.getRepository(Imovel)
    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.findOne({
        where: {id: userId}
    })

    const imovel = new Imovel()
    imovel.status = status
    imovel.image = image
    imovel.name = name
    imovel.description = description
    imovel.valor_compra = valor_compra
    imovel.valor_venda = valor_venda
    imovel.created_at = new Date()
    imovel.user = users!

    imovelRepository.create(imovel)
    await imovelRepository.save(imovel)

    return imovel
}