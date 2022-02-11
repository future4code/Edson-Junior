import axios from "axios"

const baseUrl = "http://localhost:3003"

export const getUsersPurchasesServices = async (userId: string): Promise<any> => {
    try {
        const response = await axios.get(`${baseUrl}/users/${userId}/purchases/`)

        
        return response.data
    } 
    catch (error: any) {
        return error.message
    }
}