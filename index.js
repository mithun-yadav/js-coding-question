/********************************************************************/
// first question convert array into object and with count of each item
/*
const arr = [
  "a",
  "b",
  "c",
  "a",
  "d",
  "b",
  "c",
  "a",
  "e",
  "f",
  "g",
  "b",
  "f",
  "h",
];

function countItem(arr) {
  // const arr = ["a","b","c"];
  let obj = {};
  arr.forEach((item) => {
    obj[item] = (obj[item] || 0) + 1;
  });

  return obj;
}

const result = countItem(arr);
console.log(result); //{ a: 3, b: 3, c: 2, d: 1, e: 1, f: 2, g: 1, h: 1 }
*/
/********************************************************************/
/*
let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]); // 456
*/
/********************************************************************/
/*
const obj = {
    a: "foo",
    b: function () {
      console.log(this.a);
    },
  };
  
  const c = obj.b;
  
  obj.b(); // foo
  c(); // undefined
  */
/********************************************************************/
/*
const x = { foo: 1 };
const y = { foo: 2 };

function addFoo(obj) {
  return obj.foo + 1;
}

console.log(addFoo(x));
console.log(addFoo(y));
*/
/*******************************************************************/
/*
let x = 1;

if (function f() {}) {
  x += typeof f;
}

console.log(x); // 1undefined because function f is not hoisted in this context
*/
/*******************************************************************/
/*
let x = 1;
function f() {}
x = x + typeof f;

console.log(x); // 1function because function f is hoisted in this context
*/
/******************************************************************/
/*
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z === y);
console.log(z == x); //false,false,true,true,false
*/
/******************************************************************/
/*
for(let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
*/
// This will log 5 five times because the loop completes before the timeouts execute
/******************************************************************/
/*
for(var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
  */
// This will log 5 five times because var is function scoped and the loop completes before the timeouts execute
/******************************************************************/
/*
for(let i = 0; i < 5; i++) {
  setTimeout((j) => {
    console.log(j);
  }, 1000, i);
}
*/
// This will log 0, 1, 2, 3, 4 because let is block scoped and the value of i is passed to the timeout function
/******************************************************************/
/*
for (var i = 0; i < 5; i++) {
  setTimeout(
    (j) => {
      console.log(j);
    },
    1000,
    i // third parameter to pass the current value of i to the timeout function
  );
}
  */
// This will log 0, 1, 2, 3, 4 because var is function scoped and the value of i is passed to the timeout function
/******************************************************************/
/*
var x = 0;
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    x++;
    console.log(x);
  }, 1000);
} // output will be 1, 2, 3, 4, 5 with a delay of 1 second
 */
/******************************************************************/
/*
let a = { x: 1 };
let b = { x: 2 };
let c = { x: 3 };
let d = { x: 4 };
let e = { x: 5 };
let arr = [a, b, c, d, e];

arr.forEach((obj) => (obj.x = obj.x * 2));

console.log(a.x, b.x, c.x, d.x, e.x);// output 2,4,6,8,10
*/
/******************************************************************/
/*
let num = 0;

function test() {
  var num = 1;
  return num;
}

console.log(test());
console.log(num); // output 1,0
*/
/******************************************************************/
/*
let obj = { name: "John", age: 25 };
let newObj = { ...obj, age: 30 };

console.log(obj.age);
console.log(newObj.age);// output 25,30
*/
/******************************************************************/
/*
const add = (a = 1, b = 2) => a + b;
console.log(add());
console.log(add(5));
console.log(add(undefined, 10)); // output 3,7,11
*/
/******************************************************************/
/*
const name = "John";
const age = 25;

const user = { name, age };
console.log(user); // { name: 'John', age: 25 }
*/
/******************************************************************/
/*
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(null === undefined);// false
console.log(null == undefined); // true
*/
/******************************************************************/
/*
function sumOfPositiveNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

// Example usage:
const arr = [1, -2, 3, 4, -5, 6];
console.log(sumOfPositiveNumbers(arr)); // Output: 14
*/
/******************************************************************/
/*
function removeVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
}

// Example usage:
const str = "This is a test string with vowels";
console.log(removeVowels(str)); // Output: Ths s  tst strng wth vwls
 */
/******************************************************************/
/*
function sortStrings(arr) {
  return arr.sort();
}

// Example usage:
const strings = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(sortStrings(strings)); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']
*/
/******************************************************************/
/*
function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// Example usage:
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
*/
/******************************************************************/
/*
function findSecondHighest(arr) {
  const sortedArr = arr.sort((a, b) => b - a);
  return sortedArr[1];
}

// Example usage:
const numbers = [10, 5, 20, 15, 8];
console.log(findSecondHighest(numbers)); // Output: 15
*/
/******************************************************************/
/*
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Example usage:
const numbers = [1, 2, 3, 2, 1, 4, 5, 4];
console.log(removeDuplicates(numbers)); // Output: [1, 2, 3, 4, 5]
*/
//23; /******************************************************************/
/*
//Sum of all positive numbers in an array
const arr = [1, 2, 3, 4, -5, 5];

const sumOfAllPositiveNumbers = arr.reduce((acc, curr) => {
  return curr > 0 ? acc + curr : acc;
}, 0);

console.log(sumOfAllPositiveNumbers);
*/
//24; /******************************************************************/
/*
//flatten array
const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];
const flattenArray = arr.reduce((acc, curr) => {
  return acc.concat(curr);
}, []);
console.log(flattenArray);
*/
//25 /******************************************************************/
/*
//count occurance
const fruits = ["apple", "banana", "apple", "orange", "banana"];
function countItem(arr){
const fruitCount = arr.reduce((acc,curr)=>{
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
},{}) 
return fruitCount
}

console.log(countItem(fruits));//{ apple: 2, banana: 2, orange: 1 }
*/
//26 /******************************************************************/
/*
const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Jack", age: 30 },
];

function groupByProperty(arr, prop) {
  const result = arr.reduce((acc, curr) => {
    console.log(acc[curr[prop]], "$$");
    const key = curr[prop];
    acc[key] = acc[key] ? [...acc[key], curr] : [curr];
    return acc;
  }, {});
  return result;
}

console.log(groupByProperty(people, "age"));
/*
/******************************************************************/
