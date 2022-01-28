import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { User, users, UserType } from './data';


const app: Express = express();

app.use(express.json());
app.use(cors());
// ex1
// *a. Qual método HTTP você deve utilizar para isso?*
// Método get
// *b. Como você indicaria a **entidade** que está sendo manipulada?*
// a entidade users
// app.get("/users", (req: Request, res: Response) => {
//     try {
//         res.status(200).send(users)
//     } catch (error) {

//     }

// })

// ex2
// *a.* Como você passou os parâmetros de type para a requisição? Por quê?
// foi passado via query por se tratar de uma requisição get
// b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?
// usando o type como um enum com apenas valores esperados

// app.get("/users", (req: Request, res: Response) => {
//     let errorCode = 400
//     let type: UserType = req.query.type as UserType
//     try {
//          if (!type) {
//             errorCode = 422
//             throw new Error("Por gentileza, verifique o tipo de usuário que deseja encontrar.")
//         }
//         const searchType: User[] = users.filter((user) => user.type === type.toUpperCase())

//         if (type.toUpperCase() !== UserType.ADMIN && type.toUpperCase() !== UserType.NORMAL) {
//             errorCode = 422
//             throw new Error("Tipo de pessoa não é válido")
//         }
//         res.status(200).send(searchType)
//     } catch (error: any) {
//         res.status(errorCode).send(error.message)
//     }

// })

// ex3

// Vamos agora praticar o uso de buscas mais variáveis. Faça agora um endpoint de busca que encontre um usuário buscando ****por **nome**.

// *a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?*
// query
// b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.
//

app.get("/users", (req: Request, res: Response) => {
    let errorCode = 400
    let name: string = req.query.name as string
    let isNameFound = false
    let searchName: User[] = []
    try {
        if (!name) {
            errorCode = 422
            throw new Error("Por gentileza, verifique o nome que deseja encontrar.")
        }
        for (let i = 0; i < users.length; i++) {
            if (users[i].name.toUpperCase() === name.toUpperCase()) {
                searchName.push(users[i])
                isNameFound = true
            }
        }

        if (!isNameFound) {
            errorCode = 404
            throw new Error("A pessoa a qual você busca informações não foi encontrada.")
        }
        res.status(200).send(searchName)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }

})

// ex4
// Fizemos algumas buscas no nosso conjunto de itens, agora é hora de **adicionar** coisas. Comecemos criando um usuário na nossa lista. Crie um endpoint que use o método `POST` para adicionar um item ao nosso conjunto de usuários.

// a. Mude o método do endpoint para `PUT`. O que mudou?
//a requsição teve o mesmo funcionamento
// b. Você considera o método `PUT` apropriado para esta transação? Por quê?
// usar o método put não é uma boa pratica para esta função, pois ela é mais utilizada para alterar dados pontuais do objeto

app.put("/users", (req: Request, res: Response) => {
    let errorCode = 400

    try {

        const { id, name, email, type, age } = req.body

        if (!id || !name || !email || !type || !age) {
            errorCode = 422
            throw new Error("Está faltando um dado do usuário")
        }

        users.push({ id, name, email, type, age })

        res.status(200).send(users)

    } catch (error: any) {

        res.status(errorCode).send(error.message)

    }
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});