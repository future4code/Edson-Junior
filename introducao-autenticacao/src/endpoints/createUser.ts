import { Request, Response } from "express";
import { connection } from "../data/data";
import { idGenerator } from "../services/idGenerator";
import { generateToken } from "../services/tokenGenerator";


export const createUser = async (req: Request, res: Response) => {
    try {

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }


        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password");
        }

        const userData = {
            email: req.body.email,
            password: req.body.password,
        };

        const id = idGenerator();


        await connection("User").insert({
            id: id,
            email: userData.email,
            password: userData.password
        })


        const token = generateToken({
            id,
        });

        res.status(200).send({
            token,
        });
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
}