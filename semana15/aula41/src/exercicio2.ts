// a. A entrada da função 'obterEstatisticas' é 'numeros' e a saída 'estatisticas'
// b. Outras variáveis são: 'numerosOrdenados', 'a', 'b', 'soma'
function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados: number[] = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: { maior: number, menor: number, media: number } = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// c.
type amostra = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => { maior: number, menor: number, media: number }
}