const factorial = (num) => {
    if (num < 0) {
        return "Number should be a positive number"
    } else if (num === 1 || num === 0) {
        return 1
    } else {
        return num * factorial(num - 1)
    }
}

console.log(factorial(5))