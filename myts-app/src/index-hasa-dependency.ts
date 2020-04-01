//HAS -A : dependency injection

class Order {
    constructor(public id: number = 1, qty: number = 1) { }
}
class Customer {
    //Customer has-a Order
    constructor(public id: number = 1, public name: string = '', public order: Order) { }
}
let order = new Order();
//dependency injection
let customer = new Customer(1, 'Subramanian', order);
let customer1 = new Customer(2, 'Ram', new Order(10, 1000));
/////////////////////////////////////////////////////////////////////////////////////

class PaymentService {
    constructor() {
    }
    payToBank(): boolean {
        return true;
    }
}
class PaymentController {
    constructor(private service: PaymentService) { }
    pay(): void {
        console.log(this.service.payToBank());
    }
}
let payctl = new PaymentController(new PaymentService());
payctl.pay();