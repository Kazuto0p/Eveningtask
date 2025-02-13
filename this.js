// function area(a,b){
//     z=a*b
// }

// function calculateArea() {
//     console.log("Area:", this.length * this.width);
// }

// let rect1 = {
//     length: 5,
//     width: 10
// };

// let rect2 = {
//     length: 3,
//     width: 4
// };


// calculateArea.call(rect1); 
// calculateArea.call(rect2); 



// obj={
//     nam:'Alice',
//     age:25,
//     f:function(){
//         console.log(this)
//     }
// }

// obj.f.apply(obj);


// =================================================================================

// obj = {
//     name: 'Alice',
//     age: 25,
//     f: function () {
//         console.log(`My name is ${this.name} and I am ${this.age} years old.`);
//     }
// };

// obj2 = {
//     name: 'Bob',
//     age: 30
// };

// obj.f.apply(obj2);  



// ======================================================================================
// obj={
//     name:"Alice",
//     age:34,
//     f:function(){
//         console.log(`this task is done by ${this.name}`);
//     }
// }

// aa=obj.f=obj.f.bind(obj)
// aa()

// ========================================================================================

// let obj1 = {
//     numbers: [1, 2, 3, 4, 5],
//     f:function(){
//         let z=this.numbers.reduce((acc,item)=>acc+item,0)
//         console.log(z)
//     }
// };

// let obj2 = {
//     numbers: [10, 20, 30, 40, 50]
// };

// obj1.f.apply(obj2)



// ========================================================================================


// function greet(){
//     console.log(`Good morning ${this.name}`)
// }
// let obj1={
//     name:"Alice",
//     id:10,
//     f:greet
// }
// let obj2={
//     name:"john",
//     id:90,
// }
// obj1.f.call(obj2)



// ========================================================================================



// let a = document.createElement('button');
// a.textContent = "Click Me";

// let obj = {
//     name: "Alice",
//     id: 90,
//     f: function () {
//         console.log(this.name);
//     }
// };

// // Attach event listener correctly
// a.addEventListener('click', obj.f.bind(obj)); 

// document.body.appendChild(a);



// ===========================================================================================



// function updated(newName, newAge) {
//     this.name = newName;
//     this.age = newAge;
// }

// let person1 = { name: "Alice", age: 25 };
// let person2 = { name: "Bob", age: 30 };

// updated.call(person1, "Eve", 28);
// updated.call(person2, "Charlie", 35);

// console.log(person1);
// console.log(person2); 




// ===========================================================================================


// function greetUser(greeting = "Hello", name = "Guest") {
//     console.log(`${greeting}, ${name}!`);
// }

// let a = greetUser.bind(null, "Good morning");

// a("Alice"); 
// a("Bob");   



// ===========================================================================================



// function formatDate(day, month, year) {
//     return `${day}/${month}/${year}`;
// }

// let date1 = [12, "Jan", 2024];
// let date2 = [5, "Feb", 2025];

// console.log(formatDate.apply(null, date1)); 
// console.log(formatDate.apply(null, date2)); 



// ===========================================================================================


function logMessage(prefix, message) {
    console.log(`${prefix}: ${message}`);
}


let error = logMessage.bind(null, "ERROR");
let warning = logMessage.bind(null, "WARNING");

error("Something went wrong!");  
warning("This is a warning.");  
