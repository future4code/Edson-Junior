import { connection } from "./data"


export const getUserByEmail = async (email: string) => {

    const [result] = await connection("User").where("email", email)

    return result
}

