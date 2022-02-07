import axios from "axios"
import { baseURL } from "./baseURL";// ex 3
import { User } from "./types";
//a)sim, pois o retorno da promise estará tipada como user
//b) não é uma boa prática, pois a cada mapeamento do array de return irá devolver um usuário por vez.
//c)

const getSubscribers = async (): Promise<User[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email,
        }
    })
}

const main = async (): Promise<void> => {
    try {
        const response = await getSubscribers()
        console.log(response)
    } catch (error) {
        console.log("erro")
    }
}

main()