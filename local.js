// class Library{
//     constructor (bookname,avail){
//         this.bookname = bookname
//         this.avail = avail
//     }
//     del(){
//         console.log(`the ${this.bookname} book is ${this.avail} `)
//     }
// }

// let mylibrary = new Library("Nightingale" ,"Not Available")
// mylibrary.del()



// ====================================================================================


// class Dealership{

//     constructor(name,engine){
//         this.name = name
//         this.engine = engine
//     }

//     msg(){
//         return `this ${this.name} has ${this.engine} cc`
//     }


// }

// class Car extends Dealership{
//     constructor(name,engine,passeger_cap,fuel_type){

//         super(name,engine)
//         this.passeger_cap = passeger_cap
//         this.fuel_type = fuel_type
//     }
//     msg(){
//         return `${super.msg()} and no passengers ${this.passeger_cap}  fuel type ${this.fuel_type}`
//     }
// }

// class Bike extends Dealership{
//     constructor(name,engine,passeger_cap,fuel_type){
//     super(name,engine)
//     this.passeger_cap = passeger_cap
//     this.fuel_type = fuel_type

//     }
//     msg(){
//       return `${super.msg()} and no passengers ${this.passeger_cap}  fuel type ${this.fuel_type}`
//     }
// }

// class Bus extends Dealership {
//     constructor(name,engine,passeger_cap,fuel_type){
//         super(name,engine)
//         this.passeger_cap = passeger_cap
//         this.fuel_type = fuel_type
    
//     }
//     msg(){
//       return `${super.msg()} and no passengers ${this.passeger_cap}  fuel type ${this.fuel_type}`
//     }
// }

// var a=new Car("Swift",1500,45,'petrol');
// console.log(a.msg())
// var b=new Bike("NS",200,2,"petrol");
// console.log(b.msg())



// =============================================================================================================


// class Account {
//     #balance;

//     constructor(acc_number, acc_name, balance) {
//         this.acc_number = acc_number;
//         this.acc_name = acc_name;
//         this.#balance = balance;
//     }

//     deposit(amount) {
//         if (amount > 0) {
//             this.#balance += amount;
//             console.log(`${amount} has been added. New balance is ${this.#balance}`);
//         } else {
//             console.log("Amount must be greater than zero.");
//         }
//     }

//     withdraw(amount) {
//         if (amount > 0 && amount <= this.#balance) {
//             this.#balance -= amount;
//             console.log(`${amount} has been withdrawn. New balance is ${this.#balance}`);
//         } else {
//             console.log("Insufficient balance or invalid withdrawal amount.");
//         }
//     }

//     showaccDetails() {
//         console.log(`Account Number: ${this.acc_number}, Account Holder: ${this.acc_name}`);
//     }

//     showBalance() {
//         return this.#balance;
//     }
// }

// class SavingsAccount extends Account {
//     constructor(acc_number, acc_name, balance, interestRate) {
//         super(acc_number, acc_name, balance);
//         this.interestRate = interestRate;
//     }
// }

// class CurrentAccount extends Account {
//     constructor(acc_number, acc_name, balance, overdraftLimit) {
//         super(acc_number, acc_name, balance);
//         this.overdraftLimit = overdraftLimit;
//     }

//     withdraw(amount) {
//         if (amount > 0 && amount <= this.showBalance() + this.overdraftLimit) {
//             super.withdraw(amount);
//         } else {
//             console.log("Withdrawal exceeds overdraft limit.");
//         }
//     }
// }


// const savings = new SavingsAccount(101, "Alice", 2000, 5);
// const savings1 = new SavingsAccount(1408, "Akhil", 800, 90);
// const current = new CurrentAccount(102, "Althaf", 1000, 500);


// savings.showaccDetails();
// console.log("Savings Initial Balance:", savings.showBalance());
// savings.deposit(500);
// console.log("Savings Final Balance:", savings.showBalance());

// console.log("\n");


// savings1.showaccDetails();
// console.log("Savings Initial Balance:", savings1.showBalance());
// savings1.deposit(400);
// console.log("Savings Final Balance:", savings1.showBalance());

// console.log("\n");

// current.showaccDetails();
// console.log("Current Initial Balance:", current.showBalance());
// current.deposit(300);
// current.withdraw(1200);
// current.withdraw(800);
// console.log("Current Final Balance:", current.showBalance());

// console.log(current.showBalance()); 



// =======================================================================

// class Roles{
//     role(){
//         console.log("Roles of each")
//     }
// }

// class Students extends Roles{
//     role(){
//         console.log("A student's role in school is to learn")
//     }
// }

// class Teacher extends Roles{
//     role(){
//         console.log("Teaching students")
//     }
// }

// class Administrator extends Roles{
//     role(){
//         console.log("A school administrator manages the day-to-day operations of a school. ")
//     }
// }

// function describe(a){
//     a.role();
// }

// const student=new Students();
// const teacher=new Teacher();
// const admin=new Administrator();
// student.role()
// teacher.role()
// admin.role()



// =============================================================================



// 5

// function Gamecharacter(name, direction){
//     this.name = name;
//     this.direction = direction
// }

// Gamecharacter.prototype.move = function(){
//     console.log(`${this.name} moves ${this.direction}.`);
// }

// Gamecharacter.prototype.attack = function(){
//     console.log(`${this.name} attaks .`);
// }

// function hero(name, direction) {
//     Gamecharacter.call(this, name, direction);  
// }

// hero.prototype = Object.create(Gamecharacter.prototype);
// hero.prototype.constructor = hero;

// hero.prototype.ability = function(){
//     console.log(`${this.name} super strength ability`)
// }

// const myhero = new hero("Thor","Forward");
// myhero.ability();
// myhero.attack();
// myhero.move();


// =========================================================================

// 6

// class Animal{
//     constructor(name,food){
//         this.name = name
//         this.food = food
//     }
//     eat(){
//         console.log(`Eats all type of foods`)
//     }
//     sleep() {
//         console.log(`The ${this.name} is sleeping.`);
//     }

// }

// class Lion extends Animal{
//     eat(){
//         console.log(`The ${this.name} eats ${this.food}`)
//     }
//     roar() {
//         console.log(`The ${this.name} roars loudly!`);
//     }
// }

// class Rabbit extends Animal{
//     eat(){
//         console.log(`The ${this.name} eats ${this.food}`)
//     }
//     hop() {
//         console.log(`The ${this.name} hops around.`);
//     }
// }


// const myLion = new Lion ("Lion","Meat")
// const myRabbit = new Rabbit ("Rabbit","Grass")

// myLion.eat();
// myLion.sleep(); 
// myLion.roar();
// myRabbit.eat();

// myRabbit.sleep(); 
// myRabbit.hop();

// =================================================================

// 7

class Products{
    #price
    constructor(name,price){
        this.name = name
        this.#price = price
    }

    getName(){
        return this.name;
    }
    getPrice(){
        return this.#price
    }
    setPrice(price) {
        if (price > 0) {
            this.#price = price;
        } else {
            console.log("Price must be positive.");
        }
    }
}