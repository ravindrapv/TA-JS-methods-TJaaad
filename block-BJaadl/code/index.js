let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(array0) {
  return [...array0].sort((a,b) => a.length - b.length).push();
}

console.log(findLongestWord(words));
// - Convert the above array "words" into an array of length of word instead of word.
let lengthofwords = words.map((w) => w.length);
// - Create a new array that only contains word with atleast one vowel.
// function vowel(words){
//   return words.toLowerCase().includes("a") ||
//   words.toLowerCase().includes("a") ||
//   words.toLowerCase().includes("e") ||
//   words.toLowerCase().includes("i") ||
//   words.toLowerCase().includes("o") ||
//   words.toLowerCase().includes("u")
// }
// let vowelFilter = words.filter((w)  => vowel(w));
// console.log(vowelFilter);
// - Find the index of the word "rhythm"
console.log(words.indexOf("rhythm"));
// - Create a new array that contians words not starting with vowel.
// let notWithvowel = words.filter((w)  => !vowel(w[0]));
// - Create a new array that contianse words not ending with vowel

// let notEndingWithvowel = words.filter((w)  => !vowel(w.length -1));

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(acc,cv) {
  return acc + cv;
}
console.log(numbers.reduce(sumArray));
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

function multipliedby(arr){
  return arr*3
}
let newarray = [numbers.filter(multipliedby)];
// - Create a new array that contains only even numbers
function evenNumber(num){
  return num %2 == 0;
}
let newarrayeven = [numbers.filter(evenNumber)];

// - Create  a new array that contains only odd numbers.
function OddNumber(num){
  return num %2 !== 0;
}
let newarrayOdd = [numbers.filter(OddNumber)];
// - Create a new array that should have true for even number and false for odd numbers.
function OddevenNum(num){
  return num %2 == 0;
}

let oddeven = [numbers.map(OddevenNum)];
// - Sort the above number in assending order.
let newNumbers = [...numbers];
newNumbers.sort((a,b) => b - a);
// - Does sort mutate the original array?
//yes sort muted the original array
// - Find the sum of the numbers in the array.
let sum = numbers.reduce((acc,cv) => {
  acc = acc + cv;
    return acc;
});

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers (array) {
  return  numbers.reduce((acc,cv) => {
    acc = acc + cv;
      return acc;
},0) / array.length


let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(array){
  return  array.length -1;
}
console.log(words.map(averageWordLength));