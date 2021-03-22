import { getMissingNumber } from '../numeroFaltante'

const completeArray: number[] = []
for (let index = 1; index <= 100; index++) {
    completeArray.push(index)
}

describe(`Testing getMissingNumber`, () => {
    test('Should return 0 when there is no missing number', () => {
        const result = getMissingNumber(completeArray)

        expect(result).toEqual(0)
    })

    test('Should return 47', () => {
        completeArray.splice(completeArray.indexOf(47), 1)

        const result = getMissingNumber(completeArray)

        expect(result).toEqual(47)
    })
})