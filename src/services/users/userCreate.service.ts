import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErro";
import { IUserCreate } from "../../interfaces/users";
import bcrypt from "bcrypt";

export const userCreateService = async({name, email, senha, contato}: IUserCreate) => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()
    
    const emailAlreadyExists = users.find(user => user.email === email)

    if(emailAlreadyExists){
        throw new AppError(409, "Email Already Exists")
    }

    const user = new User()
    user.name = name,
    user.email = email,
    user.senha = bcrypt.hashSync(senha, 10),
    user.contato = contato,
    user.created_at = new Date()

    userRepository.create(user)
    await userRepository.save(user)

    return user
}