import { Request, Response } from "express"
import { connection } from "../data/connection"


export const createUsers = async (
    req: Request,
    res: Response
) => {
    let errorCode = 400
    try {
        const { name, email, password } = req.body

        if (!name && !email && !password) {
            errorCode = 422
            throw new Error("Please, check inputs for account creation!")
        }

        await connection("labecommerce")
            .insert({
                id: Date.now().toString(),
                name: name,
                email: email,
                password: password
            })

        res.status(200).send("User has been created!")
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}