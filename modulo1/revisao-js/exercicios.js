// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    // Escreva seu código aqui
    
    for (let num of arrayDeNumeros) {
        let contador = 0
        if (num === numeroEscolhido) {
            contador = contador + 1
        }
        return contador
    }
    if (contador === 0) {
        return "Número não encontrado"
    }
    else {
        return contador
    }
}
const array = [1, 3, 4, 4, 5, 6, 3]
const numero = 4
console.log(contaOcorrencias(array, numero))

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse(array)
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => {
        if (a > b) return;
        if (a < b) return -1;
        return 0;
  })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const par = array.filter((numero) => {
        return numero % 2 === 0
    })
    return par
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const elevado = array.map((array) => {
        return array * array
    })
    console.log(elevado)
    const par = elevado.filter((numero) => {
        return numero % 2 === 0
    })
    return par

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = array[0]
    for (let i = 0; i < array.length; i++){
        if (maior < array[i]) {
            maior = array [i]
        }
    }
    return maior
}

// EXERCÍCIO 07
// function retornaObjetoEntreDoisNumeros(num1, num2) {
//     const maiorNumero = ((retornaObjetoEntreDoisNumeros) => {
//         if (num1 > num2) {
//             return { maiorNumero: num1 }
//         }
//         else {
//             return { maiorNumero: num2 }
//         }
//     })
//     console.log(maiorNumero) // está funcionando

//     // const maiorDivisivelPorMenor = () => {
//     //     return maiorNumero
//     // }
// }

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    for (let num = 0; num > n; num++){
        console.log(num +2)
    }
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}