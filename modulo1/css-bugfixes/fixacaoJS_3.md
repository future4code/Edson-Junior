ˋˋˋ
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let media = 0
  let conceito
  media = (ex + (2* p1) + (3*p2)) / 6
  if (media >= 9){
    return conceito = "A"
  }
  else if ( media < 9 && media >=7.5){
    return conceito = "B"
  }
  else if ( media < 7.5 && media >= 6){
    return conceito = "C"
  }
  else {
    return conceito = "D"
  }
}
ˋˋˋ