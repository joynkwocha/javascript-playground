// Used prompt to add two numbers
let num1 = prompt('input your first number', [0]);
let num2 = prompt('input your second number', [0]);
let sum = alert(+num1 + +num2);

// Increament and decreament operations 

const increament = document.querySelector("#first");
let add = 0;
increament.addEventListener('click', function (e) {
    let grow = confirm('do you want to increase the number ?');
    if (grow === true) {
        add++;
    } else {
        e.preventDefault;
    }

    let firstNumber = document.querySelector(".num1")
    firstNumber.innerText = add;
});
 
//decreament

const decreament = document.querySelector(".second_button");
let minus = 0;
decreament.addEventListener('click', function (e) {
    let reduce = confirm('do you want to decrease the number ?')
    if (reduce === true) {
        minus--;
    } else {
        e.preventDefault;
    };

    let secondNumber = document.querySelector(".num2")
    secondNumber.innerText = minus;
});

// use confirm to delete a number

  let numberToBeDeleted = 8;
  let deleteNumber = confirm (`do you want to delete ${numberToBeDeleted}`);
  if (deleteNumber === true) {
        numberToBeDeleted = "";
        alert (`the number has been deleted, console.log to be sure`);
        console.log (numberToBeDeleted);
  } else {
        alert ('this number has not be deleted');
        console.log (numberToBeDeleted);
  }
