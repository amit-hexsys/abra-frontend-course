

// 1. Write a JavaScript function which accepts an argument and returns the type.

const getType = (argument) => typeof argument;
  
console.log(getType(5));
  
//2. Write a JavaScript program that accept two integers and display the larger.
  
const largerNum = (num1, num2) => {
    return num1 >= num2 ? num1 : num2;
}
console.log(largerNum(10, 6));

//3. Write a JavaScript function to check whether an `input` is an array or not
  
const checkArray = (input) => Array.isArray(input) ;

console.log(checkArray([5, 2]));

//4. Write a simple JavaScript program to join all elements of the following array into a string. 
//Sample array : myColor = ["Red", "Green", "White", "Black"];
  
const joinArray = (arr) => arr.join(' ');

console.log(joinArray(["Red", "Green", "White", "Black"]));