let message = 'If you are still thinking the answer is no!';

// Log the length of the variable message like `The length of [message] is [length]`
console.log(`The length of ${message} is ${message.length}`);

// Log the character at index 0 of the variable message like `The first character of [message] is [character]`
console.log(`The first character of ${message} is ${message.charAt(0)}`);
// Log the last character of message using length like `The last character of [message] is [character]`
console.log(`The first character of ${message} is ${message.charAt(message.length-1)}`);
// Log the index of word "you" in message
let word = "you"
let search = message.indexOf(word);
console.log(search);
// Log the index of word "still" in message
let word1 = "still"
let search1 = message.indexOf(word1);
console.log(search1);

// Log the index of word "answers" in message
let word2 = "answer"
let search2 = message.indexOf(word2);
console.log(search2);
// Log true or false based on whether the word "answers" exist in message or not
let words = "answers";
console.log(message.includes(words));
// Log true or false based on whether the word "they" exist in message or not
let words1 = "they";
console.log(message.includes(words1));
// Log true or false based on whether the word "is" exist in message or not
let words2 = "is";
console.log(message.includes(words2));
// Log true or false based on whether the word "Is" exist in message or not
let words3 = "Is";
console.log(message.includes(words3));
// Check and log whether the word from index 3 to 6 is "you" or not (use slice)
console.log(message.slice(3,6));
// Check and log whether the word from index 7 to 8 is "a" or not
console.log(message.slice(7,8));
// Check and log whether the last 3 character in message is "no!" or not (you can use -3 in slice)
console.log(message.slice(message.length-3));
// Check and log whether the last 5 character in message is "no!" or not
console.log(message.slice(message.length-5))

// Log the message variable, all in lowecase
console.log(message.toLowerCase());
// Log the message variable, all in uppercase
console.log(message.toUpperCase());
// Replace the word "are" to "can't", store it in a new variable named `newMessage` and log it.
let newMessage = message;
console.log('are'.replace("can't"));
console.log(newMessage);
// Replace the word "still" to "" (empty) using newMessage variable, and re-assign the output to the variable `newMessage` and log it.

// Replace the word "thinking" to "decide" using newMessage variable, and re-assign the output to the variable `newMessage` and log it.

// Log all the characters from the message variable (you can user for..of loop on string)
for (const string of message) {
    console.log(message);
}
// Split all the words in message (split by " " space) and store it in a variable messageArray
let messageArray = message.split(" ");
// Log all the words of messageArray
console.log(messageArray);



