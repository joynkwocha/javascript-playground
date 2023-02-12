let input = prompt('enter a data  type', '');
switch (input) {
    case 'undefined':
        alert('Your data type is most likely undefined');
        break;
    case 'true':
    case 'false':
        alert('your data type is a boolean');
        break;
    case 'Null':
        alert('your data type is Null');
        break;
    case '{}':
        alert('your data type is an object');
    case '[]':
        alert('your data type is an arrey');
        break;
    default:
        alert('your data type is a string')
};

let int = prompt('enter a data type');
if (!isNaN(int)) {
    alert(`${int} is  a number`);
} else if (isNaN(int || isNaN(null))) {
    alert(`${int} is not a number`);
} ;

