import { Request, Response } from "express";
import { userCreateService } from "../../services/users/userCreate.service";
import { IUserCreate } from "../../interfaces/users";

export const userCreateController = async(req: Request, res: Response) =>{
    try {
        const {name, email, senha, contato} = req.body;

        const newUser = await userCreateService({name, email, senha, contato} as IUserCreate)

        return res.status(201).send(newUser)
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).send({
                "error": error.name,
                "message": error.message
            })
        }
    }
}