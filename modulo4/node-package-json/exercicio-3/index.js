const tarefa = process.argv[2]

const listaTarefas = [
    "Comprar pão",
    "Estudar",
    "Beber água"
]

    listaTarefas.push(tarefa)

console.log(`Tarefas:${listaTarefas}`)