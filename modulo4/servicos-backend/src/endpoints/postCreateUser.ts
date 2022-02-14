import { Request, Response } from "express"
import { connection } from "../Data/connection"
import { getAdressInfo } from "../services/getAdressInfo"
import { User } from "../Types/types"
import transporter from "../services/mailTransporter"

export const createUser = async (
    req: Request,
    res: Response
) => {
    try {
        const { cep, email, number, complement } = req.body

        const adress = await getAdressInfo(cep)

        if (!adress) {
            throw new Error("Erro na requisição de endereço.")
        }

        const newUser: User = {
            id: Date.now().toString(),
            cep: cep,
            street: adress.street,
            number: number,
            complement: complement,
            neighborhood: adress.neighborhood,
            city: adress.city,
            state: adress.state,
            email: email
        }

        await connection("user_adress")
            .insert({
                id: newUser.id,
                cep: newUser.cep,
                street: newUser.street,
                number: newUser.number,
                complement: newUser.complement,
                neighborhood: newUser.neighborhood,
                city: newUser.city,
                state: newUser.state,
                email: newUser.email
            })

        const info = await transporter.sendMail({
            from: `<${process.env.NODEMAILER_USER}>`,
            to: "g6e8k2i3m1o7e5d9@labenualunos.slack.com",
            subject: "Cadastro de usuário",
            text: "Este é um texto de exemplo",
            html: "<p>Exemplo em HTML</p>"
        })


        res.send({info, message:"Usuario criado com sucesso"})
    } catch (error: any) {
        res.send(error.message)
    }
}