import { Request, Response } from "express";
import { UserDatabase } from "../data/userDatabase";
import { User } from "../entities/users";
import { HashManager } from "../services/HashManager";
import { idGenerator } from "../services/idGenerator";
import { jsonWebToken } from "../services/JsonWebToken";


export const createUser = async (req: Request, res: Response) => {
    try {

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }


        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password");
        }

        const id: string = new idGenerator().generateId()

        const cypherPassword = new HashManager().generateHash(req.body.password) 

        const userData = new User(
            id,
            req.body.name,
            req.body.email,
            req.body.role,
            cypherPassword
        )

        const database = new UserDatabase()
        await database.createUser(userData)


        const token = new jsonWebToken().tokenGenerate(id, userData.getRole())

        res.status(200).send({
            token,
        });
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
}