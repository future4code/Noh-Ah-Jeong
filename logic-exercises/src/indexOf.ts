/* O objetivo desse challenge é te fazer pensar como um método que a gente usa bastante com strings: '.indexOf'. Escreva uma função que simule o seu comportamento (sem utilizar esse método na sua implementação), que receba uma string 'source' e um caracter que se deseja encontrar nela 'query' e devolva o index em que esse caracter aparece pela primeira vez */

export const indexOf = (source: string, query: string) => {
    const matchedIndexes = []

    for (let index = 0; index < source.length; index++) {
        if (source[index] == query) {
            matchedIndexes.push(index)
        } else {
            matchedIndexes.push(-1)
        }
    }

    return matchedIndexes[0]
}