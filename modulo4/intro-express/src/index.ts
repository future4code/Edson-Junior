import express from "express";

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
    //ex1
    app.get("/", (req, res) => {
        res.send("Hello from Express")
    })
    //ex2
    type usuario = {
        id: number,
        name: string,
        phone: string,
        email: string,
        website: string,
    }
    //ex3
    const usuarios: usuario[] = [
        {
            id: 1,
            name: 'Usuario1',
            phone: '11111-11111',
            email: 'usuario1@usuario1.com',
            website: 'www.usuario1.com',
        },
        {
            id: 2,
            name: 'Usuario2',
            phone: '22222-2222',
            email: 'usuario2@usuario2.com',
            website: 'www.usuario2.com',
        },
        {
            id: 3,
            name: 'Usuario3',
            phone: '33333-3333',
            email: 'usuario3@usuario3.com',
            website: 'www.usuario3.com',
        },
    ]
    //ex4
    app.get("/usuarios", (req, res) => {
        const getUsuarios = usuarios.map((usuario) => {
            return usuario
        })
        res.status(200).send(getUsuarios)
    })
    //ex5
    type Post = {
        userId: number,
        id: number
        title: string,
        body: string
    }
    //ex6

    const posts: Post[] = [
        {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            userId: 1,
            id: 2,
            title: "qui est esse",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            userId: 2,
            id: 11,
            title: "et ea vero quia laudantium autem",
            body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
        },
        {
            userId: 2,
            id: 12,
            title: "in quibusdam tempore odit est dolorem",
            body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
        },
        {
            userId: 3,
            id: 21,
            title: "asperiores ea ipsam voluptatibus modi minima quia sint",
            body: "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
        },
        {
            userId: 3,
            id: 22,
            title: "dolor sint quo a velit explicabo quia nam",
            body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
        },
    ]
    //ex7
    app.get("/posts", (req, res) => {
        const getPosts = posts.map((post) => {
            return post
        })
        res.status(200).send(getPosts)
    })
    // ex8

    app.get("/posts/:id", (req, res) => {
        const postId = Number(req.params.id)

        if (!postId) res.status(400).send("Não há id informado para realizar a requisição")

        const Posts: Post[] = posts.filter((posts) => {
            return posts.userId === postId
        })
        res.status(200).send(Posts)
    })
});;