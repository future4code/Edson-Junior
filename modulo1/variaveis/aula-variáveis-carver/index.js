//isso é um comentário

/*
Isso é um bloco
de comentário

*/
//imprime a mensagem no console do navegador
console.log("Olá mundo!")

// //pegar informações do usuário
// // let nomeDoUsuario = prompt("Qual é o seu nome?")
// // nomeDoUsuario  = prompt("qual é o seu sobrenome?")

// let sobrenomeDoUsuario = prompt("qual é o seu sobrenome?")
// console.log(sobrenomeDoUsuario)


/*
const nomeDoUsuario = prompt("Qual é o seu nome?") 
const idade = prompt("Qual é a sua idade?") 

console.log("Olá", "meu nome é,", nomeDoUsuario, ", eu tenho", idade, "anos")
*/

//Tipos de variáveis
// const boleana = true
// const numero = 30
// const texto = "labenu"

// console.log(boleana)
// console.log(numero)
// console.log(texto)

//exercicio 1
// const nomeDoUsuario = prompt("qual é o seu nome")
// const sobrenomeDoUsuario = prompt("Qual é o seu sobrenome?")
// const idade = prompt("Qual é a sua idade?")
// const ehEstudante = false

// console.log("nome de usuário", nomeDoUsuario, "Sobrenome do usuário", sobrenomeDoUsuario, "idade do usuário", idade,"estudante da Labenu?", ehEstudante  )
// console.log("Sobrenome do usuário", sobrenomeDoUsuario)
// console.log("idade do usuário", idade)
// console.log("estudante da Labenu?", ehEstudante)

//typeOf
// const idade = 10
// const boleana = true
// let palavra;
// // const texto => não pode ser inicializada por ser uma constante
// let variavelVazia = null

// console.log( variavelVazia)

//exercicio 2


// //1
// const nomeDoUsuario = prompt("qual é o seu nome?")
// console.log(nomeDoUsuario)

//2
// const idade = prompt("qual é a sua idade?")
// console.log(idade + 30) //forma direta de transforma string em numero

// //3
// console.log(typeof nomeDoUsuario, typeof idade)

//transformando numero em texto
// const idade = 30
// const idadeTexto = idade.toString()

// console.log(typeof idade, typeof idadeTexto)

//transformando texto em numero
// const idadeTexto = "40"
// const idade = Number(idadeTexto)
// console.log(typeof idadeTexto, typeof idade)

// exercicio de interpretação --------------------

//1

// let a = 10
// let b = 10

// console.log(b) // 10

// b = 5
// console.log(a, b) // 10, 5

//2

// let a = 10
// let b = 20
// c = a
// b = c
// a = b

// console.log(a, b, c) // 10,10 ,10

// //3

// let p = prompt("Quantas horas você trabalha pro dia?")
// let t = prompt("Quanto você recebe por dia?")
// alert('voce recebe ${t/p} por hora') // para p sugiro horaPorDia e para t sugiro valorPorDia

//exercicio de escrita de codigo -----------------------------------------

//1

// let nome

// let idade

// console.log(typeof nome, typeof idade) // estão como indefinidas, pois nenhum valor foi atribuído a elas

// nome = prompt("Qual é seu nome?")
// idade = prompt("Qual é sua idade?")
// console.log(typeof nome, typeof idade) // agora estão como string pois o usuário inseriu um texto

// console.log("Olá", nome, "você tem", idade, "anos")

//2

// let camisaAzul = "Sim"
// let agua = "Sim"
// let cafe = "Sim"

// console.log("Você está usando camisa azul?", camisaAzul)
// console.log("Você bebeu água hoje?", agua)
// console.log("Você tomou café hoje?", cafe)

//3

// let a = 10
// let b = 25
// let c

// c = a
// a = b
// b = c

// console.log("O novo valor de a é:", a)
// console.log("O novo valor de b é", b)

// desafio

let aText = prompt("Digite um número")
let bText = prompt("Digite um segundo número")
const a = Number(aText)
const b = Number(bText)

console.log("A soma dos números é de", a + b)
console.log("A multiplicação dos números é de", a * b)

