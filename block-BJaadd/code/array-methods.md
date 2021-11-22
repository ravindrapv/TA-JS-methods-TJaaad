Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
it acepets an array and return in a string value 
its join a  array number or an element to the exisiting array at center of two elements
```js
let numbers = [1,2,3];
numbers.join("+"); //"1+2+3"

numbers.join(" "); // 1 2 3;
numbers.join(""); //123;

```
3. `flat`
flate will do the all arrays into single array
a new array having all sub array of old old array concated  
```js
let num = [1,2,3[4,5,6,[4,6,7,[10,20,30]]]];
num.flat(Infinity);
```
4. `push`
push will push an element into inside an array last 
```js
let colors = ["red","green"];
colors.push("yellow");
```
5. `indexOf`
indexof will find the index of element number 
```js
let student = ["good","a","b","c"]
student.indexof("c");// 3
```
6. `lastIndexOf`
the lasinex of will aceapt the string value and return the index of the number
if the character is not exist its returns -1
```js
let name = ["ravindra","venkat","pv","ravi"];
name.lastIndexof("ravi"); // 3
``` 
7. `includes`
its returns boolean true or false values 
the include will search for the element that is existing in array are not and if its exist it returns the true value if its not exist its returns the false value 
```js
let description = ["today is good day to go for","altCampus"];
description.includes("altCampus"); //true

let alt = ["a","b","c","d","e"];
alt.includes("e"); // false 
```
8. `reverse`
the revers will aceapts the string and numbers and
revers() the given array to the revers 
ex
```js
let roomNumbers = [101,102,103,104,105,106,107,108,109,110];
roomNumbers.reverse(); //(10) [110, 109, 108, 107, 106, 105, 104, 103, 102, 101]

let movies =["bahubali","mirchi","happydays","singam"];
movies.reverse(); //['singam', 'happydays', 'mirchi', 'bahubali']
```
9. `every`
it aceapts numbers and strings arrays and it return only boolean like true or false
the every() will returns if the all conditions are true then its will return true 
if any one of conditions return false its false 

example
```js
let numbers = [1,2,3,4,5,6,7,8];
function num1(num){
  return num < 10;
}

numbers.every(num1); // true

let numbers = [1,2,3,4,5,6,7,8];
function num1(num){
  return num < 7;
}

numbers.every(num1); //false
```
10. `shift`
the shift will deleat the first element from an array and its mutabale 

example
```js
let colors = ["red","green","yellow","orange","blue"];
colors.shift();
//red will be deleted 
//"green","yellow","orange","blue"

let number = [20,10,40,50,60];
number.shift();
//20 deleted array
//10,40,50,60
```

11. `splice`
the splice is similer top slice and it will muted the array its accepts number type start the array 
and when to cut the array and also third one like element in the place of deleted array
```js
let num2 = [2,3,4,5,6,7,8,9,8,7,65,44,3,2,12];
num2.splice(2,10);
```
12. `find`
The find() method returns a value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

```js
let numbers = [6, 8, 10, 12, 43, 56, 98];

let num = numbers.find(function(cb){
return cb > 12;
});

console.log(num);
//43
```
13. `unshift`
the unshift will add the first element to the array
```js
let array1 = ["ravindra","is","a","good","boy"];

arra1.unshift("venkat");// (6) ['venkat', 'ravindra', 'is', 'a', 'good', 'boy']
```
14. `findIndex`
The findIndex() method returns an index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
```js
var array1 = [5, 12, 8, 130, 44];

function isLargeNumber(element) {
  return element > 13;
}

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
```
15. `filter`
the filter() will filter the array according to the given condition 
and its aceapts the call back function
```js
var array = [1,2,3,4,5,6,7,8,9,12,34,20];

function iseven(num){
  return num %2 === 0;
}

array.filter(iseven); //[2, 4, 6, 8, 12, 34, 20]
```

16. `flat`
the flat() will do the number of array blacks into in a one array
```js
array5 = [1,2[3,4[56,67,[77,[78[89]]]]]];

array.lat(Infinity);
```

17. `forEach`
the forEach() will aceapt the call back function and for each dosnot return anything
```js
var good = [10,20,30,21,34,56,9,7,5,3,1];

good.forEach(function(element){
console.log(element+2);
});
// 12
// 22
// 32
// so on 

```
18. `map`
the map will similer to the foreach its aceapt callback function and returns boolean value
like true or false
```js
var good = [10,20,30,21,34,56,9,7,5,3,1];

good.map(function(element){
return element%2 !== 0;
}); // [false, false, false, true, false, false, true, true, true, true, true];
```

19. `pop`
its remove the last element of an array and returns it 
```js
var number2 = [10,20,30,40,50,60,70,80,90,100];
numbers2.pop(); //100 deletes
[10,20,30,40,50,60,70,80,90];
```
20. `reduce`
the reduce will aceapts the 4 elements like accumulater, curentvalue and index ,array 
```js
let array3 = [1,2,3,4,5,6,7,8,9,10];
array3.reduce(function(acc,cv){
 return acc+cv
}); // 55
```
21. `slice`
the slice its not muted the array its aceapts start number and when to stop and its show that
```js
array4 = [1,2,3,4,5,6,7,8,9,10];
array4,slice(1,5) // 2,3,4,5,6
```
22. `some`
it aceapts numbers and strings arrays and it return only boolean like true or false
the some() will returns if the anyone conditions are true then its will return true 
if every  conditions return false its false 

example
```js
let numbers = [1,2,3,4,5,6,7,8];
function num1(num){
  return num < 10;
}

numbers.some(num1); // true

let numbers = [8,9,10,12];
function num1(num){
  return num < 7;
}

numbers.some(num1); //false
