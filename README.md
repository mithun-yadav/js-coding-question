# JavaScript Coding Questions

This project contains a collection of JavaScript coding questions and their solutions. Each question is implemented as a code snippet in [index.js](index.js), with explanations and example usages provided in comments.

## Project Structure

- [index.html](index.html): Basic HTML file to load the JavaScript file and display a message.
- [index.js](index.js): Contains various JavaScript coding questions, solutions, and explanations.
- [styles.css](styles.css): Basic CSS reset for the project.

## How to Use

1. **Open the Project**  
   Clone or download the repository and open the folder in your preferred code editor.

2. **Run in Browser**  
   Open [index.html](index.html) in your browser.  
   The page will display a message, and you can view the output of the code snippets in the browser's console.

3. **Explore the Code**
   - Each question in [index.js](index.js) is separated by comments.
   - Uncomment the code block you want to test.
   - Save the file and refresh the browser to see the output in the console.

## Topics Covered

- Array manipulation (counting, removing duplicates, finding second highest, etc.)
- Object operations and destructuring
- Function scope and hoisting
- String manipulation (removing vowels, palindrome check, etc.)
- Sorting and other common JavaScript interview questions

## Example

```js
// Example: Count occurrences of each item in an array
const arr = ["a", "b", "c", "a", "d", "b"];
function countItem(arr) {
  let obj = {};
  arr.forEach((item) => {
    obj[item] = (obj[item] || 0) + 1;
  });
  return obj;
}
console.log(countItem(arr)); // Output: { a: 2, b: 2, c: 1, d: 1 }
```

## License

This project is for educational purposes.
Made with By ❤️ Mithun
