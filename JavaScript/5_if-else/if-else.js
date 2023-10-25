let num = 0;

if (typeof(num) === typeof(2)) {
    if (num > 0) {
        console.log(`${num} is a positive number`);
    } else if(num < 0) {
        console.log(`${num} is a negative number`);
    } else {
        console.log(`${num} is zero`);
    }
} else {
    console.log('user input is not a number');
}


