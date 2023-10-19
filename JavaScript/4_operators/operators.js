/**
 * there are _ operators in programming languages
 * 
 * Operators
 * 1. assignment
 * 2. arithmetic
 * 3. compound assignment 
 * 4. comparison - always returns boolean
 * 5. logical 
 * 6. unary
 * 7. bitwise
 * 8. ternary
 */

var programming_language = 'javascript';

let num_1 = 100,
    num_2 = 2;

let addition = num_1 + num_2;
console.log('additon: ', addition);
let subtraction = num_1 - num_2;
console.log('subtraction: ', subtraction);
let multiplication = num_1 * num_2;
console.log('multiplication: ', multiplication);
// divison
let quotient = Math.floor(num_1 / num_2);
console.log('quotient: ', quotient);
let remainder = num_1 % num_2;
console.log('remainder: ', remainder);

let num_3 = 100;
num_3 += addition; // num_3 = num_3 + addition
console.log('using compound addition: ', num_3);
num_3 -= subtraction;
console.log('using compound subtraction: ', num_3);

/**
 * greater than - `>`
 * lesser than - `<` 
 * equal to - `==`
 * not equal to -  `!=`
 * strictly equal to - `===`
 * greater than or equal to 
 * lesser than or equal to
 */
let compare = (5 === '5');
console.log(`from comparison operator: ${compare}`);

let trueCondition = (5 === 5);
let trueCondition_2 = (10 < 15);
let falseCondition = ('revanth' < 'revanth');

/**
 * && - returns true ? when both the values are true : false
 * || - return true ? when any one of the values is true : false
 * !
 */

let logicalAnd = (trueCondition && falseCondition);
console.log(`from logical And: ${logicalAnd}`);
let logicalOr = (trueCondition || falseCondition);
console.log(`from logical Or: ${logicalOr}`);

console.log('from logical Not', !falseCondition)
/**
 * post
 * pre
 * decrement and increment
 */
let value = 1;
++value;
value--;
console.log('for unary: ', value);

/**
 * bitwise and
 * bitwise or
 * bitwsie negation
 * left shift
 * right shift
 * 
 * &  |  0  |  1
 * 0  |  0  |  0
 * 1  |  0  |  1
 * 
 * |  |  0  |  1
 * 0  |  0  |  1
 * 1  |  1  |  1
 * 
 * 3 - 0010
 * 4 - 0011
 * ________
 * 3 - 0010
 */
console.log('for bitwise operators....');
console.log(4 << 1);

/**
 * ternary
 * (condition) ? statement_1 : statement_2;
 */

let voting_age = 18;
let user_age = 26;
let result = (user_age > voting_age) ? 'eligible' : 'not eligible';
console.log(`user is ${result}`);