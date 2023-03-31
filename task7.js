// // a function to add to an array of items using prompt
// let cakeIngredients = ['flour', 'butter', 'milk'];

// const add = function () {
//     let include = prompt('pls add to this list');
//     if (typeof (include) === 'string') {
//         cakeIngredients.push(include);
//         prompt.preventDefault;
//         console.log(cakeIngredients);
//     } else {
//         alert('Nothing was added');
//     };
// };

// add()

// // a function to loop through the array of items and alert them
// let cars = ['Toyota', 'Volvo', 'Camery', 'BigDaddy'];
// const list = function () {
//     for (let i = 0; i < cars.length; i++) {
//         alert(cars[i]);
//     };
// };

// list()

// // a function to loop through an array of numbers and add one to them.
// let num = [1, 2, 3];
// const loop = function () {
//     for (let i = 0; i < num.length; i++) {
//         console.log(num[i] += 1);
//     };
// };

// loop();

// // a function to compare two numbers
// const comparison = (num1, num2) => {
//     if (num1 == num2) {
//         alert(`${num1} and ${num2} are  the same value`);
//     } else if (num1 === num2) {
//         alert(`${num1} and ${num2} are of the same type and value`);
//     } else if (num1 > num2) {
//         alert(`${num1} is greater than ${num2}`);
//     } else {
//         alert('are you sure you compared numbers?');
//     };
// };

// comparison(1, 1);


// // a function to show the the data type of an array of elements
// let element = ['joy', 1, true, false, ['joy', 'anita', 'clinton'], null, undefined];
// let showDataType = function () {
//     let i = 0;
//     while (i < element.length) {
//         i++ 
//         alert(typeof (element[i]));
//     };
// };

// showDataType()


// let str = "string";
// let str1 = str.slice(0, 3);
// console.log(str1)
// let str2 = str.slice(3);
// console.log(str2);
// str = str1 + "|" + str2;
// console.log(str)


// function mid(str) {
//     let length = str.length;
// if(length % 2 === 0) {
//  console.log(str.slice(0, length/2)+"|"+str.slice(length/2));
// } else{
//  console.log(str.slice(0, length/2) + "|" + str.slice(length/2 + 1));
// }
// console.log(-length/2)
// }

// mid("abc")



// let str = 'abcde';
// let length = str.length/2;
// console.log(str.slice(0, length)+ "|" + str.slice(-length))






// function countGrade(scores) {
//     const result = {S: 0, A: 0, B:0, C:0, D:0, X:0};
//     for(let i = 0; i < scores.length; i++) {
//         if(scores[i] === 100){
//             result['S']++
//         };
//         if(scores[i] < 100 && scores[i] >= 90){
//             result['A']++
//         };
//         if(scores[i] < 90 && scores[i] >= 80){
//             result['B']++
//         };
//         if(scores[i] < 80 && scores[i] >= 60){
//             result['C']++
//         };
//         if(scores[i] < 60 && scores[i] >= 0){
//             result['D']++
//         };
//         if(scores[i] === -1){
//             result['X']++
//         };
//     };
//     console.log( result);
  
//   };

//   countGrade([-1,-1,-1,-1,-1,-1]);



//   Grade S: Full marks(score=100)
// Grade A: score<100 and score>=90
// Grade B: score<90 and score>=80
// Grade C: score<80 and score>=60
// Grade D: score<60 and score>=0
// Grade X: score=-1(The cheating guy gets a score like that)


// let score = 100;
// let A = score < 100 && score >= 90;
// let B = score < 90 && score >= 80;
// let C = score < 80 && score >= 60;
// let D= score < 60 && score >= 0;
// let X = score = -1;






// function double(x){
//     return x*3
// }
// let arr = [2, 4, 6, 8, 10];
// const output = arr.map(double);
// console.log(output)




// function sortIt(arr){
//     let duplicate = [...arr]
//     const numberToFrequency = {};
    
//     for(let i = 0; i < duplicate.length; i++) {
//       if(duplicate[i] in numberToFrequency) {
//         numberToFrequency[duplicate[i]]++;
//       } else {
//         numberToFrequency[duplicate[i]] = 1;
//       }
//     }
    
//     duplicate.sort((a, b) => {
//       if (numberToFrequency[a] > numberToFrequency[b]) {
//         return 1;
//       } if (numberToFrequency[a] < numberToFrequency[b]) {
//         return -1;
//       } if (numberToFrequency[a] === numberToFrequency[b]) {
//         if (a > b) {
//           return -1;
//         } else if (a < b) {
//           return 1;
//         } else {
//           return 0;
//         }
//       };
//     });
//     return duplicate;
  
//   }




// function blackAndWhite(arr){
//     if(Array.isArray(arr)=== !true) {
//       console.log("It's a fake array") ;
//     }
//     if(arr.includes(5) && arr.includes(13)) {
//         console.log("It's a black array")  
//       }
//   }


//   blackAndWhite([5,13])


// function mirrorImage(arr){
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === arr[i]) {
//             console.log(arr[i])
//         }
     
//     }

//   }

//   mirrorImage([11,22,33,33,22,11])




//   var a=0,b=0,arr=[[11,22,33,33,22,11]];
//   arr.some((x,i)=>{
//     a=arr[i];  //or a=x
//     b=arr[i+1];
//     return a===b;
//   })
//   console.log(a,b)  





// function mirrorImage(arr){
//     const NewArra = []
//     const NewArrb = []
//     const result = [];
//    let a = arr.slice(0, arr.length/2);
//    NewArra.push(...a);
// //    console.log(NewArra);
//    let b = arr.slice(arr.length/2)
//    NewArrb.push(...b)
// //    console.log(NewArrb)
//    if(NewArra[NewArra.length-1] === NewArrb[0] || NewArra[NewArra.length-1] === Number(NewArrb[0].toString().split("").reverse().join("") )){
//     result.push(NewArra[NewArra.length-1], NewArrb[0])
//    } else {
//     result.push(-1, -1)
//    }
//    console.log (result)
//   }

//   mirrorImage([11,22,75,57,22,11])


// function mirrorImage(arr){
    
// }

// mirrorImage([11,22,33,33,22,11])

// console.log(NewArrb[0].toString().split("").reverse().join(""))

// let arr = ;

// function stringToArray(string){
//     return string.split(' ');
//   }

// stringToArray("I love arrays they are my favorite")



// function mirrorImage(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         let a;
//         let b;
//         //coding here...
//         arr.some((x, i)=>{
//           b = Number(arr[i +1].toString().split("").reverse().join(""));
//           a = arr[i];
//           if(a === b){
//             console.log([a, b]);
//           } else{
//             console.log([-1, -1]);
//           }
//         })
//     }
//   }


// function mirrorImage(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         let a = arr[i];
//         let b = Number(arr[i + 1].toString().split("").reverse().join(""));
//     }
//     if(a === b) {
//         console.log([a, b]);
//     }
// }




// function mirrorImage(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let a = arr[i];
//         let b = Number(String(arr[i +1]).split("").reverse().join(""))
//         if (a === b) {
//             console.log([a, b])
//         } 
//     }
// }

// mirrorImage([454,86,57,75,16,88])




// function mirrorImage(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let a = arr[i];
//         let b = arr[i +1];
      
//        if (a === Number(String(b).split("").reverse().join(""))) {
//       console.log([a, b]) 
//     }  else if(a === [] || b === []) {
//         console.log([-1, -1])
//     } else {
//         console.log('are you sure you have an array')
//     }
//     }
// }

// mirrorImage()







// let number = 123456789;

// // Initializing the result variable 
// let result = 0;

// while(number>0){
//     // Getting the rightmost digit
//     rightmost = number%10;
    
//     result = result*10 + rightmost;
    
//     // Removing the rightmost digit from the number
//     number = Math.floor(number/10);
// }


// let num =12;
// let result = 0;
// while (result < num) {
//     result = num % 12 *10 + 2;
// }
// console.log("Reversed number is : " + result)


// let number = 12;

// // Initializing the result variable 
// let result = 0;

// while(number>0){
//     // Getting the rightmost digit
//     rightmost = number%10;
    
//     result = result*10 + rightmost;
    
//     // Removing the rightmost digit from the number
//     number = Math.floor(number/10);
// }
// console.log("Reversed number is : " + result)

// let num = 20;
// let result = 0 ;
// while(num > 0) {
//     let last = num % 10;
//     result = result *10 + last;
//     num = Math.floor(num/10);
// }

// console.log(result)


// function animal(obj){
//     let color = obj.color;
//     let names = obj.name;
//     let legs = obj . legs;
//     console.log("This" + " " + color +" " +names + " " + "has"  + " "+ legs + " " + "legs."); 
//   }

// animal({name:"dog",legs:4,color:"white"})

// function checkAlive (health) {
//     if (health > 0) {
//       console.log(true);
//     } else if (health <= 0) {
//       console.log(false);
//     }
//   }

//   checkAlive (0)



// let circular = {
//     value : "Hello World"
//   }
//     circular.self = circular;
//     circular.self.self = circular.self
//     console.log(circular)



// let fruit =  "apple";

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// alert( bag[fruit] );




// let user = {
//     name: "John",
//     age: 30
//   };

//   let clone = {...user}

//   for (let key in user) {
//     clone[key] = user[key]
//   }


//   console.log(clone)




