// a function to add to an array of items using prompt
let cakeIngredients = ['flour', 'butter', 'milk'];

const add = function () {
    let include = prompt('pls add to this list');
    if (typeof (include) === 'string') {
        cakeIngredients.push(include);
        prompt.preventDefault;
        console.log(cakeIngredients);
    } else {
        alert('Nothing was added');
    };
};

add()

// a function to loop through the array of items and alert them
let cars = ['Toyota', 'Volvo', 'Camery', 'BigDaddy'];
const list = function () {
    for (let i = 0; i < cars.length; i++) {
        alert(cars[i]);
    };
};

list()

// a function to loop through an array of numbers and add one to them.
let num = [5, 9, 8];
const loop = function () {
    for (let i = 0; i < num.length; i++) {
        console.log(num[i] += 1);
    };
};

loop();

// a function to compare two numbers
const comparison = (num1, num2) => {
    if (num1 == num2) {
        alert(`${num1} and ${num2} are  the same value`);
    } else if (num1 === num2) {
        alert(`${num1} and ${num2} are of the same type and value`);
    } else if (num1 > num2) {
        alert(`${num1} is greater than ${num2}`);
    } else {
        alert('are you sure you compared numbers?');
    };
};

comparison(1, 1);


// a function to show the the data type of an array of elements
let element = ['joy', 1, true, false, ['joy', 'anita', 'clinton'], null, undefined];
let showDataType = function () {
    let i = 0;
    while (i < element.length) {
        i++
        alert(typeof (element[i]));
    };
};

showDataType()