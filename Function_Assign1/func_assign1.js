
// 1. What is the difference between the two sum function given below?

// first
function sum(a, b) {
    return a + b;
  }
  console.log(sum(2,3,8));
  // second
  function sum(a, b) {
    console.log(a + b);
  }

//   Difference b/w first and second func. is that first, it will return sum of a + b But the second, it will log/display the sum of a + b on console, it will return undefined.

/* 2. If we store the returned value of both functions above in variable first and second what will be the value of first and second.

// let first = a + b
// let second = undefined (if function does'nt have a return statement it return "undefined".)
*/

/* 3. What will be the output when you call above sum function (first) with three parameter like sum(12, 24, 35). Explain why?

// when we call first func. with three params. then it returns (36) sum of first two params., becoz it have only two arguments So it does'nt take third param.


// 4. Can you store the first sum function in a variable named add. If yes why? If no why?

// 'Yes' we can becoz function is like an object and it is an Expression (Expressions are values) And values store in variables.

// 5. Declare a function named sayHello the accepts a parameter name and returns the name like Hello Arya.
function sayHello(name) {
    return `Hello ${name}`;
}
*/

// 6. What will be the output of the function below and why?

let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  return message;
}

showMessage();
// O/P: it will return "Hello, John"