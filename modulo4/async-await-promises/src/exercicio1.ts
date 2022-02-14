import axios from "axios"
import { baseURL } from "./baseURL";

// ex 1
//a) o endpoint get
//b) c)

export async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
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