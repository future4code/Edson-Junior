//   Exercício 1

// A seguinte função em JavaScript recebe como parâmetro os tamanhos dos três lados do triângulo: ladoA, ladoB, ladoC e retorna se ele é equilátero, isósceles ou escaleno. Refatore a função para o Typescript.

// function checaTriangulo(a: number, b: number, c: number) {
//     if (a !== b && b !== c) {
//         return "escaleno"
//     }
//     if (a === b && b === c) {
//         return "equilátero"
//     }
//     else {
//         return "isósceles"
//     }
// }

// console.log(checaTriangulo(3, 4, 4))

//  Exercício 2

// A seguinte função em JavaScript pergunta ao usuário suas três cores favoritas e imprime no console um array que contenha essas três cores. Refatore a função para o Typescript.

// function imprimeTresCoresFavoritas(corUm: string, corDois: string, corTres: string) {
//     const cor1: string = corUm
//     const cor2: string = corDois
//     const cor3: string = corTres
//     console.log([cor1, cor2, cor3])
// }

// imprimeTresCoresFavoritas("amarelo", "azul", "vermelho")

// Exercício 3

// A função recebe um ano e retorna um booleano (true ou false) que indica se o ano é bissexto. Um ano é bissexto de acordo com as seguintes condições:

// - **São bissextos** todos os anos múltiplos de 400**.**
// - **São bissextos** todos os múltiplos de 4, exceto se for múltiplo de 100 mas não de 400**.**
// - **Não são bissextos** todos os demais anos.

// function checaAnoBissexto(ano: number) {
//     const cond1: boolean = ano % 400 === 0
//     const cond2: boolean = (ano % 4 === 0) && (ano % 100 !== 0)
//     return cond1 || cond2
// }

// console.log(checaAnoBissexto(2016))

// Exercício 4

// A seguinte função recebe dois números como parâmetro e retorna a diferença entre o maior número e o menor. Dessa forma, refatore a função para o Typescript.

// function comparaDoisNumeros(num1: number, num2: number) {
//     let maiorNumero: number
//     let menorNumero: number

//     if (num1 > num2) {
//         maiorNumero = num1
//         menorNumero = num2
//     } else {
//         maiorNumero = num2
//         menorNumero = num1
//     }

//     const diferenca: number = maiorNumero - menorNumero
    
//     return diferenca
// }

// console.log(comparaDoisNumeros(6, 9))

// Exercício 5

//A função abaixo pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa, e o ano em que sua carteira de identidade foi emitida (nessa ordem). A função retorna  um booleano que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:

// - Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
// - Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
// - Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos

// Dito isso, refatore a função para o Typescript.

// function checaRenovacaoRG(atual: number, nascimento: number, emissao: number) {
//     const anoAtual: number = atual
//     const anoNascimento: number = nascimento
//     const anoEmissao: number = emissao
    
//     const idade: number = anoAtual - anoNascimento
//     const tempoCarteira: number = anoAtual - anoEmissao

//     const cond1: boolean = idade <= 20 && tempoCarteira >= 5
//     const cond2: boolean = idade > 20 && idade <= 50 && tempoCarteira >= 10
//     const cond3 = idade > 50 && tempoCarteira >= 15

//     return (cond1 || cond2 || cond3)

// }

// console.log(checaRenovacaoRG(2021, 1995, 2019))

//Exercício 6

//Faça uma função que receba dois números como parâmetros e imprima no terminal, as seguintes informações:

// a) A soma desses números

// b) A subtração desses números

// c) A multiplicação desses números

// d) Qual deles é o maior

// function funcao(num1: number, num2: number) {
//     const soma: number = num1 + num2
//     const subtracao: number = num1 - num2
//     const multipicacao: number = num1 * num2
//     let numeroMaior: number
//     let numeroMenor: number
//     if (num1 > num2) {
//         numeroMaior = num1
//         numeroMenor = num2
//     } else {
//         numeroMaior = num2
//         numeroMenor = num1
//     }
//     console.log([soma, subtracao, multipicacao, numeroMaior])
// }

// funcao(4, 5)

// Exercício 7

// a) Escreva um programa que converta uma string de DNA em uma string de RNA. Para os exemplos acima, a entrada seria "ATTGCTGCGCATTAACGACGCGTA" e a saída "UAACGACGCGUAAUUGCUGCGCAU"

// function dnaToRna(dna: string) {
//     let rna: string = ""
//     for (let i = 0; i < dna.length; i++){
//         if (dna[i] == "A") {
//             rna+= "U"
//         }
//         if (dna[i] == "T") {
//             rna+= "A"
//         }
//         if (dna[i] == "G") {
//             rna+= "C"
//         }
//         if (dna[i] == "C") {
//             rna+= "G"
//         }
//         console.log(rna)
//     }
// }

// dnaToRna("ATTGCTGCGCATTAACGACGCGTA")

// Exercício 8

// a) Escreva uma função que receba uma string e retorne a string reversa. Em outras palavras, se o input da sua função for "abcd", a saída deve ser "dcba" .

// function reverso(palavra: string) {
//     const inverter: string = palavra.split('').reverse().join('')
//     console.log(inverter)
// }

// reverso("abcde")