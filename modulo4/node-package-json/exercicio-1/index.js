// Exercício 1

// a) ** Responda como comentário no seu código:** como fazemos para acessar os parâmetros passados na linha de comando para o Node ?

// Resposta: atravéz do node

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

const nome = process.argv[2]
const idade = process.argv[3]
const idadeEmSeteAnos = Number(process.argv[3])+Number(7)

console.log(`Olá ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeEmSeteAnos}`)