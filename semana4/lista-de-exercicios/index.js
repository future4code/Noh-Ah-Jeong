// Exercícios de interpretação de código
/* 1.
    Através de uma função, é feita uma conversão de um valor em dólar para real.
    Na função 'conversorDeMoeda', é obtida o valor em dólar a ser convertido por meio de prompt e conversão do mesmo em number na variável 'cotacao'. A função retorna o valor obtido multiplicado pelo input da função 'valorEmDolar'. E a função é invocada e armazenada na variável 'meuDinheiro' com o valor '100' como input.
    Por fim, é impresso no console o valor do 'meuDinheiro', que é algo do tipo:
    R$(input do usuário multiplicado por 100)
*/

/* 2.
    Através de uma função, é calculada o montante de um valor de acordo com o tipo de investimento.
    A função 'investeDinheiro' recebe como input as variáveis 'tipoDeInvestimento' e 'valor', e contém uma condicional do tipo switch que seleciona o cálculo a ser feito de acordo com o input 'tipoDeInvestimento' declarado na invocação da função. A função retorna a variável 'valorAposInvestimento' que é o cálculo feito na condicional, multiplicando o input 'valor' pelo respectivo rendimento.
    No código, a função é invocada na variável 'novoMontante' com o input "Ações" e '150', e também na variável 'segundoMontante' com os inputs "Tesouro Direto" e '200'. No último caso o input "Tesouro Direto" não está definido nas condicionais o que retorna um alert com a mensagem "TIPO DE INVETIMENTO INFORMADO INCORRETO!"
    Será impresso no console:
    165
*/

/* 3.
    O código trabalha com 3 arrays 'numeros' 'array1' e 'array2'. Através de um loop for com condicionais if/else os elementos pares do array 'numeros' são adicionados ao 'array1' através do push e os elementos ímpares no 'array2'.
    No console será impresso:
    Quantidade total de números 14
    6
    8
*/

/* 4.
    O código percorre cada elemento do array 'numeros' através do loop for of e verifica se são menores que 'numero1' ou maiores que 'numero2'.
    Se o elemento 'numero' for menor que 'numero1', a variável 'numero1' passa a assumir o valor do elemento.
    Se o elemento 'numero' foi maior que 'numero2', a variável 'numero2' passa a assumir o valor do elemento.
    Inicialmente 'numero1' vale Infinity e 'numero2' vale 0.
    No final, a variável 'numero1' terá o valor do menor elemento e a variável 'numero2' do maior elemento
    Será impresso no console:
    -10
    283
*/

// Exercícios de Lógica de Programação
/* 1.
    Para percorrer uma lista, const pokemons = ["Bulbasaur", "Squirtle", "Charmander"], podemos usar:

    - loop for
    for (let i = 0; i < pokemons.length; i++) { }

    - loop for of
    for (let pkmn of pokemons) { }

    - callback forEach
    pokemons.forEach((pkmn) => { })
*/

/* 2.
    a) false
    b) false
    c) true
    d) true
    e) true
*/

/* 3.
// O código não funciona porque não há uma atribuição do número N para a variável quantidadeDeNumerosPares, a condicional pega uma quantidade maior de numeros pares e não há um incremento para a variável 'i'.
const quantidadeDeNumerosPares = prompt("Digite um número")
let i = 0
while(i < quantidadeDeNumerosPares) {
  console.log(i*2)
  i++
}
*/

/* 4.
    let verificaTriangulo = (a, b, c) => {
        if ((a === b) && (b === c) && (a === c)) {
            return "Equilátero"
        } else if ((a !== b) && (b !== c) && (a !== c)) {
            return "Escaleno"
        } else {
            return "Isósceles"
        }
    }
*/

/* 5.
    let maior
    let aDivisivel
    let bDivisivel
    let diferença
    let verificaTudo = (a, b) => {
        if (a > b) {
            maior = a
        } else if (a < b) {
            maior = b
        } else {
            maior = "Não tem"
        }
        console.log(maior)

        if (a % b === 0) {
            aDivisivel = a + " é divisível por " + b
        } else {
            aDivisivel = a + " não é divisível por " + b
        }
        console.log(aDivisivel)

        if (b % a === 0) {
            bDivisivel = b + " é divisível por " + a
        } else {
            bDivisivel = b + " não é divisível por " + a
        }
        console.log(bDivisivel)

        if ((a - b) >= 0) {
            diferença = a - b
        } else {
            diferença = (a - b) * (-1)
        }
        console.log(diferença)
    }
    verificaTudo (5, 55)
*/

// Exercícios de Funções
/* 1.
    let arrayOriginal = [45, 645, 23, 326, 49]

    let pegarSegundoMaiorMenor = (lista) => {
        let arrayCopia = lista

        let primeiroMaior = lista[0]
    
        for (let elemento of lista) {
            if (elemento > primeiroMaior) {
                primeiroMaior = elemento
            }
        }
    
        let i = lista.indexOf(primeiroMaior)
        let maiorNumero = arrayCopia.splice(i, 1)

        let segundoMaior = arrayCopia[0]
    
        for (let elemento of arrayCopia) {
            if (elemento > segundoMaior) {
                segundoMaior = elemento
            }
        }

        console.log(segundoMaior)

        arrayCopia = lista

        let primeiroMenor = lista[0]
    
        for (let elemento of lista) {
            if (elemento < primeiroMenor) {
                primeiroMenor = elemento
            }
        }
    
        i = lista.indexOf(primeiroMenor)
        arrayCopia.splice(i, 1)
        
        let segundoMenor = lista[0]
    
        for (let elemento of lista) {
            if (elemento < segundoMenor) {
                segundoMenor = elemento
            }
        }

        console.log(segundoMenor)
    }

    pegarSegundoMaiorMenor(arrayOriginal)
*/

/* 2.
    let criaAlert = () => {
    alert("Hello Future4")
    }
    criaAlert()
*/

// Exercícios de Objetos
/* 1.
    Arrays são um conjunto de elementos ordenados nos quais os elementos podem assumir o valor de uma variável.
    Objetos são semelhantes aos arrays mas seus elementos são objetos que por sua vez podem receber parâmetros. Cada parâmetro é constituído de uma chave e o seu valor.
    Arrays são recomendados quando queremos uma lista de variáveis simples. Objetos são recomendados para criar uma lista de variáveis mais complexas.
*/

/* 2.
    let criaRetangulo = (lado1, lado2) => {
        return retangulo = {
            largura: lado1, altura: lado2, perimetro: (2 * (lado1 + lado2)), area: (lado1 * lado2)
        }
    }
*/

/* 3.
    const filmeFavorito = {
        titulo: "The Lord of the Rings: The Fellowship of the Ring", ano: 2001, diretor: "Peter Jackson", atoresAtrizes: ["Elijah Wood", "Ian McKellen", "Andy Serkis", "Sean Astin"]
    }

    console.log("Venha assistir ao filme " + filmeFavorito.titulo + ", de " + filmeFavorito.ano + ", dirigido por " + filmeFavorito.diretor + " e estrelado por " + filmeFavorito.atoresAtrizes)
*/

/* 4.
    const umaPessoa = {
        nome: "Noh Ah Jeong", idade: 27, email: "noh_ah@hotmail.com", endereco: "São Paulo"
    }
    
    let anonimizarPessoa = () => {
        const nomeAnonimo = {
            ...umaPessoa,
            nome: "ANÔNIMO"
        }
        return nomeAnonimo
    }
        
    console.log(umaPessoa)
    console.log(anonimizarPessoa())
*/

// Exercícios de Funções de array
/* 1. a
    const somenteAdultos = array.filter((pessoas) => {
        if (pessoas.idade >= 20) {
        return true
        }
        return false
    })
*/

/* 1. b
    const somenteJovens = array.filter((pessoas) => {
        if (pessoas.idade < 20) {
        return true
        }
        return false
    })
*/

/* 2. a
const array = [1, 2, 3, 4, 5, 6]

let duplicaElemento = (lista) => {
    let arrayDuplicado = []

    lista.forEach((elemento) => {
        arrayDuplicado.push(elemento * 2)
    })

    return arrayDuplicado
}
console.log(duplicaElemento(array))
*/

/* 2. b
const array = [1, 2, 3, 4, 5, 6]

let triplicaElementoTexto = (lista) => {
    let arrayTriplicado = []

    lista.forEach((elemento) => {
        arrayTriplicado.push(String(elemento * 3))
    })

    return arrayTriplicado
}
console.log(triplicaElementoTexto(array))
*/

/* 2. c
const array = [1, 2, 3, 4, 5, 6]

let verificaParOuImpar = (lista) => {
    let arrayVerificado = []

    lista.forEach((elemento) => {
        if (elemento % 2 === 0) {
            arrayVerificado.push(elemento + " é par")
        } else {
            arrayVerificado.push(elemento + " é ímpar")
        }  
    })

    return arrayVerificado
}
console.log(verificaParOuImpar(array))
*/

/* 3.
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

const pessoasPermitidas = pessoas.filter((pessoa) => {
    if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
        return true
    }
    return false
    })

console.log(pessoasPermitidas)
*/

/* 3.
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

const pessoasNaoPermitidas = pessoas.filter((pessoa) => {
    if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
        return false
    }
    return true
    })

console.log(pessoasNaoPermitidas)
*/

/* 4.
const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

let arrayDeEmails = []
consultas.forEach((pessoa) => {
    if (pessoa.genero === "masculino") {
        arrayDeEmails.push(`Olá, Sr. ${ pessoa.nome }. Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia ${ pessoa.dataDaConsulta }. Por favor, acuse o recebimento deste e-mail.`)
    } else {
        arrayDeEmails.push(`Olá, Sra. ${ pessoa.nome }. Estamos enviando esta mensagem para lembrá-la da sua consulta no dia ${ pessoa.dataDaConsulta }. Por favor, acuse o recebimento deste e-mail.`)
    }  
})

console.log(arrayDeEmails)

let arrayDeEmailsCancelados = []
consultas.forEach((pessoa) => {
    if (pessoa.genero === "masculino") {
        arrayDeEmailsCancelados.push(`Olá, Sr. ${ pessoa.nome }. Infelizmente, sua consulta marcada para o dia ${ pessoa.dataDaConsulta } foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`)
    } else {
        arrayDeEmailsCancelados.push(`Olá, Sra. ${ pessoa.nome }. Infelizmente, sua consulta marcada para o dia ${ pessoa.dataDaConsulta } foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`)
    }  
})

console.log(arrayDeEmailsCancelados)

*/

/* 5.
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

let atualizaSaldoTotal = (lista) => {
    lista.forEach((conta) => {
        let totalDeCompras = 0
        for (let compra of conta.compras) {
            totalDeCompras = totalDeCompras + compra
        }
        conta.saldoTotal = conta.saldoTotal - totalDeCompras
    })
    return contas
}

console.log(atualizaSaldoTotal(contas))
*/