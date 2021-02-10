import { Character } from "../src/exercicio1"
import { performAttackDI } from "../src/exercicio3"

describe("Testing performAttack", () => {
    test("Should perform attack", () => {
        const validatorMock = jest.fn(() => {
            return true
        })

        const attacker: Character = {
            name: "Goku",
            health: 1500,
            strength: 500,
            defense: 400
        }

        const defender: Character = {
            name: "Vegeta",
            health: 1500,
            strength: 400,
            defense: 300
        }

        performAttackDI(attacker, defender, validatorMock)

        expect(defender.health).toEqual(1300)
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toHaveBeenCalledTimes(2)
        expect(validatorMock).toHaveReturnedTimes(2)
    })

    test("Should return invalid character error", () => {
        const validatorMock = jest.fn(() => {
            return false
        })

        const attacker: Character = {
            name: "Goku",
            health: 1500,
            strength: 500,
            defense: 400
        }

        const defender: Character = {
            name: "Vegeta",
            health: 1500,
            strength: 400,
            defense: 300
        }

        try {
            performAttackDI(attacker, defender, validatorMock)
        } catch (error) {
            expect(error.message).toEqual("Invalid charcters")
            expect(validatorMock).toHaveBeenCalled()
            expect(validatorMock).toHaveBeenCalledTimes(1)
            expect(validatorMock).toHaveReturnedTimes(1)
        }
    })
})