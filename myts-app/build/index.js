//Decorators
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Course(courseinfo) {
    //target should be inside another function
    return function (target) {
        //Logic
        Object.defineProperty(target.prototype, 'courseinfo', { value: courseinfo });
    };
}
function Logger(config) {
    return function (target) {
        console.log("\x1b[44m%s\x1b[0m", config.type + " - " + config.message + " on " + new Date());
    };
}
//method decorator
function extendAble(value) {
    return function (target, prop, propdescriptor) {
        console.log(target);
        console.log(prop);
        console.log(propdescriptor);
        propdescriptor.writable = value;
    };
}
//field decorator
function Input(label) {
    return function (target, key) {
        console.log(target);
        console.log(key);
        Object.defineProperty(target, key, {
            configurable: false,
            get: function () { return label; }
        });
    };
}
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //cost of this is fixed
    Student.prototype.calculateCost = function () {
        return 10000;
    };
    __decorate([
        Input('Sapient Learning Division'),
        __metadata("design:type", String)
    ], Student.prototype, "instituteName", void 0);
    __decorate([
        extendAble(false),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Student.prototype, "calculateCost", null);
    Student = __decorate([
        Course({ name: 'Node js' }),
        Logger({
            message: 'Have latest Version',
            type: 'Warning'
        }),
        __metadata("design:paramtypes", [String, String])
    ], Student);
    return Student;
}());
var student = new Student("Subramanian", "Murugan");
console.log(" " + student.instituteName + " " + student.firstName + " " + student.lastName + " is learning " + student.courseinfo.name);
student.calculateCost = function () {
    return 15000;
};
console.log("Course cost " + student.calculateCost());
var InterestAmount = /** @class */ (function () {
    function InterestAmount(principal, rate, time) {
        if (principal === void 0) { principal = 0; }
        if (rate === void 0) { rate = 0; }
        if (time === void 0) { time = 0; }
        this.principal = principal;
        this.rate = rate;
        this.time = time;
    }
    InterestAmount.prototype.startCalculation = function () {
        return (this.principal * this.rate * this.time) / 100;
    };
    return InterestAmount;
}());
var ShapeCalculator = /** @class */ (function () {
    function ShapeCalculator(length, width, breadth) {
        if (length === void 0) { length = 0; }
        if (width === void 0) { width = 0; }
        if (breadth === void 0) { breadth = 0; }
        this.length = length;
        this.width = width;
        this.breadth = breadth;
    }
    ShapeCalculator.prototype.startCalculation = function () {
        return (this.length * this.width * this.breadth);
    };
    return ShapeCalculator;
}());
var calculateInterest = new InterestAmount(100, 5, 12);
console.log(calculateInterest.startCalculation());
var calculateNoInterest = new InterestAmount();
console.log(calculateNoInterest.startCalculation());
var calculateShape = new ShapeCalculator(5, 4, 2);
console.log(calculateShape.startCalculation());
var calculateNoShape = new ShapeCalculator();
console.log(calculateNoShape.startCalculation());
//Task 2
function Loggers(config) {
    return function (target, prop, propdescriptor) {
        console.log(config.type + " - " + config.message + " on " + new Date());
    };
}
function Entity(courseinfo) {
    return function (target) {
        Object.defineProperty(target.prototype, 'name', { value: courseinfo.name });
        Object.defineProperty(target.prototype, 'accountNo', { value: courseinfo.accountNo });
    };
}
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.transactions = function (type, amount) {
        console.log("Amount " + type + " : " + amount);
    };
    __decorate([
        Loggers({
            message: 'Logged In',
            type: 'info'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Number]),
        __metadata("design:returntype", void 0)
    ], Customer.prototype, "transactions", null);
    Customer = __decorate([
        Entity({ name: 'Arvind', accountNo: 123456789 })
    ], Customer);
    return Customer;
}());
var customer = new Customer();
customer.transactions('credited', 200);
customer.transactions('debited', 100);
