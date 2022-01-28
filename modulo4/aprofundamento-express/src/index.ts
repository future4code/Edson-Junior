import express, { request, Request, Response } from "express";

import { AddressInfo } from "net";

const app = express();


app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
    // ex1
    app.get("/ping", (req: Request, res: Response) => {
        res.send("Pong! 🏓")
    })
    // ex2
    type Afazeres =
        {
            userId: number,
            id: number,
            title: string,
            completed: boolean
        }

    // ex3
    const afazeresArray: Afazeres[] = [
        {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false
        },
        {
            userId: 1,
            id: 2,
            title: "quis ut nam facilis et officia qui",
            completed: false
        },
        {
            userId: 1,
            id: 3,
            title: "fugiat veniam minus",
            completed: false
        },
        {
            userId: 2,
            id: 21,
            "title": "suscipit repellat esse quibusdam voluptatem incidunt",
            "completed": false
        },
        {
            userId: 2,
            id: 22,
            title: "distinctio vitae autem nihil ut molestias quo",
            completed: true
        },
        {
            userId: 2,
            id: 23,
            title: "et itaque necessitatibus maxime molestiae qui quas velit",
            completed: false
        }, {
            userId: 3,
            id: 41,
            title: "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
            completed: false
        },
        {
            userId: 3,
            id: 42,
            title: "rerum perferendis error quia ut eveniet",
            completed: false
        },
        {
            userId: 3,
            id: 43,
            title: "tempore ut sint quis recusandae",
            completed: true
        },
    ]
    // ex4
    app.get("/afazeres", (req: Request, res: Response) => {
        const statusConcluido = req.query.completed
        const arrayStatus: Afazeres[] = []

        if (!statusConcluido) {
            res.status(400).send("Não foi enviado o parâmetro  corretamente")
        }
        for (let i = 0; i < afazeresArray.length; i++) {
            if (afazeresArray[i].completed.toString() === statusConcluido) {
                arrayStatus.push(afazeresArray[i])
            }
        }
        res.status(200).send({
            result: arrayStatus
        })
    })
    // ex5
    app.post("/afazeres", (req: Request, res: Response) => {
        const { userId, id, title, completed } = req.body
        if (!req.body) {
            res.status(400).send("Não foi enviado o parâmetro  corretamente")
        }
        const novoAfazeres: Afazeres[] = [...afazeresArray, req.body]
        res.status(200).send({
            result: novoAfazeres
        })
    })

    // ex6
    app.put("/afazeres/:id", (req: Request, res: Response) => {
        const afazerID = Number(req.params.id)

        if (!afazerID) {
            res.status(400).send("Não foi enviado o parâmetro  corretamente")
        }
        for (let i = 0; i < afazeresArray.length; i++) {
            if (afazeresArray[i].id === afazerID) {
                afazeresArray[i].completed = !afazeresArray[i].completed
            }
        }
        res.status(200).send({
            result: afazeresArray
        })
    })
    // ex7

    app.delete("/afazeres/:id", (req: Request, res: Response) => {
        const afazerID = Number(req.params.id)

        if (!afazerID) {
            res.status(400).send("Não foi enviado o parâmetro  corretamente")
        }
        for (let i = 0; i < afazeresArray.length; i++) {
            if (afazeresArray[i].id === afazerID) {
                afazeresArray.splice(i, 1)
            }
        }
        res.status(200).send({
            result: afazeresArray
        })
    })

    // ex8
    app.get("/afazeres/:userId", (req: Request, res: Response) => {
        const usuarioID = Number(req.params.userId)
        const afazerUsuario: Afazeres[] = []
        if (!usuarioID) {
            res.status(400).send("Não foi enviado o parâmetro  corretamente")
        }
        for (let i = 0; i < afazeresArray.length; i++) {
            if (afazeresArray[i].userId === usuarioID) {
                afazerUsuario.push(afazeresArray[i])
            }
        }
        res.status(200).send({
           result: afazerUsuario
        })
    })

    //documentação da API: https://documenter.getpostman.com/view/18385426/UVe9SpW4
});;