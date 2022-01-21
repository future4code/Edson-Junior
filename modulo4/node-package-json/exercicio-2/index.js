const operacao = process.argv[2]
const numero1 = process.argv[3]
const numero2 = process.argv[4]

const resultado = () => {
    switch (operacao) {
        case "add":
            return Number(numero1) + Number(numero2)
            break
        case "sub":
            return Number(numero1) - Number(numero2)
            break
        case "mult":
            return Number(numero1) * Number(numero2)
            break
        case "div":
            return Number(numero1) / Number(numero2)
            break
        default:
            return "Você inseriu uma operação inválida"
    }
}


console.log(`Resposta: ${resultado()}`)