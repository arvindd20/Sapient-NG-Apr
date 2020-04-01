// TS oo :

//declare class


// class Customer {
//     //instance variables : 
//     //hardcoded
//     id: number = 1;
//     name: string = 'subramanian';
//     isActive: boolean = true;
//     //instance methods
//     calculateInvoice(): number {
//         return 100;
//     }
//     toString(): string {
//         return `[id ${this.id} , name ${this.name} ,Active ${this.isActive}]`
//     }
// }

// class Customer {
//     //instance variables : 
//     id: number = 1;
//     name: string = 'subramanian';
//     isActive: boolean = true;
//     //instance methods
//     calculateInvoice(): number {
//         return 100;
//     }
//     toString(): string {
//         return `[id ${this.id} , name ${this.name} ,Active ${this.isActive}]`
//     }
// }
// //object creation
// let cust = new Customer();
// cust.id = 90;
// cust.name = 'ram';
// cust.isActive = false
// console.log(cust.toString(), cust.calculateInvoice());

// class Customer {
//     //instance variables : 
//     id: number
//     name: string;
//     isActive: boolean;
//     constructor(id: number = 1, name: string = 'defaultName', isActive?: boolean) {
//         this.id = id;
//         this.name = name;
//         this.isActive = isActive;
//     }
//     //instance methods
//     calculateInvoice(): number {
//         return 100;
//     }
//     toString(): string {
//         return `[id ${this.id} , name ${this.name} ,Active ${this.isActive}]`
//     }
// }
// //object creation
// let cust = new Customer(1, 'subramanian', true);

// console.log(cust.toString(), cust.calculateInvoice());

//encapsulation

// class Customer {
//     //instance variables : 
//     id: number = 1;
//     name: string = 'subramanian';
//     isActive: boolean = true;
//     //instance methods
//     calculateInvoice(): number {
//         return 100;
//     }
//     toString(): string {
//         return `[id ${this.id} , name ${this.name} ,Active ${this.isActive}]`
//     }
// }
// //object creation
// let cust = new Customer();
// cust.id = 90;
// cust.name = 'ram';
// cust.isActive = false
// console.log(cust.toString(), cust.calculateInvoice());

//public : public default, not neccessary to add implicitly
// class Customer {
//     //instance variables : 
//     public id: number
//     public name: string;
//     public isActive: boolean;
//     constructor(id: number = 1, name: string = 'defaultName', isActive?: boolean) {
//         this.id = id;
//         this.name = name;
//         this.isActive = isActive;
//     }
//     //instance methods
//     public calculateInvoice(): number {
//         return 100;
//     }
//     toString(): string {
//         return `[id ${this.id} , name ${this.name} ,Active ${this.isActive}]`
//     }
// }
// //object creation
// let cust = new Customer(1, 'subramanian', true);

// cust.id = 18888

// console.log(cust.toString(), cust.calculateInvoice());

//private variables
// class Customer {
//     //instance variables : 
//     private id: number
//     private name: string;
//     private isActive: boolean;
//     constructor(id: number = 1, name: string = 'defaultName', isActive?: boolean) {
//         this.id = id;
//         this.name = name;
//         this.isActive = isActive;
//     }
//     //instance methods
//     public calculateInvoice(): number {
//         return 100;
//     }
//     public toString(): string {
//         return `[id ${this.id} , name ${this.name} ,Active ${this.isActive}]`
//     }
// }
// //object creation
// let cust = new Customer(1, 'subramanian', true);
// //cust.id = 18888

// console.log(cust.toString(), cust.calculateInvoice());


class Customer {
    //local variables can be converted into instance variables
    constructor(private id: number = 1, private name: string = 'defaultName', private isActive?: boolean) { }
    //instance methods
    public calculateInvoice(): number {
        return 100;
    }
    public toString(): string {
        return `[id ${this.id} , name ${this.name} ,Active ${this.isActive}]`
    }
}
//object creation
let cust = new Customer(1, 'subramanian', true);
//cust.id = 18888

console.log(cust.toString(), cust.calculateInvoice());