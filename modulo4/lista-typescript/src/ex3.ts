enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function avaliacaoFilme(nome: string, ano: number, genero: GENERO, pontuacao?: number) {
    console.log(`Nome do filme: ${nome}, Ano de lançamento ${ano}, Gênero do filme ${genero}, Pontuação do filme ${pontuacao}`)
}

avaliacaoFilme("Spider-Man 3 - No way home", 2021, GENERO.ACAO, 98)