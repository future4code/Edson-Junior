// 1a) O constructor serve para "tipar" o novo elemento da classe de "UserAccount". Para chamá-lo devenos declarar uma nova varíavel e em sua sintaxe usar o termo "new" e passar os valores para ser um novo elementro da clase "UserAccount"


class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    public getUsersAccount() {
        return (
            this.cpf,
            this.name,
            this.age
        )
    }

    public setUsersAccount(
        cpf: string,
        name: string,
        age: number,
    ) {
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    public setTransaction(
        transactions: Transaction
    ) {
        this.transactions.push(transactions)
    }

}

class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(
        description: string,
        value: number,
        date: string
    ) {
        this.description = description;
        this.value = value;
        this.date = date;
    }

    public getTransaction() {
        return (
            this.description,
            this.value,
            this.date
        )
    }
}

class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }

    public getAccouts() {
        return this.accounts
    }
    public setAccouts(
        accounts: UserAccount
        ) {
            this.accounts.push(accounts)
        }

}
  

const newUser = new UserAccount(
    "365.548.987-48",
    "Rogério",
    56
)
const newUser1 = new UserAccount(
    "365.548.987-49",
    "Lindovaldo",
    60
)

const newTransaction = new Transaction(
    "Conta de luz",
    263,
    "13-02-2022"
)

newUser.setTransaction(newTransaction)
const bank = new Bank([newUser,newUser1])

console.log(newTransaction)
console.log(newUser)
console.log(bank)

// 1b) a mensagem apareceu uma vez

// 1c) através de getters publicos que criamos na classe
