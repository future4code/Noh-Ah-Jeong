const printNumbersCrescent = (n) => {
    if (n >= 0) {
        printNumbersCrescent(n - 1)
        console.log(n)
    }
}

const printNumbersDecrescent = (n) => {
    if (n >= 0) {
        console.log(n)
        printNumbersCrescent(n - 1)
    }
}