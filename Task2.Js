
let dataTypes = ['string', 'boolean', 'Null', 'object', 'undefined', 'symbol', 'numbers'];
for (let i = 0; i< dataTypes.length; i++) {
    alert(dataTypes[i]);
    }

// using for loop

dataTypes.forEach (function (dataType) {
    alert(dataType)
});// using forEach method

let identification = prompt ('what is your name?',' oruko');
alert (`your name is ${identification}!`)
let confirmation = confirm (`is your name ${identification}?`);
if (confirmation = true) {
    alert (`indeed your name is ${identification}`);
} else {
    alert ('you are lying');
}



