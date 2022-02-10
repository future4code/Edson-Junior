import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllProducts = async (
    req: Request,
    res: Response
) => {
    try {
        let order: string = req.query.order as string
        let sort: string = req.query.sort as string
        let search: string = req.query.search as string

        if (sort !== "name") {
            sort = "name"
        }

        if (!order) {
            order = ""
        }

        if (!search) {
            search = ""
        }

        const result = await connection("labecommerce_products")
            .select()
            .where("name", "like", `%${search}%`)
            .orderBy(sort, order)

        res.status(200).send({ products: result })
    } catch (error: any) {
        res.status(500).send("Internal server error!")
    }
}