import { hash } from "bcrypt";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErro";
import { IUserUpdate } from "../../interfaces/users";


export const userUpdateService = async(data: IUserUpdate, id: string) =>{
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.findOneBy({id})

    if(!users){
        throw new AppError(409, "User not found")
    }

    if(data.senha){
        const updatedSenha = await hash(data.senha!, 10)
        data.senha = updatedSenha
    }

    await userRepository.update(id, {...data})

    const user = await userRepository.findOneBy({id})

    return user!
}