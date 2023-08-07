var today = new Date();

// Getting full month name (e.g. "June")
var month = today.toLocaleString('default', { month: 'long' });
console.log(month);