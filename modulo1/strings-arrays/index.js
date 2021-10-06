//EXEMPLOS--------------------------------//

//Strings

//Concatenação

//Template Strings

//Propriedade length

//toLowerCase()

//toUpperCase()

//trim()

//includes()

//replaceAll(remoção de caracter, inclusão de caracter)

//EXERCÍCIO 1-----------------------------//

//EXERCÍCIO 2-----------------------------//

//EXERCÍCIO 3-----------------------------//

//EXERCÍCIO 4-----------------------------//


// exercicios de interpretação de código

// 1.

// let array
// console.log('a. ', array) // a.

// array = null
// console.log('b. ', array) // b.

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) c.  11

// let i = 0
// console.log('d. ', array[i]) // d. 3

// array[i+1] = 19
// console.log('e. ', array) // e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13

// const valor = array[i+6]
// console.log('f. ', valor) // f. 9

// 2.

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // SUBI NUM ÔNIBUS EM MIRROCOS

// exercicios de escrita de código

// 1.

// const nomeDoUsuario = prompt("Informe seu nome")
// const emailDoUsuario = prompt("Informe seu e-mail")

// console.log(`O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o) ${nomeDoUsuario}`)

// 2.

// let comidas = ["Pizza", "Hamburger", "Sushi", "Churrasco", "Macarrão"]

// console.log("a. ", comidas)

// console.log(`b. Essas são minhas comidas preferidas:"
// ${(comidas[0])}
// ${(comidas[1])}
// ${(comidas[2])}
// ${(comidas[3])}
// ${(comidas[4])}
// `)

// const comidaUser = prompt("Qual a sua comida favorita?")
// comidas[1] = comidaUser
// console.log(`b. Essas são minhas comidas preferidas:"
// ${(comidas[0])}
// ${(comidas[1])}
// ${(comidas[2])}
// ${(comidas[3])}
// ${(comidas[4])}`)

// 3.

// let listaDeTarefas =[]

// listaDeTarefas.push(prompt("Insira uma tarefa"))
// listaDeTarefas.push(prompt("Insira uma segunda tarefa"))
// listaDeTarefas.push(prompt("Insira uma terceira tarefa"))

// console.log("Segue sua lista de tarefas: ", listaDeTarefas)

// let indiceTarefa = prompt("Digite uma tarefa da qual você realizou")

// listaDeTarefas.splice( Number(indiceTarefa)-1, 1 )

// console.log("Segue sua lista de tarefas: ", listaDeTarefas)

//DESAFIO

// 1.
// const frase = prompt("Digite uma frase")

// const fraseSemEspaco= frase.trim()
// const fraseArray = fraseSemEspaco.split(" ")

// console.log(fraseArray)
// console.log(fraseArray.length)

// 2.

// const array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

// console.log(`indice: ${array.indexOf("Abacaxi")}, tamando do array: ${array.length}`)