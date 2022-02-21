### Exercício 1
<p>
a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?
</p>
<p>
Resposta: Sim, pois se torna mais fácil a manipulação desses dados e podemos utilizar métodos de string.
</p>


<p>
b) A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.
</p>
<p>
Resposta: Função criada em services
</p>

### Exercício 2
<p>
a) Explique o código acima com as suas palavras.
</p>
<p>
Resposta: O código usa o knex e dotenv para estabelecer uma conecção com a tabela "User" no MySQL e faz a inserção de um usuiário na mesma passando os valores de ID, email e senha.
</p>

<p>
b) Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.
</p>

````
CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
````

<p>
c) Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.
</p>

### Exercício 3

<p>
a) O que a linha as string faz? Por que precisamos usar ela ali?
</p>

<p>
Resposta: Serve para garantir dado vindo do dotenv seja uma string padrão
</p>
