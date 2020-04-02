//Decorators

//decorator code
/**
 * 1.function must take arg: target (on which the decorator has been attached)
 */

//Level 1: declaration
// function Course(target: any) {
//     console.log('Course decorator is used!')
// }
//Level 2 : add decorator logic
//Get the Student Prototype Object, add courseName property, and set the value
// function Course(target: any) {
//     //Logic
//     Object.defineProperty(target.prototype, "courseName", {
//         value: 'Angular with Type script'
//     });
// }

// //app code
// @Course
// class Student {
//     constructor(public firstName?: string, public lastName?: string) { }
// }
// let student = new Student("Subramanian", "Murugan") as any;
// console.log(`${student.firstName} ${student.lastName} is learning ${student.courseName}`);

//use case 2 : course information as input


// function Course(target: any) {
//     //Logic
//     Object.defineProperty(target.prototype, "courseName", {
//         value: 'Angular with Type script'
//     });
// }

//Level 3 : add decorator logic,with input
type CourseType = {
    code: string;
    courseName: string;
}

function Course(courseinfo: any) {
    //target should be inside another function
    return function (target: any) {
        //Logic
        Object.defineProperty(target.prototype, 'courseinfo', { value: courseinfo })
    }

}

function Logger(config: any) {
    return function (target: any) {
        console.log("\x1b[44m%s\x1b[0m", `${config.type} - ${config.message} on ${new Date()}`);
    }
}

//method decorator
function extendAble(value: any) {
    return function (target: any, prop: any, propdescriptor: PropertyDescriptor) {
        console.log(target);
        console.log(prop);
        console.log(propdescriptor);
        propdescriptor.writable = value;
    }
}

//field decorator
function Input(label: string) {
    return function (target: any, key: string) {
        console.log(target)
        console.log(key);
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label
        });
    }
}



@Course({ name: 'Node js' })
@Logger({
    message: 'Have latest Version',
    type: 'Warning'
})
class Student {

    @Input('Sapient Learning Division')
    instituteName: string;

    constructor(public firstName?: string, public lastName?: string) { }
    //cost of this is fixed
    @extendAble(false)
    calculateCost() {
        return 10000;
    }
}
let student = new Student("Subramanian", "Murugan") as any;
console.log(` ${student.instituteName} ${student.firstName} ${student.lastName} is learning ${student.courseinfo.name}`);

student.calculateCost = function () {
    return 15000;
}

console.log(`Course cost ${student.calculateCost()}`);

//Assignment  Started - Task 1

interface Calculator{
    AllCalculation() : number;
}

class InterestAmount implements Calculator{
    constructor(private principal: number = 0 , private rate:number = 0,private time:number = 0){

    }

    AllCalculation(): number{
        return (this.principal * this.rate * this.time)/100;
    }
}

class ShapeCalculator implements Calculator{
    constructor(private length: number = 0, private width:number = 0,private breadth:number =0){

    }

    AllCalculation(): number{
        return (this.length * this.width * this.breadth);
    }
}

let TotalInterest = new InterestAmount(100,5,12);
console.log(TotalInterest.AllCalculation());

let calculateNoInterest = new InterestAmount();
console.log(calculateNoInterest.AllCalculation());

let ShapeCalc = new ShapeCalculator(5,4,2);
console.log(ShapeCalc.AllCalculation());

let NoShapeCalc = new ShapeCalculator();
console.log(NoShapeCalc.AllCalculation());


//Task 2

function Loggers(config:any) {
    return function (target: any, prop: any, propdescriptor: PropertyDescriptor) {
        console.log(`${config.type} - ${config.message} on ${new Date()}`);
    }
}
type CustomerInfo = {
    name: string;
    accountNo: number;
}

function Entity(courseinfo: CustomerInfo) {
    return function (target: any) {
        Object.defineProperty(target.prototype, 'name', { value: courseinfo.name });
        Object.defineProperty(target.prototype, 'accountNo', { value: courseinfo.accountNo });
    }

}

@Entity({ name: 'Arvind' , accountNo: 123456789})
class Customer{

    @Loggers({
        message: 'Logged In',
        type: 'info'
    })
    transactions(type:string, amount:number): void{
        console.log(`Amount ${type} : ${amount}`);
    }
}

let customer = new Customer();
customer.transactions('credited',200);
customer.transactions('debited',100);