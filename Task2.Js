
// alerting the different data types(using for loop)
let dataTypes = ['string', 'boolean', 'Null', 'object', 'undefined', 'symbol', 'numbers'];
    for (let i = 0; i < dataTypes.length; i++) {
        alert(dataTypes[i]);
    }

// using forEach method
dataTypes.forEach(function (dataType) {
    alert(dataType)
});

// using the different js interactions to interact with the browser (prompt, alert, and confirm)
let identification = prompt ('what is your name?', ' oruko');
alert(`your name is ${identification}!`)
let confirmation = confirm (`is your name ${identification}?`);
if (confirmation = true) {
    alert(`indeed your name is ${identification}`);
} else {
    alert('you are lying');
}



