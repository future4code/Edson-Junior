import express, { request, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { usuario, usuarios, extrato } from "./data";


const app = express();
app.use(express.json());
app.use(cors());

app.post("/usuarios", (req: Request, res: Response) => {

    let codigoErro = 400
    try {

        const { nome, cpf, dataDeNascimento } = req.body
        const stringCPF: string = cpf.split(".").join("").split("-").join("");

        function formatarData(data: string) {
            let dia: string = ""
            let mes: string = ""
            let ano: string = ""
            for (let i = 0; i < data.length; i++) {
                if (i < 2) {
                    dia += data[i]
                }
                if (i > 2 && i < 5) {
                    mes += data[i]
                }
                if (i > 5 && i < 10) {
                    ano += data[i]
                }
            }
            return (`${ano}/${mes}/${dia}`)
        }


        if (!nome || !cpf || !dataDeNascimento) {
            codigoErro = 422
            throw new Error("Por gentileza, verifique os campos de entrada para criação da conta.")
        }

        let idadeUsuario = (Date.now() - new Date(formatarData(dataDeNascimento)).getTime()) / 3.1568 * (Math.pow(10, -10))

        if (idadeUsuario < 18) {
            codigoErro = 422
            throw new Error("Para abertura de uma conta você deve ter mais que 18 anos.")
        }

        const novoUsuario: usuario = {
            nome,
            cpf,
            dataDeNascimento,
            saldo: 0,
            extratoDados: []
        }
        if (stringCPF.length !== 11 || isNaN(Number(stringCPF))) {
            codigoErro = 422
            throw new Error("O CPF para criação está incorreto. Por gentileza, verifique se há onze digitos e todos são números")
        }

        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].cpf === cpf) {
                codigoErro = 409
                throw new Error("Não foi possível realizar o seu cadastro. Um usuário já possui o CPF informado.")
            }
        }

        usuarios.push(novoUsuario)
        res.status(201).send("Usuario criado com suceso!")

    } catch (err: any) {
        res.status(codigoErro).send(err.message)
    }
})

app.get("/usuarios", (req: Request, res: Response) => {
    let codigoErro = 500
    try {
        if (!usuarios) {
            throw new Error("Erro na requisição. Por gentileza, tente novamente mais tarde.")
        }
        res.status(200).send(usuarios)
    } catch (err: any) {
        res.status(codigoErro).send(err.message)
    }
})

app.get("/usuarios/:nome/:cpf", (req: Request, res: Response) => {
    let codigoErro = 500

    try {
        const nome: string = req.params.nome as string
        const cpf: string = req.params.cpf as string
        let buscaUsuario: usuario[] | undefined = []
        let isUsuarioFound = false

        const stringCPF: string = cpf.split(".").join("").split("-").join("")

        if (stringCPF.length !== 11 || isNaN(Number(stringCPF))) {
            codigoErro = 422
            throw new Error("O CPF para criação está incorreto. Por gentileza, verifique se há onze digitos e todos são números")
        }

        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].nome === nome && usuarios[i].cpf === cpf) {
                buscaUsuario.push(usuarios[i])
                isUsuarioFound = true
            }
        }

        if (!isUsuarioFound) {
            codigoErro = 404
            throw new Error("Usuário com este nome  e/ou CPF não foi encontrado.")
        }

        if (!usuarios) {
            throw new Error("Erro na requisição. Por gentileza, tente novamente mais tarde.")
        }
        res.status(200).send(buscaUsuario)

    } catch (err: any) {
        res.status(codigoErro).send(err.message)
    }
})

app.put("/deposito", (req: Request, res: Response) => {
    let codigoErro = 400
    try {
        const {nome, cpf, valor} = req.body
        let buscaUsuario: usuario[] | undefined = []

        const hoje = new Date()
        const dia = String(hoje.getDate()).padStart(2, '0')
        const mes = String(hoje.getMonth() + 1).padStart(2, '0')
        const ano = hoje.getFullYear()

        const dataAtual = dia + '/' + mes + '/' + ano

        let isUsuarioFound = false

        const stringCPF: string = cpf.split(".").join("").split("-").join("")

        if (stringCPF.length !== 11 || isNaN(Number(stringCPF))) {
            codigoErro = 422
            throw new Error("O CPF para criação está incorreto. Por gentileza, verifique se há onze digitos e todos são números")
        }

        if (!valor || isNaN(valor)) {
            codigoErro = 422
            throw new Error("Informe um número para depósito.")
        }

        if (valor <= 0) {
            codigoErro = 422
            throw new Error("Informe um número maior que 0 para depósito.")
        }

        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].nome === nome && usuarios[i].cpf === cpf) {
                usuarios[i].saldo += valor
                usuarios[i].extratoDados.push({
                    valor: valor,
                    dataDeTransacao: dataAtual,
                    descricao: "depósito bancário."
                })
                buscaUsuario.push(usuarios[i])
                isUsuarioFound = true
            }
        }

        if (!isUsuarioFound) {
            codigoErro = 404
            throw new Error("Usuário com este nome  e/ou CPF não foi encontrado.")
        }

        if (!usuarios) {
            throw new Error("Erro na requisição. Por gentileza, tente novamente mais tarde.")
        }
        res.status(200).send(buscaUsuario)

    } catch (err: any) {
        res.status(codigoErro).send(err.message)
    }
})

app.put("/pagarConta", (req: Request, res: Response) => {
    let codigoErro = 400
    try {
        // const nome: string = req.body as string
        // const cpf: string = req.body as string
        // const valor: number = req.body
        // const dataVencimento: string = req.body as string
        // const descricao: string = req.body as string
        const { nome, cpf, valor, dataVencimento, descricao } = req.body
        let buscaUsuario: usuario[] | undefined = []

        let isUsuarioFound = false

        const stringCPF: string = cpf.split(".").join("").split("-").join("")

        if (!nome || !cpf || !valor || !dataVencimento || !descricao) {
            codigoErro = 422
            throw new Error("Os dados de pagamento devem ser devidamente preenchidos. Verifique os mesmos.")
        }

        const hoje = new Date()
        const dia = String(hoje.getDate()).padStart(2, '0')
        const mes = String(hoje.getMonth() + 1).padStart(2, '0')
        const ano = hoje.getFullYear()

        const dataAtual = dia + '/' + mes + '/' + ano

        function formatarData(data: string) {
            let dia: string = ""
            let mes: string = ""
            let ano: string = ""
            for (let i = 0; i < data.length; i++) {
                if (i < 2) {
                    dia += data[i]
                }
                if (i > 2 && i < 5) {
                    mes += data[i]
                }
                if (i > 5 && i < 10) {
                    ano += data[i]
                }
            }
            return (`${ano}/${mes}/${dia}`)
        }

        let faturaVencida = (Date.now() - new Date(formatarData(dataVencimento)).getTime()) / 3.1568 * (Math.pow(10, -10))

        if (faturaVencida < 0) {
            codigoErro = 422
            throw new Error("Não é possível realizar o pagamento, pois o prazo de pagamento se encerrou.")
        }

        if (stringCPF.length !== 11 || isNaN(Number(stringCPF))) {
            codigoErro = 422
            throw new Error("O CPF para criação está incorreto. Por gentileza, verifique se há onze digitos e todos são números")
        }

        if (!valor || isNaN(valor)) {
            codigoErro = 422
            throw new Error("Informe o valor da fatura corretamente.")
        }

        if (valor < 0) {
            codigoErro = 422
            throw new Error("O valor da fatura é inválido.")
        }


        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].nome === nome && usuarios[i].cpf === cpf) {
                if (valor > 0 && usuarios[i].saldo < valor) {
                    codigoErro = 422
                    throw new Error("Você não possuí saldo para o pagamento da fatura.")
                }
                usuarios[i].saldo -= valor
                usuarios[i].extratoDados.push({
                    valor: -valor,
                    dataDeTransacao: dataAtual,
                    descricao: descricao
                })
                buscaUsuario.push(usuarios[i])
                isUsuarioFound = true
            }
        }

        if (!isUsuarioFound) {
            codigoErro = 404
            throw new Error("Usuário com este nome  e/ou CPF não foi encontrado.")
        }

        if (!usuarios) {
            throw new Error("Erro na requisição. Por gentileza, tente novamente mais tarde.")
        }
        res.status(200).send(buscaUsuario)

    } catch (err: any) {
        res.status(codigoErro).send(err.message)
    }
})

app.put("/transferencia", (req: Request, res: Response) => {
    let codigoErro = 400
    try {
        const { nome, cpf, valor, nomeDest, cpfDest } = req.body
        let buscaUsuario: usuario[] | undefined = []

        let isUsuarioFound = false
        let isUsuarioDestFound = false
        let isContaFound = false

        const stringCPF: string = cpf.split(".").join("").split("-").join("")

        if (!nome || !cpf || !valor || !nomeDest || !cpfDest) {
            codigoErro = 422
            throw new Error("Os dados para transf}erencia devem ser devidamente preenchidos. Verifique os mesmos.")
        }

        const hoje = new Date()
        const dia = String(hoje.getDate()).padStart(2, '0')
        const mes = String(hoje.getMonth() + 1).padStart(2, '0')
        const ano = hoje.getFullYear()

        const dataAtual = dia + '/' + mes + '/' + ano

        if (stringCPF.length !== 11 || isNaN(Number(stringCPF))) {
            codigoErro = 422
            throw new Error("O CPF para criação está incorreto. Por gentileza, verifique se há onze digitos e todos são números")
        }

        if (!valor || isNaN(valor)) {
            codigoErro = 422
            throw new Error("Informe o valor da fatura corretamente.")
        }

        if (valor < 0) {
            codigoErro = 422
            throw new Error("O um valor maior que zero.")
        }

        for (let i = 0; i < usuarios.length; i++){
            if (usuarios[i].nome === nome && usuarios[i].cpf === cpf) {
                isUsuarioFound = true
            }
            if (usuarios[i].nome === nomeDest && usuarios[i].cpf === cpfDest) {
                isUsuarioDestFound = true
            }
        }

        if (!isUsuarioFound) {
            codigoErro = 404
            throw new Error("Usuário com este nome  e/ou CPF não foi encontrado.")
        }
        if (!isUsuarioDestFound) {
            codigoErro = 404
            throw new Error("Usuário destinatário com este nome  e/ou CPF não foi encontrado.")
        }

        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].nome === nome && usuarios[i].cpf === cpf) {
                if (valor > 0 && usuarios[i].saldo < valor) {
                    codigoErro = 422
                    throw new Error("Você não possuí saldo para a transfêrencia.")
                }
                usuarios[i].saldo -= valor
                usuarios[i].extratoDados.push({
                    valor: -valor,
                    dataDeTransacao: dataAtual,
                    descricao: "Transferência para " +nomeDest + "."
                })
                buscaUsuario.push(usuarios[i])
                
            }
        }

        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].nome === nomeDest && usuarios[i].cpf === cpfDest) {
                usuarios[i].saldo += valor
                usuarios[i].extratoDados.push({
                    valor: valor,
                    dataDeTransacao: dataAtual,
                    descricao: "Transferência recebida de " + nome + "."
                })
                buscaUsuario.push(usuarios[i])
                
            }
        }

        

        if (!usuarios) {
            throw new Error("Erro na requisição. Por gentileza, tente novamente mais tarde.")
        }
        res.status(200).send(buscaUsuario)

    } catch (err: any) {
        res.status(codigoErro).send(err.message)
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