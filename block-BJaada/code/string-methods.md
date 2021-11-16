Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
-its a string data type
-it converts lower case to uppercase
-syntex
toUpperCase();
example
```js
let name = "ravindra";
name.toUpperCase();
```
3. `toLowerCase`
-A new string representing the calling string converted to lower case.
its a string data type 
-sytex 
toLowerCase();
example
```js
let firstName = "venkat"
firstName.toLowerCase();
```
4. `trim`
-A new string representing str stripped of whitespace from both its beginning and end.
its a string datatype
-syntex 
trim();
example
```js
let movie = "  bahu  bali  ";
movie.trim();
```
5. `trimEnd`
-A new string representing str stripped of whitespace from both its beginning and end.
its a string datatype
-syntex 
trimEnd()
example
```js
movie.trimEnd()
```
6. `trimStart`
-A new string representing str stripped of whitespace from both its beginning and end.
its a string datatype
-syntex 
trimStart();
example
```js
movie.trimStart();
```
7. `concat`
The concat() method concatenates the string arguments
 to the calling string and returns a new string.
 sytex
 concat();
 example
 ```js
 let str1 = "venkat";
 let str2 = "ravindra";
 str1.concat('',str2);
 str2.concat(str1,'');
 ```
8. `endsWith`
The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
-syntex
endsWith();
example
```js
var string1 = "ravindra is a good developer"
string1.endsWith('developer');

var string2 = "ravindra is good boy";
string2.endsWith("good");
```
9. `includes`
The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.
Syntax
includes(searchString)
includes(searchString, position)
example
```js
let god = "pray for good life"

god.includes(for);// true
god.includes(good); // true
god.includes(helth); // false
```

10. `indexOf`
The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
Syntax
indexOf(searchValue)
indexOf(searchValue, fromIndex)

example
```js
'hello world'.indexOf('', 11) // returns 11
'hello world'.indexOf('', 13) // returns 11
'hello world'.indexOf('', 22) // returns 11
```
11. `lastIndexOf`
The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
Syntax
indexOf(searchValue)
indexOf(searchValue, fromIndex)

example
```js
'canal'.lastIndexOf('a');     // returns 3
'canal'.lastIndexOf('a', 2);  // returns 1
'canal'.lastIndexOf('a', 0);  // returns -1
```
12. `padEnd`
The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.
Syntax
padEnd(targetLength)
padEnd(targetLength, padString)
```js
'ravindra'.padEnd(10);          // "ravindra       "
'abc'.padEnd(10, "foo");   // "abcfoofoof"
'abc'.padEnd(6, "123456"); // "abc123"
'abc'.padEnd(1);           // "abc"
```
13. `padStart`
The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
Syntax
padStart(targetLength)
padStart(targetLength, padString)
example
```js
'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"
```
14. `repeat`
The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
sytex
repeat();
example
```js
let mood = "happy";
mood.repeat(20);
```
15. `replace`
The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
syntex
replace();
example
```js
let str = 'Twas the night before Xmas...';
let newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...
```
16. `slice`
The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
Syntax
slice(beginIndex)
slice(beginIndex, endIndex)
example
```js
let str1 = 'The morning is upon us.', // the length of str1 is 23.
    str2 = str1.slice(1, 8),
    str3 = str1.slice(4, -2),
    str4 = str1.slice(12),
    str5 = str1.slice(30);
console.log(str2)  // OUTPUT: he morn
console.log(str3)  // OUTPUT: morning is upon u
console.log(str4)  // OUTPUT: is upon us.
console.log(str5)  // OUTPUT: ""
```
17. `split`
The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.
Syntax
split()
example
```js
const names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand '

console.log(names)

const re = /\s*(?:;|$)\s*/
const nameList = names.split(re)

console.log(nameList)

```
18. `substring`
The substring() method returns the part of the string between the start and end indexes, or to the end of the string.

example
```js
const str = 'Venkat';

console.log(str.substring(1, 3));
// expected output: "ek"
```
