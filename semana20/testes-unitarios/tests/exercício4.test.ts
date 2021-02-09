describe("Testing mocked validateCharacter", () => {
    test("Should return valid mocked character", () => {
        const validatorMock = jest.fn(() => {
            return true
        })
    })

    test("Should return invalid mocked character", () => {
        const validatorMock = jest.fn(() => {
            return false
        })
    })
})