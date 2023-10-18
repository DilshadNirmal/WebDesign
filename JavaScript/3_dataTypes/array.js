/**
 * there are 2 composite data types
 * 1. arrays
 * 2. objects
 * 
 * array - can hold multipe values of different datatypes
 * 
 * array has a property and different methods
 */

let one_dimensionalArray = [1, 2, 3, 4, 5];

let numeric_array = [6, 7, 8, 9, 0],
    alpha_array = ['w', 's', 'd', 'a', ' '];


const length_one_dimensionalArray = one_dimensionalArray.length;

let pop = one_dimensionalArray.pop()
    push = one_dimensionalArray.push(6),
    shift = one_dimensionalArray.shift(),
    unshift = one_dimensionalArray.unshift(0),
    indexOf = one_dimensionalArray.indexOf(3);

let array = new Array(3, 5, 6, 7, 7);
array[4] = 'e';
array[5] = 'g';