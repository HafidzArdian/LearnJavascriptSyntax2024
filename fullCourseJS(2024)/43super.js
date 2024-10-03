// super = keyword is used in classes to call the constructor or
//          acces the properties and methods of a parent (Superclass)
//          this = this object
//          super = The parent

class Animal {
    constructor(name, age,){
        this.name = name
        this.age = age
    }
    move(speed){
        console.log(`This ${this.name} moves at a speed ${speed} km/h`);
    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }

}

class Fish extends Animal {
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal {
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 5, 20);
const fish = new Fish("fish", 1, 10);
const hawk = new Hawk("hawk", 13, 100);

rabbit.run();
