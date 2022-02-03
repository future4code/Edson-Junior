### Exercício 1
a) Chave estrangeira é uma coluna que tem relação de 1:1, 1:N ou N:M com outra tabela do banco e dados.
b)
````
INSERT INTO Rating(id, comment, rate, movie_id)
VALUES
("001", "Ótima escolha para domingo de tarde", 6,"002"), 
("002", "Filme encantador para sua época", 6.5,"003"),
("003", "Filme retratando a realidade das forças especiais brasileira", 8,"004");
````
c) 0	10	12:35:20	INSERT INTO Rating (id, comment, rate, movie_id)
 VALUES("004", "Teste", 6, "005")	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`carver-edson-batista-magnini-junior`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))	0.156 sec
O workbench apresenta um erro, pois não encontrou uma chave estrangeira compatível com o id passado para criação da nova linha no banco de dados.
d)0	11	12:37:19	DELETE FROM Filmes WHERE (id = "004")	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`carver-edson-batista-magnini-junior`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))	0.156 sec
Não é possível deletar um filme que há avaliação, caso realmente fosse desejado deletar o filme em questão, primeiro teria que deletar  a linha que ele tem relação na table rating e aí sim conseguiríamos deletar o filme da table filmes.

### Exercício 2
a)
````
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
````
A tabela acima é uma relação entre os a tabela atores e filmes. Onde N atores podem fazer parte do elenco de M filmes.
b)
````
INSERT INTO MovieCast
VALUES
("002", "001"), ("002", "003"), ("003", "004"), ("003", "005"), ("004", "006"), ("004", "007");
````
c)0	16	14:11:54	INSERT INTO MovieCast
 VALUES
 ("001", "002"), ("003", "002"), ("004", "003"), ("005", "003"), ("006", "004"), ("007", "004")	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`carver-edson-batista-magnini-junior`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))	0.156 sec
 O workbench apresenta um erro, pois não encontrou uma chave estrangeira compatível com o id passado para criação da nova linha no banco de dados.
d)0	19	14:15:15	DELETE FROM Actor WHERE id = "001"	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`carver-edson-batista-magnini-junior`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))	0.157 sec
Não é possível deletar um ator que possuí relação com um filme, caso realmente fosse desejado deletar o ator em questão, primeiro teria que deletar  a linha que ele tem relação na table Filmes e aí sim conseguiríamos deletar o ator da table Actor.

### Exercício 3
a) O operador "ON" é o se refere que o ponto de partida para a relação da tabela Movies Rating será a tabela Movies, sendo assim ele verifica todas as linhas da tabela Movies e encontrando uma equivalencia na coluna movie_id de Rating ele fará a junção das tabelas.
b)
````
SELECT m.id as movie_id, m.titulo as titulo, r.rate as rating FROM Filmes m
INNER JOIN Rating r ON m.id = r.movie_id;
````