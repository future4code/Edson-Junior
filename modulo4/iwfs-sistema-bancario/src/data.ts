export type extrato = {
    valor: number,
    dataDeTransacao: string,
    descricao: string
}
export type usuario = {
    nome: string,
    cpf: string,
    dataDeNascimento: string,
    saldo: number,
    extratoDados: extrato[]
}

export let usuarios: usuario[] = [
    {
        nome: "João Silva de Vila Prudente",
        cpf: "460.635.249-74",
        dataDeNascimento: "02/12/1965",
        saldo: 560,
        extratoDados: []
    },
    {
        nome: "Marlene Tocantins Oliveira",
        cpf: "479.746.350-51",
        dataDeNascimento: "15/03/1961",
        saldo: 1060,
        extratoDados: [
            {
                valor: 700,
                dataDeTransacao: "21/02/2018",
                descricao: "Conta de luz"
            },
            {
                valor: 62,
                dataDeTransacao: "26/02/2018",
                descricao: "Conta de gás"
            },
        ]
    },
    {
        nome: "Regiane Amado Nogueira",
        cpf: "480.857.461-60",
        dataDeNascimento: "05/11/1982",
        saldo: 3068,
        extratoDados: [
            {
                valor: 153,
                dataDeTransacao: "15/02/2020",
                descricao: "Parcela Onix"
            },
            {
                valor: 300,
                dataDeTransacao: "26/02/2020",
                descricao: "Combustível"
            },
        ]
    },
]