import axios from "axios"
import { Adress } from "../Types/types"

const baseUrl = "https://viacep.com.br/ws"

export const getAdressInfo = async (cep: string): Promise<any> => {
    try {
        const response = await axios.get(`${baseUrl}/${cep}/json/`)

        const adress: Adress = {
            state: response.data.uf,
            city: response.data.localidade,
            street: response.data.logradouro,
            neighborhood: response.data.bairro
        }
        return adress
    } catch (error) {
        return null
    }


}