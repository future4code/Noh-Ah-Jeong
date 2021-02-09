import { validateCharacter } from "../src/exercicio1"

describe("Testing validateCharacter", () => {
    test("Should return false when name is ''.", () => {
        const result = validateCharacter({
            name: "",
            health: 1500,
            strength: 1,
            defense: 1
        })

        expect(result).toEqual(false)
    })

    test("Should return false when health is 0.", () => {
        const result = validateCharacter({
            name: "Goku",
            health: 0,
            strength: 1,
            defense: 1
        })

        expect(result).toEqual(false)
    })

    test("Should return false when strength is 0.", () => {
        const result = validateCharacter({
            name: "Goku",
            health: 1500,
            strength: 0,
            defense: 1
        })

        expect(result).toEqual(false)
    })

    test("Should return false when defense is 0.", () => {
        const result = validateCharacter({
            name: "Goku",
            health: 1500,
            strength: 1,
            defense: 0
        })

        expect(result).toEqual(false)
    })

    test("Should return false when health is negative.", () => {
        const result = validateCharacter({
            name: "Goku",
            health: -1500,
            strength: 1,
            defense: 1
        })

        expect(result).toEqual(false)
    })

    test("Should return true when all fields is valid.", () => {
        const result = validateCharacter({
            name: "Goku",
            health: 1500,
            strength: 500,
            defense: 500
        })

        expect(result).toEqual(true)
    })
})