let num1 = prompt('input your first number', [0]);
let num2 = prompt('input your second number', [0]);
let sum = alert(Number(num1) + Number(num2));



const increament = document.querySelector("#first");
let add = 0;
increament.addEventListener('click', function (e) {
    let grow = confirm('do you want to increase the number ?')
    if (grow === true) {
        add++;

    } else {
        e.preventDefault;
    }


    let numberOne = document.querySelector(".num1")
    numberOne.innerText = add;

})

const decreament = document.querySelector(".second_button");
let minus = 1;
decreament.addEventListener('click', function (e) {
    let reduce = confirm('do you want to decrease the number ?')
    if (reduce === true) {
        minus--;

    } else {
        e.preventDefault;

    }


    let numberTwo = document.querySelector(".num2")
    numberTwo.innerText = minus;

})







