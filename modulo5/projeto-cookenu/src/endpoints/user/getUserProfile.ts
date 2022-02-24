import { Request, Response } from "express";
import { UserDatabase } from "../../data/user/userDatabase";
import { User } from "../../entities/users/users";
import { jsonWebToken } from "../../services/JsonWebToken";

export const getUserProfile = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;
        
        const tokenData = new jsonWebToken().getData(token);

        if (!tokenData) {
            res.statusCode = 401
            res.statusMessage = "Invalid token or not inputed"
            throw new Error("Invalid token or not inputed")
        }
        
        console.log(tokenData)
        if (tokenData.role !== "NORMAL") {
            res.statusCode = 403
            res.statusMessage = "This user is anauthorized."
            throw new Error("Unauthorized user.")
        }

        const database = new UserDatabase()

        const [user] = await database
            .getUserById(tokenData.id)

        res.status(200).send({
            id: user.id,
            email: user.email,
        })
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        })
    }
}