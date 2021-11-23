// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/
let number = [...numbers];
let string = [...strings];
// - Find the index of `101` in numbers
number.indexOf[101];
// - Find the last index of `9` in numbers
number.indexOf[9];
// - Convert value of strings array into a sentance like "This is a collection of words"
string.join(" ");
// - Add two new words in the strings array "called" and "sentance"
string.concat("called","sentance");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(string.join(" "));
// - Remove the first word in the array (strings)
string.shift();
// - Find all the words that contain 'is' use string method 'includes'
string.includes("is");
// - Find all the words that contain 'is' use string method 'indexOf'
string.indexOf("is");
// - Check if all the numbers in numbers array are divisible by three use array method (every)
number.every(function(ele){
    return ele / 3;
});

// -  Sort Array from smallest to largest
string.sort();

// - Remove the last word in strings
string.pop();

// - Find largest number in numbers

// - Find longest string in strings

// - Find all the even numbers
number.map(function(num){
  return num %2 == 0;
});

// - Find all the odd numbers
number.filter(function(num){
  return num %2 !== 0;
});

// - Place a new word at the start of the array use (unshift)
string.unshift("newWord");
// - Make a subset of numbers array [18,9,7,11]
let array1 = [18,9,7,11];
number.concat(array1);
// - Make a subset of strings array ['a','collection']
let string1 = ['a','collection']
string.concat(string1); 
// - Replace 12 & 18 with 1221 and 1881
number.splice(12,18,1221,1881);
// - Replace words in strings array with the length of the word

// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'

// - Create new array with only first name
let firstname = [...firstname];
// - Create new array with all the full names (ex: "Joe Blogs")
let fullName = [...customers];
// - Sort the array created above alphabetically
customers.sort();
// - Create a new array that contains only user who has at least one vowel in the firstname.
