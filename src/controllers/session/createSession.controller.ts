import { Request, Response } from "express";
import { ILogin } from "../../interfaces/users";
import { createSessionService } from "../../services/session/createSession.service";
import { AppError, handleError } from "../../errors/appErro";

export const createSessionController = async(req: Request, res: Response) =>{
    try {
        const { email, senha }: ILogin = req.body;

        const token = await createSessionService({ email, senha });
  
        return res.status(200).json({token: token});
        
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}