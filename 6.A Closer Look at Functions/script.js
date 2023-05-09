'use strict';
/*
// ******************************TODO:Default parameters*******************************
// We can set default value in a parameter in a function. Ex: age parameter
// We can write any expression as a default value Ex: birthYear
const myBio = function (name, age = 24, birthYear = 998.5 * 2, birthPlace) {
  // ES5 old way to set the default value.
  //age = age || 24; //By short circuting
  const myBioObj = {
    name,
    age,
    birthYear,
    birthPlace,
  };
  return myBioObj;
};

// If we write any other value as an arguments it will replace the default value
console.log(myBio('shohag', 1997, 'Sylhet')); //This will replace the age value 24 to 1997 and birthYear value to 1997 to Sylhet.
// If we want the value of age to remain the default value we should call undefined in the place of age arguments.
console.log(myBio('shohag', undefined, 1997, 'Sylhet')); //If we call the function this way the default value will remain unchanged.
// We can simply change the default value by override the default value
console.log(myBio('Shohag', 25, 2000, 'Sylhet'));
*/
// **********************************TODO:How Passing Arguments Works_ Value vs. Reference*****************************************

// ********************************************TODO:First-Class and Higher-Order Functions**********************************************
/*
// **************************************TODO:Callback Function*********************************************
// At first we need lo look which function is called. Here transformer function is called.
// In transformer function two arguments have passed. one is a string and another one is a function.
// Then we need to look into the function which is called in the arguments. And we also need to call the function.
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

// console.log(oneWord('My name is Shohag'));
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`${fn(str)}`);
};

transformer('Javascript is the best language', oneWord);
transformer('Jacascrpt is the best language', upperFirstWord);
*/
/*
// ***************************************TODO:Function Returning Function**************************************
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeter = greet('Hey'); //This function call will return another function which is stored in greeter variable.
greeter('Shohag'); //This is the inner function

// Another shortcut way to call the function
greet('Hey')('Ony');
*/

// *********************************TODO:The call and apply methods******************************************
// By call and apply method we can manually set the this keyword from one object to another object.
// These method only used for function call
/*
const lufthansa = {
  airline: 'Lufthanasa',
  iataCode: 'LH',
  bookings: [],
  //book: function(flightNum,name){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Ebadur Shohag');
lufthansa.book(455, 'Shakhawat Ony');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
book.call(eurowings, 255, 'Ebad Shohag'); // Here we have brought the book function from lufhtansa object to the Eurowings object
console.log(eurowings);

//apply  method and and called method are similar. Only difference is applay method use the array as a parameter
const array = [236, 'Farjana Romu'];
book.apply(lufthansa, array);

// But in modern Javascript we can use spread method instead of array
//So we should use call method instead of array in modern Javascript
book.call(lufthansa, ...array);
*/

// *********************************TODO:The bind method******************************************

// *********************************TODO:Immediately Invoked Function Expressions (IIFE)*******************************
/*
//Sometimes we need a function that is only execute once and then never again. Basically a function that disappears right after it's called once.
//This is not really a fature of Javascript. It's more of a pattern, that some developers came up with.

// Normal function (without IIFE)
//We can call this function as many times as we want
 const runOnce = function () {
   console.log('This will never run again');
 };
 runOnce();
 runOnce();

//Old Arrow function
 const runOnce = () => console.log('This is an Arrow function');
 runOnce();

//IIFE
(function () {
  console.log('This will never run again');
})();

// Arrow function with IIFE
(() => console.log('This will never run again'))();

*/
// *********************************TODO:Closures******************************************
/*
//Definition-1: A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves(সংরক্ষণ করে) the scope chaint throughtout time.

//Definition-2: A closure makes sure that a function doesn't loose connection to variables that exieted at the function's birth place.

//Definition-3: A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created.

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();
//Here booker function  has now access to the passengerCount variable. But passengerCount variable created on secureBooking function's variable environment.
*/

// *********************************TODO:More Closures Example]]******************************************
//closure has priority over scope chain
/*
//Example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

//Re-assign f function
h();
f();

// Example 2
const borderPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(() => {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
};
borderPassengers(180, 3);
*/
