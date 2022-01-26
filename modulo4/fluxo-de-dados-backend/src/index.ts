import express, { Request, Response } from "express";
import { pokemons, pokemon } from "./data";
import { AddressInfo } from "net";


const app = express();
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
   //  ex1
   app.get("/test", (req: Request, res: Response) => {
      res.send("Está tudo  funcionando!")
   })
   // ex3 e 7
   app.post("/createpokemons", (req: Request, res: Response) => {
      try {
         const { name, price } = req.body

         if (!name || !price) {
            throw new Error("Não foi enviado o parâmetro  corretamente")
         } else if (typeof name !== "string") {
            throw new Error("O nome do pokemon deve ser informado via string")
         } else if (typeof price !== "number") {
            throw new Error("O preço de seu pokémon deve ser um número")
         } else if (price <= 0) {
            throw new Error("O preço de seu pokemon deve ser maior que 0")
         }
         for (let i = 0; i < pokemons.length; i++) {
            if (pokemons[i].name === name) {
               throw new Error("Pokémon já está cadastrado")
            }
         }
         pokemons.push({
            id: (Number(pokemons[(pokemons.length - 1)].id) + 1).toString(),
            name,
            price
         })
         res.status(201).send({ result: pokemons })
      } catch (error: any) {
         switch (error.message) {
            case "Não foi enviado o parâmetro  corretamente":
               res.statusCode = 422
               break
            case "Pokémon já está cadastrado":
               res.statusCode = 409
               break
            case "O nome do pokemon deve ser informado via string":
               res.status(422)
               break
            case "O preço de seu pokémon deve ser um número":
               res.status(422)
               break
            case "O preço de seu pokemon deve ser maior que 0":
               res.status(422)
            default:
               res.statusCode = 500
         }
      }
   })

   // ex4
   app.get("/pokemons", (req: Request, res: Response) => {
      try {
         res.status(200).send({ result: pokemons })
      } catch (error) {
         res.statusCode = 422
      }
   })
   // ex5 e 8
   app.put("/pokemons/:id", (req: Request, res: Response) => {
      try {
         const newPrice = Number(req.body.price)
         const pokemonId: any = req.params.id
         let isPokemon = false
         if (!newPrice && newPrice !== 0) {
            throw new Error("Não foi informado um valor para alteração de preço")
         } else if (typeof newPrice !== "number") {
            throw new Error("O preço de seu pokémon deve ser um número")
         } else if (newPrice <= 0) {
            throw new Error("O preço de seu pokemon deve ser maior que 0")
         }

         for (let i = 0; i < pokemons.length; i++) {
            if (pokemons[i].id === pokemonId) {
               pokemons[i].price = newPrice
               isPokemon = true
            }
         }
         if (!isPokemon) {
            throw new Error("Pokemon não encontrado")
         }
         res.status(200).send({ result: pokemons })
      } catch (error: any) {
         switch (error.message) {
            case "Não foi informado um valor para alteração de preço":
               res.status(422)
               break
            case "O preço de seu pokémon deve ser um número":
               res.status(422)
               break
            case "O preço de seu pokemon deve ser maior que 0":
               res.status(422)
               break
            case "Pokemon não encontrado":
               res.status(404)
            default:
               res.status(500)
         }
         res.send(error.message)
      }
   })

   // ex6 e 9

   app.delete("/pokemons/:id", (req: Request, res: Response) => {
      try {
         const pokemonId = req.params.id
         let isPokemon = false

         for (let i = 0; i < pokemons.length; i++) {
            let index = pokemons.findIndex((item) => item.id === pokemonId)
            if (index > -1) {
               pokemons.splice(index, 1)
               isPokemon = true
            }
         }
         if (!isPokemon) {
            throw new Error("Pokemon não encontrado")
         }
         res.status(200).send({ result: pokemons })
      } catch (error: any) {
         switch (error.message) {
            case "Pokemon não encontrado":
               res.status(404)
            default:
               res.status(500)
         }
         res.send(error.message)
      }
   })
})