const compressString = (input) => {
    let inputChar = input[0];
    let charCount = 0;
    const charArray = [];
    for (let currentChar of input) {
        if (currentChar !== inputChar) {
            charArray.push(inputChar + charCount);
            inputChar = currentChar;
            charCount = 0;
        }
        charCount++;
    }
    charArray.push(inputChar + charCount);
    let result = '';
    for (let key of charArray) {
        result += key;
    }
    return result.length > input.length ? input : result;
};
console.log(compressString('aabbb'));
console.log(compressString('aabcccccaaa'));
console.log(compressString('accurate'));
console.log(compressString('escola'));
console.log(compressString('accuraaaaaaaaaate'));
