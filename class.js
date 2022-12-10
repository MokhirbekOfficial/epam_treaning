class Animal {
    constructor(animalName){
        this.animalName = animalName
    }
    move(speed){
        console.log(this.animalName + " can move with " + speed + " km/h")
    }
}

class Cat extends Animal{

}

const tom = new Cat("Tom")
tom.move(5)