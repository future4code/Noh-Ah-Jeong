import { indexOf } from '../indexOf'

describe('Testing indexOf', () => {
    test('Should return the first encounter', () => {
        const result = indexOf('ovo', 'o')

        expect(result).toEqual(0)
    })

    test('Should return "-1" when not found', () => {
        const result = indexOf('ovo', 'a')

        expect(result).toEqual(-1)
    })
})