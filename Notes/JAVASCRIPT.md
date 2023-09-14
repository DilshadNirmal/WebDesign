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

properties can also have functions as values in this case those properties are called _methods_.

Objects are collections of properties.