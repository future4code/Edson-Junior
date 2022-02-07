import axios from "axios"
import { baseURL } from "./baseURL";
import { News } from "./types";

//a) a função é um put, pois não retorna um body

const news: News = {
    title: "Qual é o melhor para emagrecer? Elíptico, esteira ou bicicleta?",
    content: "Quer saber mais sobre meu programa Personal Online? Entre no link abaixo que te explico tudo, acesse: http://treinocaion.com.br/personalonline",
    date: Date.now()    
}

const createNews = async (news: News): Promise<void> => {
    return await axios.put(`${baseURL}/news`, news)
}

const main = async (): Promise<void> => {
    try {
        const response = await createNews(news)
        console.log(response)
    } catch (error) {
        console.log("erro")
    }
}

main()