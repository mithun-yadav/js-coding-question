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
