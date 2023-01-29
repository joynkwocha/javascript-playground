let firstVariable = 13;
const secondVariable = 'this is a string';
let thirdVariable = 13 > 14; //this should log false to the console
let empty = 15;
empty = null
console.log(empty);//this should log Null to the console and not 15  
 let joy; // this should log undefined in the console because  it is created but not assigned
console.log(joy);

let login = {
    studentName : 'joy',
    class : 'Jss2',
    subjects : ['English', 'Maths', 'Biology'] ,
}

console.log(typeof login);//this should return object on the console 

let  myAge = '19';
 myAge = Number (myAge) 
console.log(myAge);
let Age = 19;
// console.log(typeof Age)// this should log number to the console
 Age = String (Age);// this should should show string 19 on the console
console.log (typeof Age); // this should show string in the console

let firstNumber = 15;
let secondNumber =15;
let sum = firstNumber + secondNumber;
let result = sum ;
console.log(result);// this will return 30


let calc = function(a , b){
return a + b
}

console.log (calc(2, 3));


let firstName = 'Joy';
let lastName = 'Nkwocha';
let age = 100;
let fullName = firstName + ' ' + lastName;
console.log (fullName);
let fullNameAndAge = `Hi i am ${fullName}, and i am ${age} years old `
console.log(fullNameAndAge);
