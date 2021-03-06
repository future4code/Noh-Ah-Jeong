// Exercícios de interpretação de código

// EXERCÍCIO 1
/*
O código está somando os valores que a variável i pode assumir (0, 1, 2, 3, 4)
resultado impresso:
    10
*/

// EXERCÍCIO 2
/*
a. 19 21 23 25 27 30
b. Não é suficiente pois necessitaria criar uma variável referente ao índice.
*/

// DESAFIO 1
/*
0
00
000
0000
*/

// Exercícios de escrita de código

// EXERCÍCIO 3
// a.
/*
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for (let valor of array) {
    console.log(valor)
}
*/

// b.
/*
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for (let valor of array) {
    console.log(valor / 10)
}
*/

// c.
/*
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const arrayNovo = []
for (let valor of array) {
    if (valor % 2 === 0) {
    arrayNovo.push (valor)
    }
}
console.log(arrayNovo)
*/

// d.
/*
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const arrayNovo = []
for (let i = 0; i < array.length; i++) {
    arrayNovo.push ("O elemento do índex " + i + " é: " + array [i])
}
console.log(arrayNovo)
*/

// e.
/*
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let valorMaximo = array [0]
let valorMinimo = array [0]
for (let valor of array) {
    if (valor > valorMaximo) {
        valorMaximo = valor
    } else if (valor < valorMinimo) {
        valorMinimo = valor
    }
}
console.log("O maior número é " + valorMaximo + " e o menor é " + valorMinimo)
*/

// DESAFIO 2
/*
let numeroEscolhido = Number(prompt("Jogador 1: Pense e digite um número"))
console.log("Vamos jogar!")

let chute = Number(prompt("Jogador 2: Tente acertar o número escolhido pelo Jogador 1"))
console.log("O número chutado foi: " + chute)

let tentativas = 1

while (chute !== numeroEscolhido) {
    if (chute > numeroEscolhido) {
        console.log("Errou. O número escolhido é menor")
    } else if (chute < numeroEscolhido) {
        console.log("Errou. O número escolhido é maior")
    }
    tentativas++
    chute = Number(prompt("Jogador 2: Tente acertar mais uma vez o número escolhido pelo Jogador 1"))
    console.log("O número chutado foi: " + chute)
}

console.log("Acertou!!")
console.log("O número de tentativas foi: " + tentativas)
*/

// DESAFIO 3
/*
let numeroEscolhido = Math.floor(Math.random()*100)
console.log("Vamos jogar!")

let chute = Number(prompt("Tente acertar o número escolhido aleatoriamente"))
console.log("O número chutado foi: " + chute)

let tentativas = 1

while (chute !== numeroEscolhido) {
    if (chute > numeroEscolhido) {
        console.log("Errou. O número escolhido é menor")
    } else if (chute < numeroEscolhido) {
        console.log("Errou. O número escolhido é maior")
    }
    tentativas++
    chute = Number(prompt("Tente acertar mais uma vez o número"))
    console.log("O número chutado foi: " + chute)
}

console.log("Acertou!!")
console.log("O número de tentativas foi: " + tentativas)
// Foi fácil fazer a alteração com a referência dada no desafio.
*/