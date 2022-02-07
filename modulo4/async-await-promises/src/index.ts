import express from "express";
import axios from "axios"
import { AddressInfo } from "net";

const app = express();

app.use(express.json());

import knex from "knex";
import dotenv from "dotenv";
import { baseURL } from "./baseURL";
import { User } from "./types";

dotenv.config();

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
});

// ex 1
//a) o endpoint get
//b) c)

// async function getSubscribers(): Promise<any[]> {
//     const response = await axios.get(`${baseURL}/subscribers`);
//     return response.data;
// }

// ex 2
//a)
//b)

// const getSubscribers = async (): Promise<any[]> => {
//     const response = await axios.get(`${baseURL}/subscribers`);
//     return response.data;
// };

// ex 3
//a)sim, pois o retorno da promise estará tipada como user
//b) não é uma boa prática, pois a cada mapeamento do array de return irá devolver um usuário por vez.
//c)

// const getSubscribers = async (): Promise<user[]> => {
//     const response = await axios.get(`${baseURL}/subscribers`);
//     return response.data.map((res: any) => {
//       return {
//         id: res.id,
//         name: res.name,
//         email: res.email,
//       };
//     });
//   };
  


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;