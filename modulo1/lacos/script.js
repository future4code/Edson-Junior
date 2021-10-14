// exercícios de interpretação de código

//1.

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

//O código está realizando um laço de repetição para de o valor de "valor" seja acrescentado em um (inicialmente 0) até que i seja menor que 4 ("i" inicia-se em 0 irá até 4). O resultado impresso será: 10


//2.

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//a) Será impresso 19, 21, 23, 25, 27 e 30
//b) Sim, teria que ser alterado o valor em console.log para lista.indexOf[numero]

//3.
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// Seria impresso:
//"*"
//"**"
//"***"
//"****"

// exercícios de escrita de código
//1.


// const pets = prompt("Quantos bichinhos de estimação você tem?")

// if (pets == 0) {
//     console.log("Que pena, você pode adotar um pet!")
// }
// else {
//     const petsUser = []
//     for (let i = 0; i <= pets; i++){
//         const petsName = prompt("Qual o nome do seu bichinho?")
//         petsUser[i] = petsName
//     }
//     console.log(petsUser)
// }

//2.
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const acessarArray = (arrayOriginal) => {
//     for (let i of arrayOriginal) { //a)
//         console.log(i)
//     }
//     for (let i of arrayOriginal) { //b)
//         console.log(i/10)
//     }
//     for (let i of arrayOriginal) { //c)
//         if (i % 2 === 0) {
//             console.log(`Digitos array pares: ${i}`)
//         }
//     }
//     for (let i of arrayOriginal) { //d)
//         console.log(`O elemento do array índex ${arrayOriginal.indexOf(i)}: ${i}`)
//     }
// }
// const maiorMenor = (arrayOriginal) => {
//     let maior = arrayOriginal[0]
//     let menor  = arrayOriginal[0]
//     for (let i of arrayOriginal) { //e)
//         if (i > maior) {
//             maior = i
//         }
//         if (i < menor) {
//             menor = i
//         }
//     }
//     console.log(`O maior e menor números do array são: ${maior} e ${menor} respectivamente`)
// }

// acessarArray(array)

// maiorMenor(array)

// desafios

//1.
// const jogar = () => {
//     const numeroSecreto = prompt("P1: Informe um número o para que eu possa advinhar")
//     console.log("Vamos jogar!")
//     let tentativas = 0
//     for (let numeroChutado = prompt("P2: Informe um número para tentar advinhar o número do player 1"); Number(numeroChutado) !== Number(numeroSecreto); numeroChutado = prompt("P2: Informe um número para tentar advinhar o número do player 1")) {
        
//         if (Number(numeroChutado) > Number(numeroSecreto)) {
//             console.log(`O número chutado é maior`)
//         }
//         else if (Number(numeroChutado) < Number(numeroSecreto)) {
//             console.log(`O número chutado é menor`)
//         }
//         tentativas = tentativas+1
        
//     }
//     console.log(`Parabéns! Você acertou em ${tentativas}`)
    
// }

// jogar()

//2.

// const jogar = () => {

//     const numeroSecreto =  Math.floor(Math.random() * 101)
//     console.log(numeroSecreto)
//     console.log("Vamos jogar!")
//     let tentativas = 0
//     for (let numeroChutado = prompt("P2: Informe um número para tentar advinhar o número do player 1"); Number(numeroChutado) !== Number(numeroSecreto); numeroChutado = prompt("P2: Informe um número para tentar advinhar o número do player 1")) {
        
//         if (Number(numeroChutado) > Number(numeroSecreto)) {
//             console.log(`O número chutado é maior`)
//         }
//         else if (Number(numeroChutado) < Number(numeroSecreto)) {
//             console.log(`O número chutado é menor`)
//         }
//         tentativas = tentativas+1
        
//     }
//     console.log(`Parabéns! Você acertou em ${tentativas}`)
    
// }

// jogar()
