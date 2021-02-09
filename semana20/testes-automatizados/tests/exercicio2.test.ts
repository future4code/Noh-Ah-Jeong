import { User, performPurchase } from '../src/exercicio1'

describe("Testing performPurchase", () => {
    test("Testing if user balance is greater than purchase value", () => {
        const user: User = {
            name: "Fulano",
            balance: 8000
        }
        const result = performPurchase(user, 5)

        expect(result?.balance).toBeGreaterThan(0)
    })

    test("Testing if user balance is equal to purchase value", () => {
        const user: User = {
            name: "Fulano",
            balance: 8000
        }
        const result = performPurchase(user, 8000)

        expect(result?.balance).toEqual(0)
    })

    test("Testing if user balance is less than purchase value", () => {
        const user: User = {
            name: "Fulano",
            balance: 5
        }
        const result = performPurchase(user, 8000)

        expect(result?.balance).toEqual(undefined)
    })
})