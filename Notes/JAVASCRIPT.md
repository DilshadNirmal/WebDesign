## Lessons

<details>
	<summary>JavaScript</summary>
		<ol>
			<li>Working with JavaScript</li>
			<li>Variables</li>
			<li>Data Types</li>
			<li>Arrays</li>
			<li>Objects</li>
			<li>Operators</li>
			<li>If Else Statements</li>
			<li>Loops</li>
			<li>Functions</li>
			<li>Selectors</li>
			<li>Events</li>
			<li>Back to Top Button</li>
			<li>Textbox Auto Completion</li>
			<li>Simple Content Slider</li>
			<li>Image Lightbox</li>
			<li>Tab Control</li>
		</ol>
</details>

## Working With JavaScript

### What is JavaScript

_Javascript_ is a _programming language_. Javascript can run locally in your _browser_ but it can also run on a server using _node.js_.

Regardless on how you work on it **javascript** is one of the three core technologies used to produce content for the _world wide web_. The other two are `of course` [[HTML]] and [[CSS]].

>[!NOTE]
>Every modern _browser_ supports javascript by default, it doesn't need any plugins.

![JS_by_default](images/jsByDefault.png)

That makes it a really good choice for adding a little bit of interactivity to your website or your web application.

![Brendan_Eich](/images/brendanEich.jpg)

JavaScript was invented by **Brendan Eich** in 1995. It was developed for Netscape 2, and became the ECMA-262 standard in 1997. After Netscape handed JavaScript over to ECMA, the Mozilla foundation continued to develop JavaScript for the Firefox browser.

### How to Work with JavaScript

When it comes to writing and running JavaScript code, you can do it in three ways.

>demo : 1_howToWorkWith

1. __The Browser Console__
2. __Inline in HTML DOC__
3. __Dedicated JS file__

## Variables

_Variables_ are values that store specific data types.

>demo : 2_Variables

Variables also have _scope_ and scope refers to the context in which these variables are available.
There are two scopes when declaring a variable - 
1. Global scope
2. Local scope

Declaring Variables:

`var`: Variables declared with `var` have function scope or global scope, and can be redeclared and reassigned.

> var x = 5; var y = "Hello";  


`let`: Variables declared with `let` have block scope, can be reassigned but not redeclared.

 > let age = 25; let name = "John";  
 
 
`const`: Variables declared with `const` have block scope, cannot be reassigned or redeclared. However, for objects and arrays, their properties or elements can be modified. 

>  const PI = 3.14; const person = { name: "Alice", age: 30 }; person.age = 31; `// Valid - modifying a property of a const object`
## Data Types

There are **seven** data types in javascript, _five_ of them are `primary` and _two_ of them are `composite`.

> 3_dataTypes - datatypes.js

Primary ones include - 
* String
* number
* boolean
* null
* undefined

### Typeof operator

The _typeof_ operator returns the data type of the operand.
It is mentioned like `operator` followed by an  `opreand`.

>  typeof operand

The composite data types mentioned are _arrays_ and _objects_.

## Arrays

> demo : 3_dataTypes - array.js

An _array_ is basically a list of values. And in javascript, you can use a mix of data types in an array.
Arrays are zero-based index. The index starts with 0 and ends a value less than the length of the specified array.

Arrays have _properties_ and _methods_.

### property - length

The length property gives us the number of items from that array.
You can access the property like the below.,

> arrayName.length

### Methods

We have different methods namely '_push_', '_pop_', '_shift_', '_unshift_' and '_indexOf_'.

1. `push` - will add an item to the end of an array.
2. `pop` - will remove an item at the end of the array.
3. `shift` - used to remove an item from the front or the start of an array.
4. `unshift` - used to add an item to the front of an array.
5. `indexOf` - used to find the index of a specific item in an array.

>[!FUNBIT]
>you will be returned  `-1` , if the item is not found in the array.


## Objects

> demo : 3_dataTypes - objects.js

Objects in javascript are pretty easy to understand and it all starts from properties.

A property is an association between a name and a value.

> for example: color = red

>[!NOTE]
>properties can also have functions as values in this case those properties are called _methods_.

Objects are collections of properties. Objects can also have methods and a method is simply a property that has a function has its value.

## Operators

> demo : 4_operators

### Assignment Operator

_Assignmenet_ operator assigns a value to its left operand based on the value of its right operand.

#### Compound Assignment Operators

you can use **arithmetic operators** with the assignment operator.

### Arithmetic Operators

Arithmetic operators are used for mathematical calculations.

- `+` (Addition): Adds two numeric operands.
- `-` (Subtraction): Subtracts the right operand from the left operand.
- `*` (Multiplication): Multiplies two numeric operands.
- `/` (Division): Divides the left operand by the right operand.
- `%` (Modulus): Returns the remainder of division.

When using arithmetic operators, you also need to know about **Operator precedence** and **Associativity**.

> example:
> let `result` = 10 + 5 * 2;

```
Operator precedence and Associativity

- Operators have different precedence levels, and parentheses can be used to enforce specific evaluation order.
- Operators with higher precedence are evaluated first.
- Associativity defines the order in which operators of the same precedence are evaluated.
```
### Comparison operators

_Comparison_ operator will compare its operands and return a boolean value based on the result of that comparison.

These are
1. Equal
2. Not equal
3. Strict equal
4. Is greater
5. Is lesser
6. Is greater or equal
7. Is lesser or equal

### Logical Operators

Logical operators are `and (&&)`, `or (||)` and `not (!)`.

Logical operators are used in programming to perform logical operations on Boolean values.

>[! Three main logical operators]
>- `and (&&)`: This operator returns `true` if both operands are `true`, and `false` otherwise.
>- `or (||)`: This operator returns `true` if at least one of the operands is `true`, and `false` if both are `false`.
>-  `not (!)`: This operator negates the Boolean value of its operand. If the operand is `true`, `not` will return `false`, and if the operand is `false`, `not` will return `true`.

### Unary Operator

Unary operators operate on a `single` operand.

#### Increment (`++`)
- **Post-increment (`variable++`)**: Increases the value of `variable` by 1 after using its current value in an expression.
- **Pre-increment (`++variable`)**: Increases the value of `variable` by 1 before using its updated value in an expression.


#### Decrement (`--`)
- **Post-decrement (`variable--`)**: Decreases the value of `variable` by 1 after using its current value in an expression.
- **Pre-decrement (`--variable`)**: Decreases the value of `variable` by 1 before using its updated value in an expression.

#### Unary Plus (`+`)

- Converts an operand into a number. For example, `+"42"` converts the string `"42"` to the number `42`.

#### Unary Minus (`-`)

- Negates the value of an operand. For example, `-5` negates `5` to `-5`.

#### Typeof Operator (`typeof`)

- Returns a string indicating the data type of an operand. For example, `typeof 42` returns `"number"`.

#### Void Operator (`void`)

- Discards the result of an expression and returns `undefined`. For example, `void 0` returns `undefined`.

### Bitwise Operators 

Bitwise operators perform operations at the binary level on the individual bits of operands. 
#### Bitwise AND (`&`) 
- Performs a bitwise AND operation between two integers, returning a new integer with bits set to 1 where both operands have 1. 
#### Bitwise OR (`|`) 
- Performs a bitwise OR operation between two integers, returning a new integer with bits set to 1 where either operand has 1. ### Bitwise XOR (`^`) - Performs a bitwise XOR (exclusive OR) operation between two integers, returning a new integer with bits set to 1 where only one operand has 1. 
#### Bitwise NOT (`~`) 
- Performs a bitwise NOT (complement) operation on an integer, flipping the bits. 
#### Left Shift (`<<`) 
- Shifts the bits of an integer to the left by a specified number of positions, filling with zeros. 
#### Right Shift (`>>`) 
- Shifts the bits of an integer to the right by a specified number of positions, filling with sign bit (arithmetic right shift). 
#### Zero-fill Right Shift (`>>>`) 
- Shifts the bits of an integer to the right by a specified number of positions, filling with zeros. 

These operators are essential for performing low-level bit manipulation and optimizing certain operations in JavaScript.

## If-Else Statement

_**if - else statements**_ are essential for any kind of programming and it allows you to execute various blocks of code if a specific condition is met.

> demo : 5_if-else

### Ternary Operator

It's a special case operator that takes `three operands`.

The syntax goes like this:

> condition ? statement_1 : statement_2;

## Loops

Loops are a piece of code that executes repeatedly either a set number of times or until the certain condition is met.

There are three main types of loops in JavaScript, they are

1. For-loop
2. While loop
3. do-while loop

