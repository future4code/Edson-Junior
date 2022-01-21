// Exercício 2

// Observe a função a seguir, escrita em JavaScript:

// ```jsx
// function obterEstatisticas(numeros) {

//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }
// ```

// a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros

// r:

// entradas: array de numeros
// saídsas: array de estatisticas

// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas

// explicito no exercício c

// c) Crie um *type* chamado **amostra** de dados, isto é, um objeto com as propriedades **numeros** e **obterEstatisticas**. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

// type Estatisticas = {
//     maior: number,
//     menor: number,
//     media: number
// }

// function obterEstatisticas(numeros: number[]): Estatisticas {
//     const numerosOrdenados = numeros.sort(
//         (a, b) => a-b
//     )

//     let soma: number = 0

//     for (let num of numeros){
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma/numeros.length
//     }
//     return estatisticas
// }

// console.log(obterEstatisticas([2, 5, 6, 8, 1, 6, 10]))

type Estatisticas = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros: number[]): Estatisticas {
    const numerosOrdenados = numeros.sort(
        (a, b) => a-b
    )

    let soma: number = 0

    for (let num of numeros){
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma/numeros.length
    }
    return estatisticas
}

type AmostraDeIdades = {
    numeros: number[],
    obterEstatisticas: (number: number[]) => Estatisticas
}