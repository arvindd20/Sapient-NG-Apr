//inheritance:
/**
 * Base class could be
 * 1.concrete class
 * 2.interfaces
 * 3.abstract class
 */
//
class Account {
    constructor(public accNo?: number) {
        console.log('Account class')
    }
    deposit(): number {
        return 10;
    }
}
class SavingsAccount extends Account {
    constructor(id: number) {
        super(id);
        console.log('Savings account!')
    }
    //method redefinging (overriding)
    deposit(): number {
        return 100 * super.deposit();
    }
}
let sb = new SavingsAccount(12);
console.log(sb.accNo)
console.log(sb.deposit())
////////////////////////////////////////////////////////////////////////////////////
//interfaces : generic inheritance
interface Runnable {
    //just method declaration
    run(): void
}
class Lion implements Runnable {
    //you must provide implementation
    run(): void {
        console.log('Lion runs!')
    }
}
class Wheel implements Runnable {
    run(): void {
        console.log('Wheel runs!')
    }
}
let lion = new Lion()
let wheel = new Wheel();

lion.run()
wheel.run();
////////////////////////////////////////
//Abstract classes: similar to interfaces but which is having common behaviour
//for same family of child classes.
//abstract classes = genric  + common implemenation

abstract class Animal {
    abstract eat(): void;
    //concret
    saveAnimals(): string {
        return 'Save Animals from Hunters!'
    }
}
class Tiger extends Animal {
    eat() {
        console.log('Tiger eats')
    }
}
let tiger = new Tiger();
tiger.eat();
console.log(tiger.saveAnimals());

class Elephant extends Animal {
    eat() {
        console.log('Elephant eats')
    }
}
let ele = new Elephant();
ele.eat();
console.log(ele.saveAnimals());
