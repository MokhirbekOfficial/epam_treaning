// Task 1
const str = "ahb acb aeb aeeb adcb axeb"
const re = /a[a-z]b/g
console.log(str.match(re))

//Task 2
const str2 = "2 + 3 223 2223"
const re2 = /2 [+] 3/g
console.log(str2.match(re2))

//Task 3
const date = new Date()
console.log(date.getDate() + "." + String(date.getMonth() + 1) + "." + date.getFullYear())


