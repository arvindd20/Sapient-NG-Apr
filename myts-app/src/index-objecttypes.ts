//Reference types : object types
/**
 * 1.class can act as type of object : 
 * 2.interface can act as type of object
 * 3.type keyword can be used for object types
 *  * 
 */

//primitive
let a: number = 1

//class as type 
// class Customer {
//     id: number;
//     name: string;
// }
//interface as type
// interface Customer {
//     id: number;
//     name: string;
// }
//type keyword
type Customer = {
    id: number;
    name: string;
    city?: string;
}
//literal objects
let customer: Customer = {
    id: 1,
    name: 'Subramanian',
}
///////////

class Employee {
    constructor(public id: number = 2, public name: string = 'default') { }
}


// let emp: Employee = new Employee();
// emp.id = 10;
// emp.name = 'Subramanian';
// emp.salary = 900;

//Type inference
// let emp = new Employee();
// emp.id = 10;
// emp.name = 'Subramanian';
// emp.salary = 900;

type EmployeeType = {
    id: number;
    name: string;
    salary: number;
}

let emp = new Employee() as EmployeeType;
emp.id = 10;
emp.name = 'Subramanian';
emp.salary = 900;


let emp1 = new Employee() as any;
emp1.id = 10;
emp1.name = 'Subramanian';
emp1.salary = 900;