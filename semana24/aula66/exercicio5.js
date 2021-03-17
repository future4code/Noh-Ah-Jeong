const getNumberDigits = (n, digits = 1) => {
    let numberString = n.toString()

    if (numberString.length === 1) {
        return digits
    }

    getNumberDigits(numberString.substr(1), digits + 1)
}