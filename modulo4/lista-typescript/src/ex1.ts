
const data: string = ""

function separarData(data: string, nome: string) {
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
    console.log(`Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`)
}

separarData("24/04/1993", "Edson")