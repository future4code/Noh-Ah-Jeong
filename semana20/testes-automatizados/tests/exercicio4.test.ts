import { Casino, LOCATION, User, NACIONALITY, verifyAge } from "../src/exercicio3"

describe("Testing verifyAge", () => {
    test("Testing if brazilian user can enter a casino in Brazil", () => {
        const casino: Casino = {
            name: "Casino BR",
            location: LOCATION.BRAZIL
        }

        const brazilian: User = {
            name: "Zé",
            age: 18,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const result = verifyAge(casino, [brazilian])

        expect(result.brazilians.allowed).toEqual(["Zé"])
    })

    test("Testing if american user can enter a casino in Brazil", () => {
        const casino: Casino = {
            name: "Casino BR",
            location: LOCATION.BRAZIL
        }

        const american: User = {
            name: "John",
            age: 18,
            nacionality: NACIONALITY.AMERICAN
        }

        const result = verifyAge(casino, [american])

        expect(result.americans.allowed).toEqual(["John"])
    })

    test("Testing if 19 years old american and 19 years old brazilian users can enter a casino in America", () => {
        const casino: Casino = {
            name: "Casino EUA",
            location: LOCATION.EUA
        }

        const brazilian1: User = {
            name: "Zé",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const brazilian2: User = {
            name: "Má",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const american1: User = {
            name: "John",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }
        const amreican2: User = {
            name: "Mary",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }

        const result = verifyAge(casino, [brazilian1, brazilian2, american1, amreican2])

        expect(result.brazilians.unallowed).toEqual(["Zé", "Má"])
        expect(result.americans.unallowed).toEqual(["John", "Mary"])
    })

    test("Testing if 21 years old american and 19 years old brazilian users can enter a casino in America", () => {
        const casino: Casino = {
            name: "Casino EUA",
            location: LOCATION.EUA
        }

        const brazilian1: User = {
            name: "Zé",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const brazilian2: User = {
            name: "Má",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const american1: User = {
            name: "John",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }
        const amreican2: User = {
            name: "Mary",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }

        const result = verifyAge(casino, [brazilian1, brazilian2, american1, amreican2])

        expect(result.brazilians.unallowed).toEqual(["Zé", "Má"])
        expect(result.americans.allowed).toEqual(["John", "Mary"])
    })
})