import { User, performPurchase } from '../src/exercicio1'

describe("Testing performPurchase", () => {
    test("Testing if user balance is greater than purchase value", () => {
        const user = {
            name: "Fulano",
            balance: 8000
        }
        const result = performPurchase(user, 5)

        expect(result).toEqual({
            ...user,
            balance: 8000 - 5
        })
    })
})