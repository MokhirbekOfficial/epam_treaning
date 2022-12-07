//Object

let car = {
    color: "black"
}

car.color = "green"

car.power = function(hp){
    console.log(hp)
}
car.power(12)

// peares and apples

const add = (p, a) => p + a
console.log(add(12,13))

// define name

function defineName(name){
    def_name = "Mokhirbek"
    if(def_name === name){
        return "hello " + name
    }else{
        return "there is no such name"
    }
}
console.log(defineName("Mokhirbek"))

// calculating type

function cal_type(arg){
    const type = typeof(arg)
    console.log("argument type: " + type)
    return function out_type(){
        return "output type: " + typeof(type)
    }
}
console.log(cal_type(true)())

// determine prime or not

const check_prime = function(num){
    if (num < 1){
        return num + " is not prime"
    }else if (num === 1){
        return num + " neither prime nor composite number"
    }else{
        return (function outerFunc(arg){
            let counter = --arg
            let div = num % counter
            return function innerFunc(){
                if((div != 0) && (counter != 1)){
                    return outerFunc(arg)()
                }else if ((div === 0) && (counter != 1)){
                    return num + " is not prime"
                }else{
                    return num + " is prime"
                }
            }
        })(num)()
    }
}

console.log(check_prime(13))

