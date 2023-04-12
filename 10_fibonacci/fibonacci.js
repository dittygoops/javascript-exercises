const fibonacci = function(n) {
    let num = parseInt(n);

    if (num < 1) {
        return "OOPS";
    } else {
        if (num === 1 || num === 2) {
            return 1;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }
};

// Do not edit below this line
module.exports = fibonacci;
