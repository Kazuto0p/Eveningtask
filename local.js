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


class Account{

    #balance;
    constructor(acc_number,acc_name,balance){
        this.acc_number = acc_number
        this.acc_name = acc_name
        this.#balance = balance
    }

    deposit(amount){

        if(amount>0){
            this.#balance+=amount
            console.log(${amount} has been added and new baaknce is ${balance})
        }

    }

    withdraw(amount){

    }

    showaccDetails(){

    }

    showBalance(){

        return this.#balance
    }

}

            
a = new Account(345,"fhejkwh",8754398759)

console.log(a.showBalance())