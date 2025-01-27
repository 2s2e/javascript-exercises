const fibonacci = function(number) {
    if(typeof(number) !== "number") {
        number = parseInt(number);
    }
    if(number < 1) {
        return 'OOPS';
    }
    if (number === 1) { 
        return 1;
    }
    if (number === 2) {
        return 1;
    }
    if (number > 1) {
        return fibonacci(number - 1) + fibonacci(number - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
