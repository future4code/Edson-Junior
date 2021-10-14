// exercícios de interpretação

//1.

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza?
//O código verifica se o programa é par

// b) Para que tipos de números ele imprime no console "Passou no teste"?
//Para números pares

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// Para números ímpares

//2.
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima ?
// //    Serve para informar o preço de uma fruta(laranja, maçã, uva e pêra com valores distintos) para o usuário e o restante das frutas com preço de 5

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"` ?
// //2.25

// c) Considere que um usuário queira comprar uma`Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default`(o`break` indicado pelo comentário "BREAK PARA O ITEM c.") ?

// //Seria impresso preco = 5.5 e na outra linha preco = 5

//3.

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo ?
// //A primeira linha do código está solicitando um número para o usuário

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

// //Para 10 a mensagem seria que esse número passou no teste. Para -10 irá ocasionar erro

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

//Sim, pois a váriavel "mensagem" está em um bloco de algoritmos, enquanto que para ser impresso no último console do código acima teria que ser uma variável de escopo global

// exercícios de escrita de código

//1.

// const idade = prompt("Qual a sua idade?")

// if (Number(idade) >= 18) {
//     console.log(`Você pode dirigir`)
// }
// else {
//     console.log(`Você não pode dirigir`)
// }

//2.

// const turnoAluno = prompt("Informe o turno do dia que você estuda. Utilize (M) para matutino, (V) para vespertino e (N) para noturno")

// if (turnoAluno === "M") {
//     console.log(`Bom dia!`)
// }
// else if (turnoAluno === "V") {
//     console.log(`Boa tarde!`)
// }
// else if (turnoAluno === "N") {
//     console.log(`Boa noite!`)
// }
// else {
//     console.log(`Informe um turno válido`)
//}

//3.

// const turnoAluno = prompt("Informe o turno do dia que você estuda. Utilize (M) para matutino, (V) para vespertino e (N) para noturno")

// switch (turnoAluno) {
//     case "M":
//         console.log(`Bom dia!`)
//         break
//     case "V":
//         console.log(`Boa tarde!`)
//         break
//     case "N":
//         console.log(`Boa noite!`)
//         break
//     default:
//         console.log(`Digite um turno válido`)
//         break
// }

//4.
// const generoFilme = prompt("Informe o gênero do filme que você deseja assistir.")
// const precoIngresso = prompt("Qual o preço do ingresso?")
// const opniaoAmiga = prompt("O seu amigo(a) topa assistir o filme?")
// if (generoFilme === "fantasia" && precoIngresso < 15 && opniaoAmiga === "sim") {
//     console.log("Bom filme")
// }
// else {
//     console.log("Escolha outro filme.")
// }

// desafio
//1.

// const generoFilme = prompt("Informe o gênero do filme que você deseja assistir.")
// const precoIngresso = prompt("Qual o preço do ingresso?")
// const opniaoAmiga = prompt("O seu amigo(a) topa assistir o filme?")
// if (generoFilme === "fantasia" && precoIngresso < 15 && opniaoAmiga === "sim") {
//     const lanchinho = prompt("Qual lanche você vai querer? (pipoca, chocolate, doces, etc)")
//     console.log(`Bom filme e aproveite o seu ${lanchinho}`)
// }
// else {
//     console.log("Escolha outro filme.")
// }

//2.

// const comprarIngresso = () => {
//     const nome = prompt("Informe seu nome.")
//     const tipoJogo = prompt("Informe o tipo de jogo.")
//     const etapaJogo = prompt("Informe a etapa do jogo. SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final.")
//     const categoria = prompt("Informe a categoria. pode ser as opções 1, 2, 3 ou 4.")
//     const quantidadeIngresso = prompt("Informe a quantidade de ingressos.")
//     // const dadosIngresso = [nome.toUpperCase(), tipoJogo.toUpperCase(), Number(categoria), Number(quantidadeIngresso)] 
//     let precoIngresso = 0
//     let precoIngressoFinal = 0
//     // switch (tipoJogo.toUpperCase()) {
//     //     case "DO": {
//     switch (etapaJogo.toUpperCase()) {
//     case "SF": {
//         switch (Number(categoria)) {
//             case 1: {
//                 precoIngresso = 1320
//                 break
//             }
//             case 2: {
//                 precoIngresso = 880
//                 break
//             }
//             case 3: {
//                 precoIngresso = 550
//                 break
//             }
//             case 4: {
//                 precoIngresso = 220
//                 break
//             }
//             default:
//                 console.log("Digite uma opção válida")
//         }
//         break
//         }
//     case "DT": {
//         switch (Number(categoria)) {
//             case 1: {
//                 precoIngresso = 660
//                 break
//             }
//             case 2: {
//                 precoIngresso = 440
//                 break
//             }
//             case 3: {
//                 precoIngresso = 330
//                 break
//             }
//             case 4: {
//                 precoIngresso = 170
//                 break
//             }
//             default:
//                 console.log("Digite uma opção válida")
//         }
//         break
//         }
//     case "FI": {
//         switch (Number(categoria)) {
//             case 1: {
//                 precoIngresso = 1980
//                 break
//             }
//             case 2: {
//                 precoIngresso = 1320
//                 break
//             }
//             case 3: {
//                 precoIngresso = 880
//                 break
//             }
//             case 4: {
//                 precoIngresso = 330
//                 break
//             }
//             default:
//                 console.log("Digite uma opção válida")
//         }
//         break
//     }
//     default:
//         console.log("Digite uma opção válida")
//     }
//     switch (tipoJogo.toUpperCase()) {
//     case "DO": {
//             precoIngressoFinal = precoIngresso * quantidadeIngresso
//             break
//     }
//     case "IN": {
//             precoIngresso *= 4.1
//             precoIngressoFinal = precoIngresso * quantidadeIngresso
//             break
//     }  
//     default:
//         console.log("Digite uma opção válida")
//     }
//     console.log(`
//     ---Dados da compra--- 
//     Nome do cliente:  ${nome.toLocaleUpperCase()} 
//     Tipo do jogo:  ${tipoJogo.toUpperCase()}
//     Etapa do jogo:  ${etapaJogo.toLocaleUpperCase()} 
//     Categoria:  ${categoria}
//     Quantidade de Ingressos:  ${quantidadeIngresso} ingressos 
//     ---Valores--- 
//     Valor do ingresso:  R$ ${precoIngresso}
//     Valor total:  R$ ${precoIngressoFinal}`)
// }
// comprarIngresso()


