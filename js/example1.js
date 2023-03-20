"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apple = 'apple';
var orange = 'orange';
// let fruit: AppleOrOrange = 'fruit';
var stringVariable = 'qwerty';
var numberVariable = 15;
var booleanVariable = false;
// avoid
var numberVariable2 = 15;
var anyVariable = { name: 'Error in disguise' };
// this will crash at runtime
console.log(anyVariable.notExistingProperty);
var notSure = 4;
notSure = "maybe a string instead";
// OK, definitely a boolean
notSure = false;
// notSure.attributeX = '2';
var fruitBasket = ['apple', 'orange', 'orange'];
var employees = []; // use the one above
console.log(stringVariable);
console.log(numberVariable);
console.log(numberVariable2);
console.log(booleanVariable);
var employee = {
    name: 'John',
    age: 35,
    salary: 1500
};
var employeePartial = {
    age: 15
};
var personTypeObject = {
    age: 13,
    name: 'Mr Person',
};
var EmployeeClass = /** @class */ (function () {
    function EmployeeClass(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    EmployeeClass.prototype.printInfo = function () {
        console.log("Name: ".concat(this.name, ", age: ").concat(this.age, ", salary: ").concat(this.salary));
    };
    return EmployeeClass;
}());
function add(a, b) {
    return a + b;
}
var a = 5;
var b = 10;
var c = add(a, b);
console.log("Result is: ".concat(c));
var ExampleClass = /** @class */ (function () {
    function ExampleClass() {
    }
    return ExampleClass;
}());
var object = new ExampleClass();
console.log(add(1, 3));
var newEmployee = new EmployeeClass('John', 25, 1500);
newEmployee.printInfo();
