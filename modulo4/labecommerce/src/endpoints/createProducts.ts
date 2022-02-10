import { Request, Response } from "express"
import { connection } from "../data/connection"

export const createProducts = async(
    req: Request,
    res: Response
) => {
    let errorCode = 400
    try {
        const {name, price, imgUrl} = req.body

        if (!name && !price && !imgUrl) {
            errorCode = 422
            throw new Error("Please, check inputs for product creation!!")
        }

        await connection("labecommerce_products")
            .insert({
                id: Date.now().toString(),
                name: name,
                price: price,
                image_url: imgUrl
            })
        
        res.status(200).send("Product has been created!")
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}