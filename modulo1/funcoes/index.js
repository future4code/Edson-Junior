// exercicios de intespretação de código

// 1.

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// minhaFuncao(2)
// minhaFuncao(10)

// // a) será impresso 10 e 50 respectivamente
// // b) não iria acontecer nada pois a função não foi invocada

// 2.

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a) Essa função recebe um texto inserido pelo usuário,irá verifica se há a palavra "cenoura" no texto inserido

// b)
//i) eu gosto de cenoura true
//ii) cenoura é bom para vista true
// iii) cenouras crescem na terrra

// exercícios de escrita de código

// 1.
//a)
// const informacoes = (frase) => {
//     console.log("Eu me chamo Edson, tenho 25 anos, moro em São Paulo e sou estudante")
// }

// console.log(informacoes())

// b)

// const informar = (nome, idade, cidade, profissao) => {
//     console.log(`Olá, sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissao}`)
// }
// informar("Edson", 25, "São paulo", "estudante")

// 2.

//a)

// const somar = (num1, num2) => {
//     const soma = num1 + num2
//     return soma
// }
// const resultado = somar(2, 4)
// console.log(`A soma é ${resultado}`)


//b)

// const constatar = (num1, num2) => {
//     const maior = num1 > num2
//     return maior
// }
// const resultado = constatar(4, 2)
// console.log(`A soma é ${resultado}`)

//c)

// const verificar = (num) => {
//     const verifica = num % 2
//     const verificaParidade = verifica === 0
//     return verificaParidade
// }


//d.
// const resultado = verificar(1)
// console.log(`O número é ${resultado}`)

// const medirAumentar = (frase) => {
//     console.log(frase.toUpperCase(), frase.length)
// }

// medirAumentar("Oi, eu sou Goku")

//3.

// const somar = (num1, num2) => {
//     const soma = num1 + num2
//     return soma
// }
// const subtrair = (num1, num2) => {
//     const diferenca = num1 - num2
//     return diferenca
// }
// const multiplicar = (num1, num2) => {
//     const multiplica = num1 * num2
//     return multiplica
// }
// const dividir = (num1, num2) => {
//     const divide = num1 / num2
//     return divide
// }

// const num1 = prompt("Digite um número")
// const num2 = prompt("Digite um outro número")
// console.log(`
// Números inseridos: ${num1} e ${num2}
// Soma: ${somar(Number(num1), Number(num2))}
// Diferença: ${subtrair(Number(num1), Number(num2))}
// Multiplicar: ${multiplicar(Number(num1), Number(num2))}
// Dividir: ${dividir(Number(num1),Number(num2))}
// `)

//desafio

//1.
//a)
// const imprimir = (param) => {
//     console.log(param)
// }

// const executar = imprimir("Oi")

//b)



// const somar = () => {
//     const num1 = 3
//     const num2 = 5
//     const soma = num1 + num2
//     const imprimir = (param) => {
//         console.log(param)
//     }
//     console.log(imprimir(soma))
// }

// const executar = somar()

//2.

// const calcularPitagoras = (cat1, cat2) => {
//     const pit = ((cat1 * cat1) + (cat2 * cat2))**0.5
//     return pit
// }

// const pitagoras = calcularPitagoras(3, 4)
// console.log(`A hipotenusa do triangulo é: ${pitagoras}`)


