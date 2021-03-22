/*  Implemente uma função que receba um array (ordenado ou não) com números de 1 a 100.
    Você sabe que, nesse array, está faltando apenas um número dentro desse intervalo.
    A sua função deve retornar o número faltante. */

export const getMissingNumber = (array: number[]): number => {
    const expectedSum: number = 5050

    let sum: number = 0

    for (let number of array) {
        sum += number
    }

    return (expectedSum - sum)
}