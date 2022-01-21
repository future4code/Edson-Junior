// Exercício 1

// a) ** Responda como comentário no seu código:** como fazemos para acessar os parâmetros passados na linha de comando para o Node ?

// Resposta: atravéz do node

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

// const nome = process.argv[2]
// const idade = process.argv[3]
// const idadeEmSeteAnos = Number(process.argv[3])+Number(7)

// console.log(`Olá ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeEmSeteAnos}`)

// Exercício 2

// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

// const operacao = process.argv[2]
// const numero1 = process.argv[3]
// const numero2 = process.argv[4]

// const resultado = () => {
//     switch (operacao) {
//         case "add":
//             return Number(numero1) + Number(numero2)
//             break
//         case "sub":
//             return Number(numero1) - Number(numero2)
//             break
//         case "mult":
//             return Number(numero1) * Number(numero2)
//             break
//         case "div":
//             return Number(numero1) / Number(numero2)
//             break
//         default:
//             return "Você inseriu uma operação inválida"
//     }
// }


// console.log(`Resposta: ${resultado()}`)

// Exercício 3

// Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve adicionar a nova tarefa em uma variável que represente uma lista de tarefas. A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada.

// const tarefa = process.argv[2]

// const listaTarefas = [
//     "Comprar pão",
//     "Estudar",
//     "Beber água"
// ]

//     listaTarefas.push(tarefa)

// console.log(`Tarefas:${listaTarefas}`)