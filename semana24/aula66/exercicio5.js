const getNumberDigits = (n, digits = 1) => {
    console.log("n", n, 'digits', digits)
    let numberString = n.toString()

    if (numberString.length === 1) {
        return digits
    }

    getNumberDigits(numberString.substr(1), digits + 1)
}

// console.log(getNumberDigits(0))
// console.log(getNumberDigits(10))
console.log(getNumberDigits(2034))