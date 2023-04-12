import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";


export const userListService = async() => {
    const userRepository = AppDataSource.getRepository(User);
    const users = userRepository.find()

    return users
}