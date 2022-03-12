import { Request, Response } from "express";
import { UserDatabase } from "../../data/user/userDatabase";
import { HashManager } from "../../services/HashManager";
import { jsonWebToken } from "../../services/JsonWebToken";

export const changePassword = async(
    req: Request,
    res: Response
) => {
    try {
        if (!req.headers.authorization) {
            throw new Error("Please, login for request a recipe.")
        }

        const userId = new jsonWebToken().getData(req.headers.authorization)

        if (!userId) {
            throw new Error("User not found.")
        }

        if (!req.body.password) {
            throw new Error("Password input is empty")
        }

        const cypherPassword = new HashManager().generateHash(req.body.password) 

        await new UserDatabase().changePassword(userId.id, cypherPassword)
        res.status(200).send("Password has been changed.")
    } catch (error: any) {
        res.status(200).send(error.message)
    }
}