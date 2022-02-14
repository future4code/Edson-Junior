import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import moment from "moment";



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

const getUserByIdPath = async (
    id: string
): Promise<any> => {
    const result = await connection("TodoListUser")
        .select("id", "nickname")
        .where("id", id)
    return result
}

const getAllUsers = async (): Promise<any> => {
    const result = await connection("TodoListUser")
        .select("*")
    return result
}

const getTaskByQuery = async (
    value: string
): Promise<any> => {
    const result = await connection("TodoListTask")
        .select(
            "TodoListTask.id as taskId",
            "TodoListTask.title",
            "TodoListTask.description",
            "TodoListTask.limit_date as limitDate",
            "TodoListTask.creator_user_id as creatorUserId",
            "TodoListTask.status",
            "TodoListUser.nickname as creatorUserNickname"
        )
        .innerJoin(
            'TodoListUser',
            'TodoListTask.creator_user_id',
            'TodoListUser.id'
        )
        .where(function () {
            this.where("TodoListTask.creator_user_id", value).orWhere("TodoListTask.status", value)
        })
    return result[0]
}

const getTaskById = async (
    id: string
): Promise<any> => {
    const result = await connection("TodoListTask ")
        .select(
            "TodoListTask.id as taskId",
            "TodoListTask.title",
            "TodoListTask.description",
            "TodoListTask.limit_date as limitDate",
            "TodoListTask.status",
            "TodoListTask.creator_user_id as creatorUserId",
            "TodoListUser.nickname as creatorUserNickname",
        )
        .innerJoin(
            'TodoListUser',
            'TodoListTask.creator_user_id',
            'TodoListUser.id'
        )
        .where("TodoListTask.id", id)
    return result[0]
}

const getUserByQuery = async (
    value: string,
): Promise<any> => {
    const result = await connection("TodoListUser")
        .select("id", "nickname").where(function () {
            this.where("email", value).orWhere("nickname", value)
        })

    return result
}

const getResponsibleByTaskId = async (
    task_id: string
): Promise<any> => {
    const result = await connection("TodoListResponsibleUserTaskRelation")
        .select(
            "TodoListUser.id",
            "TodoListUser.nickname",
        )
        .innerJoin(
            'TodoListUser',
            'TodoListResponsibleUserTaskRelation.responsible_user_id',
            'TodoListUser.id'
        )
        .where("TodoListResponsibleUserTaskRelation.task_id", task_id)
    return result
}

const getTaskDelayed = async (

): Promise<any> => {
    const result = await connection("TodoListTask")
        .select(
            "TodoListTask.id as taskId",
            "TodoListTask.title",
            "TodoListTask.description",
            "TodoListTask.limit_date as limitDate",
            "TodoListTask.creator_user_id as creatorUserId",
            "TodoListTask.status",
            "TodoListUser.nickname as creatorUserNickname"
        )
        .innerJoin(
            'TodoListUser',
            'TodoListTask.creator_user_id',
            'TodoListUser.id'
        )
        .where(
            "TodoListTask.limit_date", "<", new Date(), "TodoListTask.status", "<>", "done"
        )

    return result
}

app.get("/task/delayed", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const result = await getTaskDelayed()

        res.status(200).send({ tasks: result })
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

app.get("/task/:id/responsible", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const taskId = req.params.id

        if (!taskId) {
            errorCode = 422
            throw new Error("Please, check input for request!")
        }

        const result = await getResponsibleByTaskId(taskId)

        if (result.length === 0) {
            errorCode = 404
            throw new Error("Task not found!")
        }

        res.status(200).send({ users: result })
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

app.get("/user", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const search: string = req.query.search as string

        if (!search) {
            errorCode = 422
            throw new Error("Please, check input for request!")
        }

        const result = await getUserByQuery(search)

        res.status(200).send({ users: result })
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

app.get("/user/:id", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id

        if (id === "all") {
            const result = await getAllUsers()
            res.status(200).send({ users: result })
        } else {
            const result = await getUserByIdPath(id)
            if (!result) {
                errorCode = 404

                throw new Error("User not found!")
            }
            res.status(200).send(result)
        }
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

app.get("/task", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const search: string = req.query.search as string

        if (!search) {
            errorCode = 422
            throw new Error("Please, check input for request!")
        }

        const result = await getTaskByQuery(search)

        let formatDate = moment(result.limitDate, "YYYY-MM-DD").format("DD/MM/YYYY")

        result.limitDate = formatDate

        res.status(200).send({ tasks: result })
    } catch (error: any) {
        res.status(errorCode).status(error.message)
    }
})

app.get("/task/:id", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id

        if (!id) {
            errorCode = 422
            throw new Error("Please, check input for request!")
        }

        const result = await getTaskById(id)

        if (result.length === 0) {
            errorCode = 404
            throw new Error("Task not found!")
        }

        let formatDate = moment(result.limitDate, "YYYY-MM-DD").format("DD/MM/YYYY")


        result.limitDate = formatDate

        result.responsibleUsers = await getResponsibleByTaskId(id)


        res.status(200).send(result)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})


const createUser = async (
    name: string,
    nickname: string,
    email: string
): Promise<any> => {
    await connection("TodoListUser")
        .insert({
            id: new Date().getTime(),
            name: name,
            nickname: nickname,
            email: email
        })
}

const assignResponsible = async (
    task_id: string,
    responsible_user_id: string
): Promise<any> => {
    await connection("TodoListResponsibleUserTaskRelation")
        .insert({
            task_id: task_id,
            responsible_user_id: responsible_user_id
        })
}

app.post("/task/responsible", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { taskId, responsibleUserId } = req.body

        if (!taskId || !responsibleUserId) {
            errorCode = 422
            throw new Error("Please, check inputs to sign responsible")
        }
        await assignResponsible(taskId, responsibleUserId)

        res.status(200).send("Task has been attributed")
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

app.post("/user", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { name, nickname, email } = req.body

        if (!name || !nickname || !email) {
            errorCode = 422
            throw new Error("Please, check inputs for account creation!")
        }

        await createUser(name, nickname, email)

        res.status(200).send("User has been created!")
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }

})

const createTask = async (
    title: string,
    description: string,
    limitDate: string,
    creatorUserId: string
): Promise<any> => {
    await connection("TodoListTask")
        .insert({
            id: new Date().getTime(),
            title: title,
            description: description,
            limit_date: limitDate,
            creator_user_id: creatorUserId
        })
}

app.post("/task", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { title, description, limitDate, creatorUserId } = req.body

        if (!title || !description || !limitDate || !creatorUserId) {
            errorCode = 422
            throw new Error("Please, check inputs for task creation")
        }

        function dateFormat(data: string) {
            let day: string = ""
            let month: string = ""
            let year: string = ""
            for (let i = 0; i < data.length; i++) {
                if (i < 2) {
                    day += data[i]
                }
                if (i > 2 && i < 5) {
                    month += data[i]
                }
                if (i > 5 && i < 10) {
                    year += data[i]
                }
            }
            return (`${year}/${month}/${day}`)
        }

        const isUserFound = await getUserByIdPath(creatorUserId)

        if (!isUserFound) {
            errorCode = 404
            throw new Error("User not found!")
        }

        await createTask(title, description, dateFormat(limitDate), creatorUserId)

        res.status(200).send("Task has been created!")
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

const putUserById = async (
    id: string,
    name: string,
    nickname: string
): Promise<any> => {
    await connection("TodoListUser")
        .update({
            name: name,
            nickname: nickname
        }).where("id", id)

}

const putTodoStatus = async (
    id: string,
    status: string
): Promise<any> => {
    await connection("TodoListTask")
        .update({ status: status })
        .where("id", id)
}

app.get("/task/status/:id", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const taskId = req.params.id
        const { status } = req.body

        if (!status || !taskId) {
            errorCode = 422
            throw new Error("Please, check inputs for change status!")
        }

        await putTodoStatus(taskId, status)

        res.status(200).send("Sucessfuly change!")
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

app.put("/user/edit/:id", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id
        const { name, nickname } = req.body

        if (!name || !nickname) {
            errorCode = 422
            throw new Error("Please, check inputs for account creation!")
        }

        await putUserById(id, name, nickname)

        const result = await getUserByIdPath(id)

        if (!result) {
            errorCode = 404
            throw new Error("User not found!")
        }

        res.status(200).send("User has been updated!")
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