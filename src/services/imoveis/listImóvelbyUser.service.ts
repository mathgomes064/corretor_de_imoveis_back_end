import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErro";


export const listImovelByUserService = async(userId: string) =>{
    const userRepository = AppDataSource.getRepository(User)

    const imoveis = await userRepository.findOne({
        where: {id: userId},
        relations: {
            imoveis: true,
        }
    })

    if (!imoveis) {
        throw new AppError(404, "Property doesnot exist");
    }

    return imoveis.imoveis
}