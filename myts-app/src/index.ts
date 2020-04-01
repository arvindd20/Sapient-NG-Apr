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