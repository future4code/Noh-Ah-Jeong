// Exercícios de interpretação de código
// EXERCÍCIO 1
    // O teste é para ver se o número tem como resto da divisão por 2 como 0, em outras palavras, se o número é par ou ímpar. O código imprime "Passou no teste" para os números pares e "Não passou no teste" para os números ímpares.

// EXERCÍCIO 2
    // a. O código imprime o preço correspondente à fruta que foi escolhida pelo usuário.

    // b. O preço da fruta Maçã é R$ 2.25

    // c. O preço da fruta Pêra é R$ 5

// EXERCÍCIO 3
    // a. O código da primeira linha está armazenando o que o usuário digitar como variável 'numero' e a transformando em uma variável do tipo number.

    // b. Se foi digitado 10 -> Esse número passou no teste. Se foi digitado -10 ->
    
    // c. Haverá um erro na execução da última linha pois a variável 'mensagem' está dentro de um escopo e o código fora dela.

// Exercícios de escrita de código
// EXERCÍCIO 4
    // const idade = Number(prompt("Qual a sua idade?"))
    // if (idade >= 18) {
    //     console.log("Você pode dirigir")
    // } else {
    //     console.log("Você não pode dirigir.")
    // }

// EXERCÍCIO 5
    // const turno = prompt("Qual turno do dia você estuda? Digite, em maiúsculo, 'M' para matutino, 'V' para vespertino ou 'N' para noturno.")
    // if (turno === "M") {
    //     console.log("Bom Dia!")
    // } else if (turno === "V") {
    //     console.log("Bom Tarde!")
    // } else if (turno === "N") {
    //     console.log("Bom Noite!")
    // }

// EXERCÍCIO 6
    // const turno = prompt("Qual turno do dia você estuda? Digite, em maiúsculo, 'M' para matutino, 'V' para vespertino ou 'N' para noturno.")
    // switch (turno) {
    //     case "M":
    //         console.log("Bom Dia!")
    //         break
    //     case "V":
    //         console.log("Bom Tarde!")
    //         break
    //     case "N":
    //         console.log("Bom Noite!")
    //         break
    // }

// EXERCÍCIO 7
    // const genero = prompt("Qual o gênero do filme que você pretende asstir?").toLowerCase()
    // const preco = Number(prompt("Quanto é o ingresso desse filme?"))
    // const condicao = (genero === "fantasia") && (preco < 15)
    // if (condicao) {
    //     console.log("Bom filme!")
    // } else {
    //     console.log("Escolha outro filme :(")
    // }

// DESAFIO 1
    // const genero = prompt("Qual o gênero do filme que você pretende asstir?").toLowerCase()
    // const preco = Number(prompt("Quanto é o ingresso desse filme?"))
    // const condicao = (genero === "fantasia") && (preco < 15)
    // if (condicao) {
    //     const SNACK = prompt("Qual snack que você quer comprar?")
    //     console.log("Bom filme!")
    //     console.log("... com " + SNACK)
    // } else {
    //     console.log("Escolha outro filme :(")
    // }

// DESAFIO 2
    const nome = prompt("Informe o seu nome completo")
    let tipo = prompt("Qual o tipo de jogo: 'IN' (internacional) ou 'DO' (doméstico)?").toUpperCase()
    let etapa = prompt("Qual a etapa do jogo: 'SF' (semi-final), 'DT' (decisão do terceiro lugar) ou 'FI' (final)?").toUpperCase()
    const categoria = prompt("Qual categoria: 1, 2, 3 ou 4?")
    const quantidade = Number(prompt("Quantos ingressos?"))
    let ingresso
    switch (categoria) {
        case "1":
            switch (etapa) {
                case "SF":
                    ingresso = 1320
                    etapa = "Semi-final"
                break
                case "DT":
                    ingresso = 660
                    etapa = "Decisão do terceiro lugar"
                break
                case "FI":
                    ingresso = 1980
                    etapa = "Final"
                break
            }
        case "2":
            switch (etapa) {
                case "SF":
                    ingresso = 880
                    etapa = "Semi-final"
                break
                case "DT":
                    ingresso = 440
                    etapa = "Decisão do terceiro lugar"
                break
                case "FI":
                    ingresso = 1320
                    etapa = "Final"
                break
            }
        case "3":
            switch (etapa) {
                case "SF":
                    ingresso = 550
                    etapa = "Semi-final"
                break
                case "DT":
                    ingresso = 330
                    etapa = "Decisão do terceiro lugar"
                break
                case "FI":
                    ingresso = 220
                    etapa = "Final"
                break
            }
        case "4":
            switch (etapa) {
                case "SF":
                    ingresso = 220
                    etapa = "Semi-final"
                break
                case "DT":
                    ingresso = 170
                    etapa = "Decisão do terceiro lugar"
                break
                case "FI":
                    ingresso = 330
                    etapa = "Final"
                break
            }
    }

    let total
    switch (tipo) {
        case "IN":
            tipo = "Internacional"
            total = ingresso * quantidade / 4.10
            console.log("---Dados da compra---")
            console.log("Nome do cliente: " + nome)
            console.log("Tipo de jogo: " + tipo)
            console.log("Etapa do jogo: " + etapa)
            console.log("Categoria: " + categoria)
            console.log("Quantidade de Ingressos: " + quantidade + " ingressos")
            console.log("---Valores--- ")
            console.log("Valor do ingresso: U$ " + ingresso)
            console.log("Valor total: U$ " + total)
            break;
    
            case "DO":
            tipo = "Nacional"
            total = ingresso * quantidade
            console.log("---Dados da compra---")
            console.log("Nome do cliente: " + nome)
            console.log("Tipo de jogo: " + tipo)
            console.log("Etapa do jogo: " + etapa)
            console.log("Categoria: " + categoria)
            console.log("Quantidade de Ingressos: " + quantidade + " ingressos")
            console.log("---Valores--- ")
            console.log("Valor do ingresso: R$ " + ingresso)
            console.log("Valor total: R$ " + total)
            break;
    }