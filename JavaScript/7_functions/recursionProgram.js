/**
 * recursion - a function call by itself
 */

function factorial(num) {
    if (num == 0 || num == 1) {
        return 1;
    } else if (num > 1) {
        return num * factorial(num - 1);
    } else {
        return 0;
    }
}

for (let num = 0; num <= 10; num++) {
    console.log(factorial(num));
}