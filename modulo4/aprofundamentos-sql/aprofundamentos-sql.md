### Exercício 1
a) Exlui a coluna "salary" da tabela de atores.
b) Muda o nome da coluna "gender" para "sex" para string com 6 caracteres.
c) Altera a coluna "gender" para string com 255 caracteres .
d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### Exercício 2
a) 
```
UPDATE Actor
SET 
name = "Moacyr Franco"
birth_date = "2022-02-01"
WHERE id = "003";
```
b)
```
UPDATE Actor
SET 
name = "Juliana Paes"
WHERE name = "Juliana Paes";
```
```
UPDATE Actor
SET 
name = "Juliana Paes"
WHERE name = "JULIANA PAES";
```
C)
```
UPDATE Actor
SET 
name = "Robson",
birth_date = "2021-02-01",
salary = 600,
gender = "male"
WHERE id = "005";
```
d) No output do Workbench apareceu uma mensagem de update com as informações adicionadas, porém não constou nenhuma "row" com match e alterada.

### Exercício 3
a)
```
DROP from actor WHERE name = "Fernanda Montenegro";
```
b)
```
DROP from actor
WHERE
gender = "male" AND
salary > 1000000;
```
### Exercício 4
a)
```
SELECT MAX(salary) from actor;
```
b)
```
SELECT min(salary) from actor
WHERE gender = "female";
```
c)
````
SELECT COUNT(*) from actor
WHERE gender = "female";
````
d)
````
SELECT SUM(salary) from actor;
````
### Exercício 5
a) 
````
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
````
A query acima agrupa os elementro da coluna "gender" e mostra quantos a somatória dos elementos.
b)
````
SELECT id, name FROM Actor
ORDER BY name DESC
````
c)
````
SELECT name FROM Actor
ORDER BY salary
````
d)
````
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3
````
e)
````
SELECT AVG(salary), gender FROM Actor
GROUP BY gender
````
### Exercício 6
a)
````
ALTER TABLE Filmes ADD data_limite DATE;
````
b)
````
Alter TABLE Filmes Change avaliação avaliação FLOAT;
````
c)
````
UPDATE Filmes
SET
data_limite = "2021-03-01"
WHERE id = "001"
````
````
UPDATE Filmes
SET
data_limite = "2021-01-31"
WHERE id = "001"
````
d)
````
DELETE FROM Filmes WHERE ID = "001"
````
Aparece que atualizou a coluna a qual deseja-se atualizar o dado, porém não deu match com nenhuma row, com isso não houve alterações.