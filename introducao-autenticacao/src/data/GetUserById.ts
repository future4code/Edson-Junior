import { connection } from "./data"


export const getUserById = async (id: string) => {

    const [result] = await connection("User")
        .select("*")
        .where("id", id)

    return result[0]
}