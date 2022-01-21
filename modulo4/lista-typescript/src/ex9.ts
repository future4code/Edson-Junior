

function calculoFatorialAnag(palavra: string): number | string {
    const numeroPalavras = palavra.length

    
  
    if (numeroPalavras === 0) {
      return 1
    }
  
    let resultado = 1;
  
    for (let i = numeroPalavras; i > 0; i--) {
        resultado *= i
    }
  
    return resultado
  }
  
  console.log(calculoFatorialAnag("onibus"))