//type system
//strings
let firstName: string = 'Subramanian';
let lastName: string = "Murugan"
console.log(`First Name ${firstName} ${lastName}`);

//numbers
let salary: number = 19999;
//booleans
let isWorking: boolean = true;

//assign different type value
firstName = "ram"
console.log(`First Name ${firstName} ${lastName}`);
salary = 12;
//////////////////////////////////////////////////////////////////

//no explict type, with undefined , looks like js
let city;
console.log(city);
city = 'coimbatore';
console.log(city);
city = 9000;
console.log(city);

//if you are planning like js , with type called
let myvar: any;
myvar = 100;
myvar = "Test"
myvar = true;
////////////////////////////////////////////////////////////////////////////

//declared , intialized , without any explicit type declaration
let state = 'Tamil Nadu';

//Type inference : if variable initalied with particular type  when declaration,the
//same type is referenced in future intialization
//state = 9000; // invalid
state = 'Delhi';
