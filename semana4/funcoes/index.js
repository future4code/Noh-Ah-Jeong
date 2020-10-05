// Exercícios de interpretação de código

// EXERCÍCIO 1
/*
a. 10
50

b. A função continuaria sendo executada mas nada apareceria no console.
*/

// EXERCÍCIO 2
/*
a. Darvas
Caio

b. Amanda
Caio
*/

// EXERCÍCIO 3
/*
O código verifica os elementos do arrayFinal que são pares e cria forma um novo array com o quadrado destes elementos.
Sugestão: metodo -> listaComQuadradoDosPares
*/

// Exercícios de escrita de código

// EXERCÍCIO 4 a.
/*
let mensagemApresentacao = () => {
    return console.log("Eu sou Noh Ah, tenho 27 anos, moro em São Paulo e não sou estudante.")
}
mensagemApresentacao()
*/

// EXERCÍCIO 4 b.
/*
let mensagemApresentacao = (nome, idade, cidade, estudante) => {
    if (estudante) {
        return console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e sou estudante.")
    } else {
        return console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e não sou estudante.")
    }
}
mensagemApresentacao("Goli", 23, "São Paulo", true)
*/

// EXERCÍCIO 5 a.
/*
let somaDeDoisNumeros = (a, b) => {
    return a + b
}
const soma = somaDeDoisNumeros(1, 8)
console.log(soma)
*/

// EXERCÍCIO 5 a.
/*
let primeiroMaiorOuIgual = (a, b) => {
    if (a >= b) {
        return true
    } else {
        return false
    }
}
const resultado = primeiroMaiorOuIgual(1, 8)
*/

// EXERCÍCIO 5 c.
/*
let imprimirDezMensagens = (mensagem) => {
    for (let i = 0; i < 10; i++) {
        console.log(mensagem)
    }
}
imprimirDezMensagens("Hello world")
*/

// EXERCÍCIO 6 a.
/*
let contadorDeElementosDaLista = (lista) => {
    return lista.length
}
contadorDeElementosDaLista([10, 23, 45, 78, 90, 52, 35, 67, 84, 22])
*/

// EXERCÍCIO 6 b.
/*
let verificarSePar = (numero) => {
    if (numero % 2 === 0) {
        return true
    } else {
        return false
    }
}
verificarSePar(10)
*/

// EXERCÍCIO 6 c.
/*
let contadorDeElementosDaLista = (lista) => {
    let listaDeNumeroPar = []

    for (let elemento of lista) {
        if (elemento % 2 === 0) {
            listaDeNumeroPar.push(elemento)
        }
    }

    return listaDeNumeroPar.length
}
contadorDeElementosDaLista([10, 23, 45, 78, 90, 52, 35, 67, 84, 22])
*/

// EXERCÍCIO 6 d.
/*
let verificarSePar = (numero) => {
    if (numero % 2 === 0) {
        return true
    } else {
        return false
    }
}

let contadorDeElementosDaLista = (lista) => {
    let listaDeNumeroPar = []

    for (let elemento of lista) {
        if (verificarSePar(elemento)) {
            listaDeNumeroPar.push(elemento)
        }
    }

    return listaDeNumeroPar.length
}
contadorDeElementosDaLista([10, 23, 45, 78, 90, 52, 35, 67, 84, 22])
*/

// Desafios

// EXERCÍCIO 1
/*
let imprimirParametro = (parametro) => {
    return console.log(parametro)
}

let somaDosParametros = (a, b) => {
    let soma = a + b

    imprimirParametro(soma)
}
*/

// EXERCÍCIO 2 a.
/*
let duplicarElementosPares = (lista) => {
    let listaDeNumerosPares = []

    for (let elemento of lista) {
        if (elemento % 2 === 0) {
            listaDeNumerosPares.push(elemento*2)
        }
    }

    return listaDeNumerosPares
}
duplicarElementosPares([0, 8, 23, 16, 10, 15, 41, 12, 13])
*/

// EXERCÍCIO 2 b.
/*
let pegarMaiorNumero = (lista) => {
    let maiorNumero = lista[0]

    for (let elemento of lista) {
        if (elemento > maiorNumero) {
            maiorNumero = elemento
        }
    }

    return maiorNumero
}
pegarMaiorNumero([0, 8, 23, 16, 10, 15, 41, 12, 13])
*/
// EXERCÍCIO 2 c.
/*
let pegarMaiorIndice = (lista) => {
    let maiorNumero = lista[0]
    let indiceDoMaiorNumero = 0
    
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > maiorNumero) {
            maiorNumero = lista[i]
            indiceDoMaiorNumero = i
        }
    }
    
    return indiceDoMaiorNumero
}
pegarMaiorIndice([0, 8, 23, 16, 10, 15, 41, 12, 13])

*/

// EXERCÍCIO 2 d.
/*
let inverterLista = (lista) => {
    const listaInvertida = []

    for (let i = (lista.length - 1); i >= 0; i--) {
        listaInvertida.push(lista[i])
    }
    
    return listaInvertida
}
inverterLista([0, 8, 23, 16, 10, 15, 41, 12, 13])
*/