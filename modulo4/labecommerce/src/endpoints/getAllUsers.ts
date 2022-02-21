import { Request, Response } from "express"
import { connection } from "../data/connection"
import { getUsersPurchasesServices } from "../services/getUsersPurchasesService"


export const getAllUsers = async (
    req: Request,
    res: Response
) => {
    try {
        const result = await connection("labecommerce").select()

        for (let i = 0; i < result.length; i++) {
            const purchases = await getUsersPurchasesServices(result[i].id)

            result[i].purchases = purchases

        }



        res.status(200).send({ users: result })
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}