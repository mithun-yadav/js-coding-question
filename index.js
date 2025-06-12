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
