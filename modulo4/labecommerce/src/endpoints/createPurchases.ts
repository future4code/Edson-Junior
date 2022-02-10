import { Request, Response } from "express"
import { connection } from "../data/connection"

export const createPurchases = async(
    req: Request,
    res: Response
) => {
    let errorCode = 400
    try {
        const { userId, productId, quantity } = req.body
        
        if (!userId && !productId && !quantity) {
            errorCode = 422
            throw new Error("Please, check inputs for purchase creation!")
        }

        const productPrice: any = await connection("labecommerce_products").select("price").where("id", productId)



        await connection("labecommerce_purchase")
            .insert({
                id: Date.now().toString(),
                user_id: userId,
                product_id: productId,
                quantity: quantity,
                total_price: productPrice[0].price*quantity
            })
        
        res.status(200).send("Purchase has been created!")
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}