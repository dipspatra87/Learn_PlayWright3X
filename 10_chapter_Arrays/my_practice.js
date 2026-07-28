//An Array is an object type designed for storing data collections.
//Key characteristics of JavaScript arrays are:
//Elements: An array is a list of values, known as elements.
//Ordered: Array elements are ordered based on their index.
//Zero indexed: The first element is at index 0, the second at index 1, and so on.
//Dynamic size: Arrays can grow or shrink as elements are added or removed.
//Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).

//In 2015, JavaScript introduced an important new keyword: const.
//It has become a common practice to declare arrays using const:

//Cannot be Reassigned
//An array declared with const cannot be reassigned:

//Example
const cars = ["Saab", "Volvo", "BMW"];
//cars = ["Toyota", "Volvo", "Audi"];    // ERROR

// Arrays are Not Constants
// The keyword const is a little misleading.

//It does NOT define a constant array. It defines a constant reference to an array.

//Because of this, we can still change the elements of a constant array.

//Elements Can be Reassigned
//You can change the elements of a constant array:

// You can change an element:
cars[0] = "Toyota";
console.log("--1--", cars);
// You can add an element:
cars.push("Audi");
console.log("--2--", cars);

let arr1 = [1, 2];
arr1.push(3); //Add element to end of an array [1,2,3]
console.log("--3--", arr1);

let arr2 = [1, 2, 3];
arr2.pop(); //Remove the last element from an array //[1,2]
console.log("--4--", arr2);

let arr3 = [10, 20, 30];
let shiftedValue = arr3.shift(); // Remove the first element from an array [20,30]
console.log("--5--", arr3);
console.log("--5a--", shiftedValue);// Store the removed value in a variable

let arr4 = [20, 30];
arr4.unshift(10);// Add an element to the beginning of an array [10,20,30]
console.log("--6--", arr4);

let arr5 = [10, 20, 30];
arr5.includes(20)//Check if an array contains a specific element. Returns true or false. //true
console.log("--7--", arr5);

let arr6 = [10, 20, 30];
let index = arr6.indexOf(30)//Find the index of a specific element in an array. Returns -1 if not found. //2
console.log("--8--", arr6);

let arr7 = [1, 2, 3];
arr7.reverse()//Reverse the order of the elements in an array. // [3,2,1]
console.log("--9--", arr7);

let arr8 = [4, 2, 5, 1];
arr8.sort((a, b) => a - b);
//Sort the elements of an array in ascending order. // [1,2,4,5]
console.log("--10--", arr8);

let nums1 = [1, 2, 3];
let result = nums1.map(num => num * 2);
//Create a new array by applying a function to each element of an existing array. // [2,4,6]
console.log("--11--", result);

let nums2 = [1, 2, 3, 4, 5];
let even = nums2.filter(num => num % 2 === 0);
//Create a new array with all elements that pass the test implemented by the provided function. // [2,4]
console.log("--12--", even);

let nums3 = [5, 10, 15];
let value = nums3.find(num => num > 8);
//Return the first element in an array that satisfies the provided testing function. //10
console.log("--13--", value);

let nums4 = [1, 2, 3, 4];
let sum = nums4.reduce((total, num) => total + num, 0);
//Apply a function against an accumulator and each element in the array (from left to right) 
// to reduce it to a single value. //10
console.log("--14--", sum);

let nums5 = [1, 2, 3];
nums5.some(num => num > 2)
//Check if at least one element in the array passes the test implemented by the provided function. //true
console.log("--15--", nums5.some(num => num > 2));

let nums6 = [2, 4, 6];
nums6.every(num => num % 2 === 0)
//Check if all elements in the array pass the test implemented by the provided function. //true
console.log("--16--", nums6.every(num => num % 2 === 0));

let no1 = Math.max(5, 10, 20)//20
console.log("--17--", no1);

let no2 = Math.min(5, 10, 20) //5
console.log("--21--", no2);

let no3 = Math.round(5.6)//6

let no4 = Math.ceil(5.1) //6
console.log("--18--", no4);

let no5 = Math.floor(5.9) //5
console.log("--19--", no5);

let no6 = Math.random() //Random number between 0 and 1.
console.log("--20--", no6);




/**
 *  
 * Complete Array Reference
 * 
 */

// [ ]	Creates a new Array
// new Array()	Creates a new Array
// at()	Returns an indexed element of an array
// concat()	Joins arrays and returns an array with the joined arrays
// constructor	Returns the function that created the Array prototype
// copyWithin()	Copies array elements within the array, to and from specified positions
// entries()	Returns a key/value pair Array Iteration Object
// every()	Checks if every element in an array pass a test
// fill()	Fill the elements in an array with a static value
// filter()	Creates a new array with every element in an array that pass a test
// find()	Returns the value of the first element in an array that pass a test
// findIndex()	Returns the index of the first element in an array that pass a test
// findLast()	Returns the value of the last element in an array that pass a test
// findLastIndex()	Returns the index of the last element in an array that pass a test
// flat()	Concatenates sub-array elements
// flatMap()	Maps all array elements and creates a new flat array
// forEach()	Calls a function for each array element
// from()	Creates an array from an object
// includes()	Check if an array contains the specified element
// indexOf()	Search the array for an element and returns its position
// isArray()	Checks whether an object is an array
// join()	Joins all elements of an array into a string
// keys()	Returns a Array Iteration Object, containing the keys of the original array
// lastIndexOf()	Search the array for an element, starting at the end, and returns its position
// length	Sets or returns the number of elements in an array
// map()	Creates a new array with the result of calling a function for each array element
// of()	Creates an array from a number of arguments
// pop()	Removes the last element of an array, and returns that element
// prototype	Allows you to add properties and methods to an Array object
// push()	Adds new elements to the end of an array, and returns the new length
// reduce()	Reduce the values of an array to a single value (going left-to-right)
// reduceRight()	Reduce the values of an array to a single value (going right-to-left)
// reverse()	Reverses the order of the elements in an array
// shift()	Removes the first element of an array, and returns that element
// slice()	Selects a part of an array, and returns the new array
// some()	Checks if any of the elements in an array pass a test
// sort()	Sorts the elements of an array
// splice()	Adds or Removes array elements
// toReversed()	Reverses the order of array elements (to a new array)
// toSorted()	Sorts the elements of an array (to a new array)
// toSpliced()	Adds or Removes array elements (to a new array)
// toString()	Converts an array to a string, and returns the result
// unshift()	Adds new elements to the beginning of an array, and returns the new length
// valueOf()	Returns the primitive value of an array
// with()	Returns a new array with updated elements


const fruits = ["Banana", "Orange", "Apple", "Mango"];

let myList = fruits.toString();
//The toString() method returns a string with all array values, separated by commas.
console.log("--22--", myList);//Banana,Orange,Apple,Mango
