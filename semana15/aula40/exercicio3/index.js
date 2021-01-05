const TaskArray = ["Lavar a Louça"]
const newTask = process.argv[2]

if (newTask) {
    TaskArray.push(`\n${newTask}`)

    console.log('\x1b[36m%s\x1b[0m', `Tarefa adicionada com sucesso!\n`)
    console.log('\x1b[32m%s\x1b[0m', `tarefas: [\n${TaskArray}\n]`)
} else {
    console.log('\x1b[31m%s\x1b[0m', "Digite uma tarefa!")
}