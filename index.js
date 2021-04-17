// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//Write a method that performs a comparison between two objects

//Intialize variables to compare
let object = { a: 1, b: 2, c: 3 };
let test = { a: 1, b: 2, c: 3 };
let test2 = { a: 1, b: 2, c: 3, d: 4 };
let test3 = { a: 2, b: 2, c: 3 };

// Object is not iterable because its an object
// for (let key of object) {
//   console.log(key, object[key])
// }

// Object is iterable because .keys() puts the keys of an object into an array
for (let key of Object.keys(object)) {
  console.log(key, object[key]);
}

//Create a function that compares two objects
function compareObj(obj1, obj2) {
  // Takes keys of both objects into an array and stored into a variable
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  // Condition that if the two arrays are not the same length they are not identical
  if (keys1.length != keys2.length) {
    return false;
  }
  // For of: is a loop that iterates over iterable objects
  for (let key of keys1) {
    // If the value of the object is not equal to value of object2 it is not identitcal
    if (obj1[key] != obj2[key]) {
      return false;
    }
  }

  return true;
}

// console.log(object.a);
console.log(compareObj(object, test));
console.log(compareObj(object, test2));
console.log(compareObj(object, test3));
