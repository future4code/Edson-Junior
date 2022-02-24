import { Request, Response } from "express";
import { UserDatabase } from "../data/userDatabase";
import { HashManager } from "../services/HashManager";
import { jsonWebToken } from "../services/JsonWebToken";


export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }

        const database = new UserDatabase()

        const [user] = await database.getUserByEmail(email)

        const passwordIsCorrect: boolean = user && new HashManager().compareHash(password,user.password)

        if (!user || !passwordIsCorrect) {
            throw new Error("Invalid password");
        }


        const token = new jsonWebToken().tokenGenerate(user.id, user.role)

        res.status(200).send({
            token,
        });
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
};