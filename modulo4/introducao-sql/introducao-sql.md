### Exercício 1
a) Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.

VARCHAR para o tipo string;
DATE para tipo data data.

b) O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: SHOW DATABASES e SHOW TABLES. Explique os resultados.
SHOW DATABASES mostra informações gerais do banco de dados.
SHOW TABLES mostra as tabelas que existem no banco de dados.

c) O comando DESCRIBE pode ser usado para ver estrutura de uma tabela. Utilize o comando  DESCRIBE Actor e explique os resultados.
Ele mostra as colunas de uma tabela a qual você deseja obter dados.

### Exercício 2
a) Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"2",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);


b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.
Gerou um erro devido à tentarmos atribuirmos o id "2" a uma nova linha de dados sendo que já havia um elemento com id "2" anteriormente, assim gerando conflito e não permitindo a nova inserção de dados.

c)Gerou erro pois faltou passar o parâmetro data de nacimento.

d)Gerou erro pois faltou passar o parâmetro name.

e)Gerou erro pois a atribuição do dado data de nascimento foi passado fora de parenteses.

f)Foi gerado um novo ator sem erros

### Exercício 3
a)Escreva uma query que retorne todas as informações das atrizes
SELECT * from Actor WHERE gender = "female";

b)Escreva uma query que retorne o salário do ator com o nome Tony Ramos
SELECT salary from Actor WHERE name = "Tony Ramos";

c)Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.
SELECT id, name, salary from Actor WHERE salary < 500000;
Retornou um dado completamente nulo pois todos os atores da tabela são do gênero male ou female
d)Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000


e)Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta
Houve um erro pois não há o parâmetro nome e sim name
SELECT id, name from Actor WHERE id = "002".

### Exercício 4
a)Explique com as suas palavras a query acima
Verifica atores que iniciem o nome por A ou J e salário maior que 300000.

b)Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000; name NOT LIKE "a%" AND salary > 350000;


c)Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome. 
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

d)Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00
Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00 (name LIKE "%a%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;


### Exercício 5
a)Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar. Explique a query resumidamente.
Tipo TEXT é bem parecido com o VARCHAR e CHAR, mas com a diferença de que ao invés de limitar a escrita de strings por
número de caracteres, TEXT limita a escrita pelo tamanho do arquivo (2GB, no máx.).
A query de criação da tabela foi:
```
CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    titulo VARCHAR (255) NOT NULL,
    Sinopse VARCHAR (255) NOT NULL,
    Data_de_lançamento DATE NOT NULL,
    Avaliação FLOAT NOT NULL
);
```
b)INSERT INTO Filmes (id, titulo, Sinopse, Data_de_lançamento, Avaliação)
VALUES(  
    "001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
	"2006-01-06",
	7
);
c)INSERT INTO Filmes (id, titulo, Sinopse, Data_de_lançamento, Avaliação)
VALUES(  
    "002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
	"2012-12-27",
	10
);
d)INSERT INTO Filmes (id, titulo, Sinopse, Data_de_lançamento, Avaliação)
VALUES(  
    "003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
	"2017-11-02",
	8
);
e)INSERT INTO Filmes (id, titulo, Sinopse, Data_de_lançamento, Avaliação)
VALUES(  
    "004",
    "Tropa de elite",
    "Nascimento, capitão da Tropa de Elite do Rio de Janeiro[...].",
	"2007-11-02",
	9.8
);


### Exercício 6
a)Retorne o id, título e avaliação a partir de um id específico;
SELECT id, titulo, Avaliação FROM Filmes
WHERE id = "004";


b)Retorne um filme a partir de um nome específico;
SELECT * FROM Filmes
WHERE titulo = "Dona Flor e Seus Dois Maridos";

c)Retorne o id, título e sinopse dos filmes com avaliação mínima de 7
SELECT id, titulo, Sinopse FROM Filmes
WHERE Avaliação >= 7;

### Exercício 7
a)Retorna um filme cujo título contenha a palavra vida
SELECT * FROM Filmes
WHERE titulo LIKE "vida%";

b)Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer TERMO DE BUSCA para exemplificar.
SELECT * FROM Filmes
WHERE titulo LIKE "%TERMO DE BUSCA%" OR
      Sinopse LIKE "%TERMO DE BUSCA%";

c)Procure por todos os filmes que já tenham lançado
SELECT * FROM Filmes
WHERE Data_de_lançamento < "2022-01-31";

d)Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7. 
SELECT * FROM Filmes
WHERE Data_de_lançamento < "2022-01-31" AND 
      (titulo LIKE "%TERMO DE BUSCA%" OR
      Sinopse LIKE "%TERMO DE BUSCA%") AND Avaliação > 7;

