import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appErro"
import { ILogin } from "../../interfaces/users"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";


export const createSessionService = async({email, senha}: ILogin) =>{
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    const account = users.find((user) => user.email === email)

    if(!account){
        throw new AppError(403, "Wrong email/password")
    }

    if(!bcrypt.compareSync(senha, account.senha)){
        throw new Error("Wrong email/password")
    }

    const token = jwt.sign(
        {email: email},
        String(process.env.JWT_SECRET),
        {expiresIn: "1d"}
    )

    return token
}