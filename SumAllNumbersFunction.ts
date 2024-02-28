const sumDigits = (number) => Math.abs(number).toString().split('').reduce((sum, el) => +sum + +el, 0)

console.log(sumDigits(4), 'sumDigits')

function sumDigits1(num) {
    return String(num)
        .split('')
        .map(el => Number(el))
        .filter(Boolean)
        .reduce((sum, cur) => sum + cur, 0)
}

console.log(sumDigits1(99), 'sumDigits1')