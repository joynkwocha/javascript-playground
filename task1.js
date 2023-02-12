//Number
let firstVariable = 13;
//String
const secondVariable = 'this is a string';
//boolean
let thirdVariable = 13 > 14; //this should log false to the console
//Null
let empty = 15;
empty = null
console.log(empty);//this should log Null to the console and not 15  
//undefined
 let joy; // this should log undefined in the console because  it is created but not assigned
console.log(joy);
//Object
let login = {
    studentName : 'joy',
    class : 'Jss2',
    subjects : ['English', 'Maths', 'Biology'] ,
};

//using typeof
console.log(typeof login);//this should return object on the console 

// converting strings to Number
let  myAge = '19';
 myAge = Number (myAge) 
console.log(myAge);
let Age = 19;
 Age = String (Age);// this should  log string 19 to the console
console.log (typeof Age); // this should show string on the console

//Adding two Numbers
let firstNumber = 15;
let secondNumber =15;
let sum = firstNumber + secondNumber;
let result = sum ;
console.log(result);// this will return 30

// adding 2 Numbers using function
let calc = function(a , b) {
return a + b
};
console.log (calc(2, 3));

// adding Numbers and strings
let firstName = 'Joy';
let lastName = 'Nkwocha';
let age = 100;
let fullName = firstName + ' ' + lastName;
console.log (fullName);
let fullNameAndAge = `Hi i am ${fullName}, and i am ${age} years old `
console.log(fullNameAndAge);





