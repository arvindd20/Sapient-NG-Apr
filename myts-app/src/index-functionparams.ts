//functions and types
//type inference for args and return
function add(a, b) {
    return a + b;
}
console.log(add(10, 10));
console.log(add("hello", "subramanian"))
//strong typing with function

function substract(a: number, b: number): number {
    return a - b;
}
console.log(substract(10, 8));
//console.log(substract("test", "test"));

//default parameter
function multiply(a: number = 1, b: number = 1): number {
    return a * b;
}
//caller should not be forced to supply/
console.log(multiply());
console.log(multiply(34, 89));
//Typescript specific features related to default value
//optional parameters
function div(a?: number, b?: number): number {
    return a / b;
}
//caller should not be forced to supply/
console.log(div());
console.log(div(34, 89));
//
function set(name?: string): void {
    //return 10;
    console.log(`${name}`);
}
set('Subramanian')
