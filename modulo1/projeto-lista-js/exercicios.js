// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt("Informe a altura do retângulo")
  const largura = prompt("Informe a largura do retângulo")
  console.log(altura * largura)
}
// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Informe o ano atual")
  const anoNascimento = prompt("Informe o seu ano de nascimento")
  console.log(anoAtual-anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura*altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Informe seu nome")
  const idade = prompt("Informe sua idade")
  const email = prompt("Informe seu email")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite sua primeira cor favorita")
  const cor2 = prompt("Digite sua segunda cor favorita")
  const cor3 = prompt("Digite sua terceira cor favorita")
  let array = []
  array[0] = cor1 
  array[1] = cor2
  array[2] = cor3
  console.log(array)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return Number(custo)/Number(valorIngresso)

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeiro = array[0]
  array[0] = array[array.length-1]
  array[array.length-1] = primeiro
  return array

}
console.log(trocaPrimeiroEUltimo())
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Informe o ano atual")
  const anoNascimento = prompt("Informe seu ano de nascimento")
  const anoCarteirinha = prompt("Informe o ano que sua carteirinha foi emitida")
  const idade = Number(anoAtual) - Number(anoNascimento)
  const validadeCarteirinha = Number(anoAtual) - Number(anoCarteirinha) 
  const condicao1 = idade <= 20 && validadeCarteirinha >= 5 
  const condicao2 = idade >= 20 && idade <=50 && validadeCarteirinha >= 10
  const condicao3 = idade > 50 && validadeCarteirinha > 15
  console.log(condicao1 || condicao2 || condicao3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  condicao1 = Number(ano) % 400 === 0
  condicao2 = Number(ano) % 4 === 0 && Number(ano) % 100 !== 0
  return condicao1 || condicao2

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("Você tem mais de 18 anos?")
  const ensinoMedio = prompt("Você tem o ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclisiva durante os horários do curso?")
  console.log(idade === "sim" && ensinoMedio ==="sim" && disponibilidade ==="sim")


}