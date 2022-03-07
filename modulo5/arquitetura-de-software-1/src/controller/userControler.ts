import { Request, Response } from "express";
import { UserBusiness } from "../business/userBusiness";

export class UserControler {

    async signUp(req: Request, res: Response) {
        try {
            const input = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
                role: req.body.role,
            }

            const token = await new UserBusiness().createUser(input)

            res.status(200).send({ token })
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const loginData = {
                email: req.body.email,
                password: req.body.password
            }

            const token = await new UserBusiness().getUserByEmail(loginData)

            res.status(200).send({ token })
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

    }

    async get(req: Request, res: Response) {
        try {
            const token = req.headers.authorization!

            const users = await new UserBusiness().get(token)

            res.status(200).send(users)
        } catch (error: any) {
            res.send({ message: error.message }).status(error.status);
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const input = {
                id: req.params.id,
                token: req.headers.authorization!
            }

            await new UserBusiness().deleteUser(input)

            res.status(200).send({message: "User has been deleted"})
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }
}