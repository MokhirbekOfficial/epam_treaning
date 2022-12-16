
try{
    console.log(a)
    let a = 3
}catch{
    console.log('let must be declared before use')
}

function devision (num1, num2){
    if(num2 === 0){
        const error = new Error("cannot be divided by zero")
        return error.message
    }
    return num1 / num2
}
console.log(devision(1,0))