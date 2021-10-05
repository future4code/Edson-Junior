// exercicios de interpretação

// 1.

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado) -> false

// resultado = bool1 && bool2 && bool3
// console.log("b. ", resultado) -> false

// resultado = !resultado && (bool1 || bool2)
// console.log("c. ", resultado) -> true

// console.log("d. ", typeof resultado) ->boolean

// 2.

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma) -> irá ser impresso a concaternação dos números didgitados, não a soma

// 3.

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = Number(primeiroNumero) + Number(segundoNumero)

// console.log(soma) ---- iria sugerir para que ele colocasse "Number" antes do comando de somar os números, assim eles seriam convertidos de string para inteiros

// exerciocios de escrita de código

//1.

// let idade = prompt("Digite sua idade")
// let idadeAmigo = prompt("Digite a idade de seu amigo(a)")

// console.log("Sua idade é maior do que a do seu amigo?", idade > idadeAmigo)

// let diferenca = Number(idade) - Number(idadeAmigo)

// console.log("A diferença da idade é: ",diferenca)

// 2.

// let numero = prompt("Insira um número par")

// console.log("O resto da divisão por dois é:", Number (numero%2)) // todos números pares o resto é 0 ---- se o número for ímpar o resto é 1

// 3.

// let idade = prompt("Digite sua idade")

// console.log("Sua idade dem meses é de:", Number(idade*12))
// console.log("Sua idade em dias é de:", Number(idade*12*30))
// console.log("Sua idade em horas é de", Number(idade*12*30*24))

// 4.

// const num1 = prompt("Digite um número")
// const num2 = prompt("Digite um outro número")

// let num1MaiorNum2 = Number(num1) > Number(num2)
// console.log("O primeiro numero é maior que segundo?", num1MaiorNum2)

// let num1IgualNum2 = Number(num1) === Number(num2)
// console.log("O primeiro numero é igual ao segundo?", num1IgualNum2)

// let num1DivNum2 = Number(num1) % Number(num2)
// console.log("O primeiro numero é divisível pelo segundo?", num1DivNum2 !== 0)

// let num2DivNum1 = Number(num2) % Number(num1)
// console.log("O segundo numero é divisível pelo primeiro?", num2DivNum1 !== 0)

//DESAFIO

//1
// console.log("77 graus Fahrenheit em Kelvin são:", ((77 - 32) * (5 / 9)) + 273.15)

// console.log("80 graus Celsius em Fahrenheit são:", 80 * (9 / 5) + 32)

// console.log("30 graus Celcius em Fahrenheit e Kelvin é respectivamente:", 30 * (9 / 5) + 32, "e", ((30 * (9 / 5) + 32) - 32) * (5 / 9) + 273.15)

// const celcius = prompt("Digite um valor para graus celsius")

// console.log("30 graus Celcius em Fahrenheit e Kelvin é respectivamente:", Number(celcius) * (9 / 5) + 32, "e", ((Number(celcius) * (9 / 5) + 32) - 32) * (5 / 9) + 273.15)

//2

// console.log("O valor de uma conta de luz de uma residência que consome 280KW/h é de R$:", 280 * 0.005)

// console.log("O valor de uma conta de luz de uma residência que consome 280KW/h com 15% de desconto é de R$:", (280 * 0.005)*0.85)

//3

// const lbKg = 20/2.2046
// console.log("20LB equivalem a :", lbKg, "kg")

// const ozKg = 10.5*0.0283495231
// console.log("10.5oz equivalem a :", ozKg, "kg")

// const miM = 100*1609.344
// console.log("'100 milhas equivalem a :", miM, "m")

// const ftM = 50/3.2808399
// console.log("50 pés equivalem a :", ftM, "m")

// const galL = 103.56*4.546092
// console.log("103.56 galões equivalem a :", galL, "l")

// const xicL = 450*(1/5)
// console.log("450 xícaras equivalem a :", xicL, "l")

// const xic = prompt("Quantas xícaras deseja converter para litro?")
// const xicL = Number(xic)*(1/5)
// console.log("450 xícaras equivalem a :", xicL, "l")