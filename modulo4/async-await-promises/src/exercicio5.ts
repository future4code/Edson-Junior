import axios from "axios"
import { baseURL } from "./baseURL";
import { User } from "./types";
import  {getSubscribers} from "./exercicio1"

const notifySubscribers = async (subs: User[]): Promise<void> => {
    for (let item of subs) {
        try {
            await axios.post(`${baseURL}/notifications`, {
                subscriberId: item.id,
                message: "Noticia nova acrescentada!"
            })
            console.log(`ID ${item.id} foi notificado`)
        } catch (error) {
            console.log(`Ocorreu um erro ao enviar a notificação ao usuário ${item.id}`)
        }
    }
}

const main = async (): Promise<any> =>{
    const response = await getSubscribers()
    await notifySubscribers(response)
}

