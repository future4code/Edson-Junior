import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllUserPurchases = async(
    req: Request,
    res: Response
) => {
    let errorCode = 400
    try {
        const userId = req.params.userId

        if (!userId) {
            errorCode = 422
            throw new Error("Please, check input for request user's purchases!")
        }

        const result = await connection("labecommerce_purchase")
            .select()
            .where("user_id", userId)
        
        res.status(200).send(result)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}