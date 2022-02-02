import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());
// ex 1 letra b)
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
  
      return result[0]
  }

app.get("/users/:name", async (req: Request, res: Response) => {
    try {
      const name = req.params.name
  
      const result = await getActorByName(name)
  
      res.status(200).send(result)
    } catch (error) {
      res.status(500).send("Unexpected error")
    }
  })

// ex 1 letra c)

const getCountGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `)
    return result[0][0]
}

app.get("/users/count/:gender", async (req: Request, res: Response) => {
    try {
        const gender = req.params.gender

        const result = await getCountGender(gender)

        res.status(200).send(result)
    } catch (error: any) {
        res.status(500).send("Unexpected error")
    }
})

//ex 2 letra a)

const putSalaryById = async(
    id: string,
    salary: string
): Promise<any> => {
    await connection("Actor")
        .update({
            salary: salary,
        }).where("id", id)
}

app.put("/users/updateSalary/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const { salary } = req.body
    
        await putSalaryById(id, salary)

        res.status(200).send("Successfully update!")
    } catch (error) {
        res.status(500).send("Unexpected error")
    }
})

// ex 2 letra b)

const deleteUserById = async(
    id: string
): Promise<any> => {
    await connection("Actor")
        .delete().where("id", id)
}

app.delete("/users/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        await deleteUserById(id)

        res.status(200).send("User has been deleted!")
    } catch (error) {
        res.status(500).send("Unexpected error")
    }
})

// ex 2 letra c)

const getAvgByGender = async(
    gender: string
): Promise<any> => {
    const result = await connection("Actor")
        .avg("salary as avarages").where("gender", gender)
    return result[0]
}

app.get("/users/avgSalaryGender/:gender", async (req: Request, res: Response) => {
    try {
        const gender = req.params.gender

        const result = await getAvgByGender(gender)

        res.status(200).send(result)
    } catch (error) {
        res.status(500).send("Unexpected error!")
    }
})

// ex 3 letra a)

const getActorById = async(
    id: string
): Promise<any> => {
    const result = await connection("Actor")
        .where("id", id)
    return result[0]
}

app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        const actor = await getActorById(id)

        res.status(200).send(actor)
    } catch (erro) {
        res.status(500).send("Unexpected erro!")
    }
})

// ex 3 letra b)

const getCountByGender = async(
    gender: string
): Promise<any> => {
    const result = await connection("Actor")
        .count(`* as ${gender}`)
        .where("gender", gender)
    return result[0]
}

app.get("/actors/countByGender", async (req: Request, res: Response) => {
    try {
        const gender: string = req.query.gender as string

        const countGender = await getCountByGender(gender)

        res.status(200).send(countGender)
    } catch (error) {
        res.status(500).send("Unexpected error!")
    }
})

// ex 4 letra a)

const putSalaryByIdEx4 = async(
    id: string,
    salary: number
): Promise<any> => {
    await connection("Actor")
        .update({
            salary: salary,
        }).where("id", id)
}

app.put("/actors/updateSalary", async (req: Request, res: Response) => {
    try {
        const { id, salary } = req.body
    
        await putSalaryByIdEx4(id, salary)

        res.status(200).send("Successfully update!")
    } catch (error) {
        res.status(500).send("Unexpected error")
    }
})

//ex 4 letra b)

// respondido no ex ex 2 b)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});