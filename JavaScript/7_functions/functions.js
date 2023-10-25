// this is redundant function
// function print(value) {
//     console.log(value);
// }

// print('revanth')

/*
*------------------------------------------------------------------
*   function types
*---------------------------------------------------------------
*   function with no return type 
*   function with no return type and with argument 
*   function with no return type and without argument 
*   function with return type 
*   function with return type and with argument
*   function with return type and without argument
*/

// function decalration
// function add(a, b) {
//     print(a + b)
// }

// function sub(a, b) {
//     return a - b;
// }

// function withoutReturnType() {
//     print('i am a function which has no parameter and no return type');
// }

// function withReturnType() {
//     return 'i am a function which has no parameter but with return type';
// }

// function call
// add(3, 6);
// print(sub(45, 23));
// withoutReturnType();
// console.log(withReturnType());

// function expression



divide(3, 1);

function divide(a, b) {
    console.log(a / b);
}

let modulo = function(a, b) {
    console.log(a % b);
}

modulo(3, 1);

// arrow function

let print = (value) => {
    console.log(value);
}

print(45)
