
function checaRenovacaoRG(nascimento: string, emissao: string) {

    function separarData(data: string) {
        let dia: string = ""
        let mes: string = ""
        let ano: string = ""
        for (let i = 0; i < data.length; i++) {
            if (i < 2) {
                dia += data[i]
            }
            if (i > 2 && i < 5) {
                mes += data[i]
            }
            if (i > 5 && i < 10) {
                ano += data[i]
            }
        }
        return (`${ano}/${mes}/${dia}`)
    }


    const anoNascimento: string[] | number = new Date(separarData(nascimento)).getTime()
    const anoAtual: number = new Date().getTime()
    const anoEmissao: string[] | number = new Date(separarData(emissao)).getTime()
    
    const idade: number = Number(anoAtual) - Number(anoNascimento)
    const tempoCarteira: number = Number(anoAtual) - Number(anoEmissao)



    const cond1: boolean = idade/3.154*Math.pow(10,-10) <= 20 && tempoCarteira/3.154*Math.pow(10,-10) >= 5
    const cond2: boolean = idade/3.154*Math.pow(10,-10) > 20 && idade/3.154*Math.pow(10,-10) <= 50 && tempoCarteira/3.154*Math.pow(10,-10) >= 10
    const cond3 = idade/3.154*Math.pow(10,-10) > 50 && tempoCarteira/3.154*Math.pow(10,-10) >= 15

    return (cond1 || cond2 || cond3)

}

console.log(checaRenovacaoRG("03/11/1995", "03/02/2011"))