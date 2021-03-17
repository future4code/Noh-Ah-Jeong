const calcSum = (n, sum = 0) => {
    if (n <= 0) {
        return sum
    }

    return calcSum(n - 1, sum + n)
}