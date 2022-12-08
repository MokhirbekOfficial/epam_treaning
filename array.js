// Task 1

const movies = ["Avengers", "Iron Man", "Avatar", "Hulk", "Sherlok Holms"]
movies.forEach(name => console.log(name))

// Task 2

const arr = ["c", "h", "e", "v", "r", "o", "l", "e", "t"]
const arr2 = []
const str = arr.join('')
console.log(str)
for(let i = 0; i<str.length; i++){
    arr2.push(str[i])
}
console.log(arr2)

// Task 3

const friends = ["Shakhzod", "Bexruz", "Davron", "Mansur"]
friends.map((el, index)=>{
    friends[index] = "hello " + el
})
console.log(friends)

// Task 4

const numbers = [-1, 0, 1, 2, 3, 4]
numbers.map((el, index)=>{
    numbers[index] = Boolean(el)
})
console.log(numbers)

// Task 5

const array = [1,6,7,8,3,4,5,6]
console.log(array.sort((a,b)=>b-a))

// Task 6

const filteredArr = array.filter(el => el > 3)
console.log(filteredArr)

// Task 7

const findIndex = function(arr, num){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num){
            return i
        }
    }
    return "no such kind of number in this array"
}
console.log(findIndex([1,2,3,4,5,6], 3))

// Task 8

for(let i = 0; i < 10; i++){
    console.log("a")
}

// Task 9

const primeFinder = function(num){
    if(num <= 1){
        return false
    }else{
        for (let i = 2; i <= num; i++) {
            if (num % i === 0 && i !== num) {
                return false
            }
        }
        return true
    }
}

const findPrimeNum = function(arr){
    const primeNumbers = []
    for(let i = 0; i < arr.length; i++){
        if(primeFinder(arr[i])){
            primeNumbers.push(arr[i])
        }
    }
    return primeNumbers
}

console.log(findPrimeNum([1,2,3,51,127]))

// Task 10

const findOddNum = function(arr){
    let i = 0
    const oddNumbers = []
    while (i < arr.length){
        if( arr[i] % 2 !== 0){
            oddNumbers.push(arr[i])
        }
        i++
    }
    return oddNumbers
}
console.log(findOddNum([1,2,3,4,5,6,7]))

