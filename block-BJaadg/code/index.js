// After knowing about string methods, practice those by solving problems given below.

let from = 'Syrio Forel';
let quote = 'There is only one thing we say to death: Not today';
let to = 'Arya Stark';

/*
1. Find the index of the first 'is' in the variable quote. And store it in a new variable named indexOfIs
*/
let element = quote.split(" ")
console.log(element.indexOf("is"));

/*
2. Find the character at the index indexOfIs (Problem 1) in quote.
*/
let newChar = quote.split("");
console.log(newChar.indexOf("i","s"));
/*
3. Log the message saying `The index of first is in quote is 7`
*/
console.log(`the index of first is in  quote is ${newChar.indexOf("s")}`);
/*
4. Log the message for first 6 characters of quote like this.
  The character at index 0 is 'T'
  The character at index 1 is 'h'
  The character at index 2 is 'e'
  The character at index 3 is 'r'
  The character at index 4 is 'e'
  The character at index 5 is ' '
*/let arr = quote.split("");
  let array = quote.indexOf(arr);

for (let i = 0; i < 6; i++) {
  const element = arr[i];
  let ar = array[i];
  console.log(`The character at index ${ar} is ${element}`);
}
/*
5. Using the variable from , to and quote variable dispaly this message
  "Syrio Forel said There is only one thing we say to death: Not today to Arya Stark." (use concat method)
*/
console.log(from.concat(quote,to));
/*
6. Does from, to and quote ends with "rk". Check all three.
*/
// let arrr = quote.split("");
// let arrr1 = to.split("");
// let arr2 = from.split("");
// if (from == "rk" && to == "rk" && quote == "rk") {
//   return true;
// } else {
//   console.log(false);
// }
// console.log(arrr,arrr1,arr2);
/*
7. Does quote includes the word "Only"
*/
let words = quote.split(" ");
console.log(words.includes("Only"));

/*
8. Does quote includes the word " we"
*/
console.log(words.includes(" we"));
/*
9. Find the index of the the word `we` in quote
*/
console.log(words.includes("we"));
/*
10. Split the quote into individual word and store it in a variable name quoteSplitted
*/
var quoteSplitted = quote.split(" ");
/*
11. Change the word "today" in quoteSplitted to "tomorrow" and join all the words to form a sentance.
*/
console.log(quoteSplitted.indexOf("today"));
quoteSplitted.pop("today");
quoteSplitted.push("tomorrow");

/*
12. Find the index of second "o" in quote. Use indexOf
*/
console.log(arr.indexOf("o"));
/*
13. Find the last index of letter "a" in quote.
*/
console.log(arr.lastIndexOf("a"));
/*
14. Find the second last index of letter "a" in quote.
*/
console.log(arr.indexOf("a"));
/*
15. Make the quote 70 character long. If it has less characters add rest as .......
Example: "Hello" (convert to 10 characters) => "Hello....."
Store the output in a new variable
*/
var quotes = ("hello...");
for(var i=0; i<70; i++){
  const element1 = quotes[i];
  console.log(element1);
}
/*
16. Do same as (15) but the ... should come in start. Store the output in a new variable
*/

/*
17. Log the repeat of "Hello World!" 10 times.
*/
let hello = "Hello World!"
console.log(hello.repeat(10));
/*
18. Replace today to tomorrow in quote.
*/
let qout11 = quote.replace("today","tomorow");
console.log(qout11);
/*
19. Replace Stark to Lannister in quoteTo
*/
let quoteTo = to.replace("stark","Lannister");
console.log(quoteTo);
/*
20. Make the quote of length 30 and put ... at the end. (use slice)
*/
quote.slice(0,30);
/*
21. Find out does quote, from, to starts with "A"
*/
let q = quote.split("");
