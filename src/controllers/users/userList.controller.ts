import { Request, Response } from "express";
import { userListService } from "../../services/users/userList.service";

export const userListController = async(req: Request, res: Response) =>{
    try {
        const users = await userListService();

        return res.send(users)
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).send({
                "error": error.name,
                "message": error.message
            })
        }
    }
}