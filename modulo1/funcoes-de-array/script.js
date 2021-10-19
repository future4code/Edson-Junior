// exercícios de interpretação de código

//1.
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })


  //a) Será impresso três console.log com o s arrays dos objetos
  //{nome: "Amanda Rangel", apelodp: "Mandi"}
  //{nome: "Laís Petra", apelido: "Laura"}
  //{nome: "Letícia Chijo", apelido: "Chijo"}

//2.

// const usuarios = [
//    { nome: "Amanda Rangel", apelido: "Mandi" },
//    { nome: "Laís Petra", apelido: "Laura" },
//    { nome: "Letícia Chijo", apelido: "Chijo" },
//  ]
 
//  const novoArrayB = usuarios.map((item, index, array) => {
//     return item.nome
//  })
 
// console.log(novoArrayB)
 
//a) Será impresso um array  com os nomes dos elementos

//{"Amanda Rangel", "Laís Petra", "Letícia Chijo"}

//3.
// const usuarios = [
//    { nome: "Amanda Rangel", apelido: "Mandi" },
//    { nome: "Laís Petra", apelido: "Laura" },
//    { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayC = usuarios.filter((item, index, array) => {
//    return item.apelido !== "Chijo"
// })

// console.log(novoArrayC)

//a) Será impresso os arrays que tem os elementos diferente de "Chijo"

//{ nome: "Amanda Rangel", apelido: "Mandi" }
//{ nome: "Laís Petra", apelido: "Laura" }

//exercícios de escrita de código

//1.

// const pets = [
//    { nome: "Lupin", raca: "Salsicha"},
//    { nome: "Polly", raca: "Lhasa Apso"},
//    { nome: "Madame", raca: "Poodle"},
//    { nome: "Quentinho", raca: "Salsicha"},
//    { nome: "Fluffy", raca: "Poodle"},
//    { nome: "Caramelo", raca: "Vira-lata"},
// ]

// const nomeDogs =  pets.map((item, index, array) => {
//    return item.nome
// })

// console.log(nomeDogs) //a)

// const nomeDogsSalsicha = pets.filter((item, index, array) => {
//    return item.raca === "Salsicha"
// })

// console.log(nomeDogsSalsicha) //b)

// const promocaoPoodle = (pets) => {
//       return pets.raca === "Poodle"
// }

// const poodleNome = (pets) => {
//    return pets.nome
// }

// const msgPromocaoPoodle = pets.filter(promocaoPoodle).map(poodleNome)

// console.log(msgPromocaoPoodle)

// for (let num = 0; num < msgPromocaoPoodle.length; num++) {
//    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${msgPromocaoPoodle[num]}`)
// }


//2.

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
// const poodleNome = (pets) => {
//    return pets.nome
// }
// const nomeProdutos = (produtos) => {
//       return produtos.nome
// }
// console.log(produtos.map(nomeProdutos))



// const precoProdutos = (produtos) => {
//    return produtos.preco
// }
// console.log(produtos.map(precoProdutos))

// const addPromocao = (item) => {
//    return [item.nome, item.preco*0.95]
// }

// console.log(produtos.map(addPromocao))

// const catBebidas = produtos.filter((item) => {
//    return item.categoria ==="Bebidas"
// })

// console.log(catBebidas)

// const nomeProdutos = produtos.map((item) => {
//    return item.nome
// })

// console.log(nomeProdutos)


// const filtraYpe = produtos.filter((item) => {
//    return item.nome.includes("Ypê")
// })


// console.log(filtraYpe)

// const precoProdutos = filtraYpe.map((item) => {
//    return item.preco
// })
// const nomeYpe = filtraYpe.map((item) => {
//    return item.nome
// })
// console.log(nomeYpe)
   
// // const precoYpe = produtos.filter(filtraYpe).map(precoProdutos)

// // const nomeYpe = produtos.filter(filtraYpe).map(nomeProdutos)

// // console.log()
// const executa = nomeYpe.map((item, index, array) => {
//    return (`Compre ${nomeYpe} por apenas R$ ${precoProdutos}`)
// })
// console.log(executa)



