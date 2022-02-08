import { Request, Response } from "express"
import { title } from "process"
import { connection } from "../data/connection"
import { recipe } from "../types"

export async function getAllUsers(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const name = req.query.name
        const type = req.query.type
        let sort = req.query.sort
        let order: string = req.query.order as string
        let page = Number(req.query.page)
        
        if (page < 1 || isNaN(page)) {
            page = 1
        }
        let size = 5
        let offset = size * (page - 1)


        if (sort !== "name" && sort !== "type") {
            sort = "name"
        }

        if (order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
            order = "ASC"
        }
console.log(offset)
        const result = await connection("aula48_exercicio")
            .where('name', 'like', `%${name}%`)
            .orWhere('type', 'like', `%${type}%`)
            .orderBy(sort, order)
            .limit(size)
            .offset(offset)

        const names = result.map(toUser)

        res.status(200).send(names)

    } catch (error) {
        res.status(500).send("Internal server error")
    }
}

const toUser = (input: any): recipe => {
    return {
        id: input.id,
        name: input.name,
        email: input.email,
        type: input.type
    }
}