// Exercício 1

//O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.

// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

// d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. Utilize um `enum` para isso.,

// const minhaString: string = 5

// console.log(minhaString)

// R: Ocorreu um erro pois tentei atribuir o valor de um número para uma váriavel tipada como string

// const meuNumero: number = 5

// console.log(meuNumero)

// R: Para fazer com que a váriavel "meuNumero" aceite também valores do tipo string devemor acrescentar o "|" e tipá-la como string

// const nome: string = ""
// const idade: number = 0
// const corFavorita: string = ""

// const pessoa = {
//     nome: "Creyson",
//     idade: 55,
//     corFavorita: "Verde"
// }

// console.log(pessoa)

// type Pessoa = {
//     nome: string,
//     idade: number,
//     corFavorita: string
// }

// const pessoa1: Pessoa = {
//     nome: "João",
//     idade: 25,
//     corFavorita: "Azul"
// }
// const pessoa2: Pessoa = {
//     nome: "Maria",
//     idade: 30,
//     corFavorita: "Vermelho"
// }
// const pessoa3: Pessoa = {
//     nome: "Regina",
//     idade: 22,
//     corFavorita: "Amarelo"
// }

// console.log (pessoa1, pessoa2, pessoa3)

enum CoresArcoIris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}



type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CoresArcoIris
}

const pessoaVermelho: Pessoa = {
    nome: "João",
    idade: 25,
    corFavorita: CoresArcoIris.VERMELHO
}
const pessoaLaranja: Pessoa = {
    nome: "Maria",
    idade: 30,
    corFavorita: CoresArcoIris.LARANJA
}
const pessoaAmarelo: Pessoa = {
    nome: "Regina",
    idade: 22,
    corFavorita: CoresArcoIris.AMARELO
}
const pessoaVerde: Pessoa = {
    nome: "Lucas",
    idade: 23,
    corFavorita: CoresArcoIris.VERDE
}
const pessoaAzul: Pessoa = {
    nome: "Jackson",
    idade: 36,
    corFavorita: CoresArcoIris.AZUL
}
const pessoaAnil: Pessoa = {
    nome: "Juliana",
    idade: 38,
    corFavorita: CoresArcoIris.ANIL
}
const pessoaVioleta: Pessoa = {
    nome: "Adriano",
    idade: 40,
    corFavorita: CoresArcoIris.VIOLETA
}

console.log(pessoaVermelho, pessoaLaranja, pessoaAmarelo, pessoaVerde, pessoaAzul, pessoaAnil, pessoaVioleta)