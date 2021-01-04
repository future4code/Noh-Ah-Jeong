const operation = process.argv[2]
const firstNumber = Number(process.argv[3])
const secondNumber = Number(process.argv[4])

switch (operation) {
    case "add":
        calc = firstNumber + secondNumber
        break;
    case "sub":
        calc = firstNumber - secondNumber
        break;
    case "mult":
        calc = firstNumber * secondNumber
        break;
    case "div":
        calc = firstNumber / secondNumber
        break;
    default:
        calc = "Digite uma operação válida"
        break;
}

if (firstNumber && secondNumber) {
    console.log('\x1b[36m%s\x1b[0m', `Resposta: ${calc}`)
} else (
    console.log('\x1b[31m%s\x1b[0m', `Digite uma operação e dois números`)
)