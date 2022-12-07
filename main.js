const str = 'hello'
const bln = true
const num = 11

// Perform addition of various types

console.log(str + bln) // hellotrue
console.log(str + num) // hello11
console.log(num + bln) // 12

// Perform multiplication of various types

console.log(str * bln) // NaN
console.log(str * num) // NaN
console.log(num * bln) // 11

// Divide different types

console.log(str / bln) // NaN
console.log(str / num) // NaN
console.log(num / bln) // 11

// Perform explicit conversion

console.log(Number('12')) // 12 number
console.log(String(12)) // 12 string
console.log(Boolean(1)) // true boolean


