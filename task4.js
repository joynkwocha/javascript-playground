let firstValue;
let secondValue;

let comparison = function (firstValue, secondValue) {
    if (firstValue == secondValue) {
        alert (`${firstValue} is equal to ${secondValue}`);
    } else if (firstValue > secondValue) {
        alert (`${firstValue} is greater than  ${secondValue}`);
    } else if (firstValue < secondValue) {
        alert (`${firstValue} is lesser than  ${secondValue}`);
    } else if (firstValue === secondValue) {
        alert (true);
    } else {
        alert ('this value can not be compared');
    };
};
comparison (false, '0');

// comparison using double and tripple eqals

let firstNumber = 1;
let secondNumber = '1';

alert (firstNumber == secondNumber);
alert (firstNumber === secondNumber);
 
