exercícios de herança

1a) Não, pois o password é encapsulado com private e não há um getter para o mesmo.
1b) Apenas uma.
2a) A mensagem apareceu uma vez.
2b) A mensagem apareceu duas vezes.
3a) Não, pois não há um metodo getter para adquirir o valor da senha e o encapsulamento private também não permite que esse valor seja adquirido por outros metódos que não estejam na classe paterna.

exercícios de polimorfismo

1a) Foi possível imprimir tudo do client com exceção do "calculateBill" devido a ser uma função.
2a) Deu o erro src/index.ts:119:18 - error TS2511: Cannot create an instance of
an abstract class.
119 const newPlace = new Place("03114-000")
2b) Poderia ser implementado um constructor de uma classe filha invocando-a com o super.
4a) Possui os metodos getCpf, calculateBill e getDwellersQuantity. Porque as duas primeiras é da sua classe e a última respectivamente é herdada da classe paterna.
5a) name, registrationnNumber, consumedEnergy e o método calculateBill.
5b) Aó invés de cpf a client possui CNPJ, floorsQuantity ao invés de residentsQuantity e o fator de multiplicação de energia é 0.53 ao invés de 0.75.
6a) Deve ser filha de industry pois irá receber herança da classe.
6b) implementa client pois também irá possuir CNPJ e andares.
6c) Por questão de segurança da informação