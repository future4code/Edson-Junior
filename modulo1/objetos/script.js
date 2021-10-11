// exercícios de interpretação de código

//1.

// const filme = {
// 	nome: "Auto da Compadecida",
// 	ano: 2000,
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga",
// 		"Virginia Cavendish"
// 		],
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"},
// 		{canal: "Canal Brasil", horario: "19h"},
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0]) //"Matheus Nachtergaele"
// "Virginia Cavendish"
// console.log(filme.elenco[filme.elenco.length - 1]) // 3
// console.log(filme.transmissoesHoje[2]) //canal: "Globo", horario: "14h"

//2.

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio",
//   idade: 23,
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

//a) false e undefined
//b) retornou false pq a propriedade do objeto era essa e undefined porque o objeto n possui essa propriedade

// exercícios de escrita de código

//1.
//a)
// const pessoas = {
//     nome: "Amanda",
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
// }

// const imprimir = (nome, apelidos) => {
//     console.log(`Eu sou ${nome}, mas pode me chamar de : ${apelidos}`)
// }

// console.log(imprimir(pessoas.nome, pessoas.apelidos))


// b)
// const pessoas = {
//     nome: "Amanda",
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
// }

// const imprimir = (nome, apelidos) => {
//     console.log(`Eu sou ${nome}, mas pode me chamar de : ${apelidos}`)
// }

// const pessoasSpread = {
//     nome: pessoas.nome,
//     apelidos: ["Novos", "Apelidos", "Teste"]

// }

// console.log(imprimir(pessoasSpread.nome, pessoasSpread.apelidos))

//2.
//a)


// const pessoaUm= {
//     nome: "João",
//     idade: 25,
//     profissao: "Dentista",
// }
// const pessoaDois= {
//     nome: "Guilherme",
//     idade: 32,
//     profissao: "Pedreiro",
// }



// const informar = (objeto) => {
//     const dadosPess = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, pessoaUm.profissao.length,]
    
    
//     return dadosPess
// }
// console.log(informar(pessoaUm))
// console.log(informar(pessoaDois))

//3.
//a)

// const carrinho = []

// const frutaUm = {
//     nome: "Mamão",
//     disponibilidade: true,
// }
// const frutaDois = {
//     nome: "Abacaxi",
//     disponibilidade: true,
// }
// const frutaTres = {
//     nome: "Maçã",
//     disponibilidade: true,
// }

// const receber = (fruta) => {
//     carrinho.push(fruta)
// }
// receber(frutaUm)
// receber(frutaDois)
// receber(frutaTres)
// console.log(carrinho)

//desafios

//1.

// const funcao = () => {
//     const nome = prompt("Qual o seu nome?")
//     const idade = prompt("Qual a sua idade?")
//     const profissao = prompt("Qual a sua profissao?")
//     const objeto = {
//         nome: nome,
//         idade: idade,
//         profissao: profissao,
//     }
//     return objeto
// }

// const dados = funcao()
// console.log(dados)

//2.
// const filme1 = {
//     nome: "007",
//     ano: 2008,
// }
// const filme2 = {
//     nome: "008",
//     ano: 2008,
// }
// const filme1Ano = filme1.ano
// const filme2Ano = filme2.ano
// const cond1 = filme1 < filme2
// const cond2 = Number(filme1) == Number(filme2)

// const funcao = (filme1, filme2) => {
//     const filme1Ano = filme1.ano
//     const filme2Ano = filme2.ano
//     const cond1 = filme1Ano < filme2Ano
//     const cond2 = filme1Ano === filme2Ano
//     console.log(`O primeiro filme foi lançado antes do segundo? ${cond1}
// O primeiro filme foi lançado no mesmo ano do segundo? ${cond2}`)
// }
// funcao(filme1,filme2)

//3.

// const carrinho = []

// const frutaUm = {
//     nome: "Mamão",
//     disponibilidade: true,
// }
// const frutaDois = {
//     nome: "Abacaxi",
//     disponibilidade: true,
// }
// const frutaTres = {
//     nome: "Maçã",
//     disponibilidade: true,
// }
// const receber = (fruta) => {
//     carrinho.push(fruta)
// }




// receber(frutaUm)
// receber(frutaDois)
// receber(frutaTres)
// const inverterDisp = (objeto) => {
//     const inverterDisp = carrinho.disponibilidade
//     const inverso = !inverterDisp
//     return inverso
// }
// inverterDisp(carrinho[2])
// const inve = !carrinho[2].disponibilidade
// console.log(inve)
// console.log(carrinho)

