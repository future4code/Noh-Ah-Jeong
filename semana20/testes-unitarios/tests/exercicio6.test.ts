import { Character } from "../src/exercicio1"
import { performAttackDI } from "../src/exercicio3"

describe("Testing more performAttack", () => {
    test("Should overkill defender", () => {
        const validatorMock = jest.fn(() => {
            return true
        })

        const attacker: Character = {
            name: "Goku",
            health: 1500,
            strength: 8500,
            defense: 400
        }

        const defender: Character = {
            name: "Vegeta",
            health: 1500,
            strength: 400,
            defense: 300
        }

        performAttackDI(attacker, defender, validatorMock)

        expect(defender.health).toBeLessThan(0)
    })

    test("Should not perform attack when attack is less than defense", () => {
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
            defense: 8500
        }

        performAttackDI(attacker, defender, validatorMock)

        expect(defender.health).toEqual(1500)
    })

    test("Should not perform attack when attack equals to defense", () => {
        const validatorMock = jest.fn(() => {
            return true
        })

        const attacker: Character = {
            name: "Goku",
            health: 1500,
            strength: 8500,
            defense: 400
        }

        const defender: Character = {
            name: "Vegeta",
            health: 1500,
            strength: 400,
            defense: 8500
        }

        performAttackDI(attacker, defender, validatorMock)

        expect(defender.health).toEqual(1500)
    })

    test("Should not perform Attack when validator is false", () => {
        const validatorMock = jest.fn(() => {
            return false
        })

        const attacker: Character = {
            name: "Goku",
            health: 1500,
            strength: 8500,
            defense: 400
        }

        const defender: Character = {
            name: "Vegeta",
            health: 1500,
            strength: 400,
            defense: 8500
        }

        try {
            performAttackDI(attacker, defender, validatorMock)
        } catch (error) {
            expect(defender.health).toEqual(1500)
        }
    })
})