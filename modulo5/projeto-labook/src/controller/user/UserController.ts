import { Request, Response } from "express";
import UserBusiness, { SignupInputDTO } from "../../business/user/UserBusiness";
import UserBaseDatabase from "../../data/user/UserBaseDatabase";


export default class UserControler {
    private userBusiness: UserBusiness
    constructor() {
        this.userBusiness = new UserBusiness(new UserBaseDatabase())
    }

    signup = async (req: Request, res: Response) => {
        const { name, email, password } = req.body

        const input: SignupInputDTO = {
            name,
            email,
            password
        }

        try {
            const token = await this.userBusiness.signup(input)

            res.status(200).send({message: "Usuário cadastrado com sucesso", token})
        } catch (error: any) {
            if(error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro no signup")
        }
    }
}