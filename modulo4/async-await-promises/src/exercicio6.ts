import axios from "axios"
import { baseURL } from "./baseURL";
import { User } from "./types";
import { getSubscribers } from "./exercicio1"

const notifySubscribers = async (subs: User[]): Promise<void> => {
    const request = []
    try {
        for (let item of subs) {
            request.push(
                await axios.post(`${baseURL}/notifications`, {
                    subscriberId: item.id,
                    message: "Noticia nova acrescentada!"
                }))
            await Promise.all(request)
            console.log(`Notificações enviadas.`)
        }
    } catch (error: any) {
        console.log(`Ocorreu um erro ao enviar alguma notificação`)
    }
}


const main = async (): Promise<any> => {
    const response = await getSubscribers()
    await notifySubscribers(response)
}