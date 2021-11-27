let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array

let peopleName = [];

persons.forEach((e)=>{
    peopleName.push(e.name)

});

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = [];

persons.forEach((ele)  => {
  peopleGrade.push(ele.grade)
});

// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = [];

persons.forEach((e)=>{
    peopleSex.push(e.sex)
});

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let Newarray = [];
Newarray.push(peopleName.filter((e) => {
  return e.startsWith("J") || e.startsWith("P");
}));
console.log(Newarray);

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let Newarray2 = [];
Newarray2.push(peopleName.filter((e) => {
  return e.startsWith("A") || e.startsWith("C");
}));
console.log(Newarray2);

// Log all the filtered male ('M') in persons array
console.log(persons.filter((people) => people.sex == "M")
);

// Log all the filtered female ('F') in persons array

console.log(persons.filter((people) => people.sex == "F")
);

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log(persons.filter((people) => people.sex == "F")
.filter((e) => e.name.startsWith("C")) || e.name.startsWith("C")
);

// Log all the even numbers from peopleGrade arra
let allevenNum = [];

allevenNum.push(peopleGrade.filter((num) => {
  return num %2 == 0;
}));
console.log(allevenNum);
// Find the first name that starts with 'J' in persons array and log the object
console.log(persons.find((person) => person.name.startsWith("J")));
// Find the first name that starts with 'P' in persons array and log the object
console.log(persons.find((person) => person.name.startsWith("P")));
// Find the first name that starts with 'J', grade is greater than 10 and is a female
console.log(persons.find((person) => person.name.startsWith("P")) 
&& persons.grade >10 && persons.sex == "M");
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((person) =>  person.sex == "F");
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((person) =>  person.sex == "M");
// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((acc,cv)  => {
  return acc + cv;
});
console.log(gradeTotal);
// Find the average grade
gradeTotal / peopleGrade.length
// Find the average grade of male
let malegrade = persons.filter((person) =>  person.sex == "M");
malegrade.reduce((acc,cv) => {
  return acc + cv;
},0) / malegrade.length;
// Find the average grade of female
let femalegrade = persons.filter((person) =>  person.sex == "F");
femalegrade.reduce((acc,cv) => {
  return acc + cv;
},0) / femalegrade.length;
// Find the highest grade
[...peopleGrade].sort((a,b) => a - b).pop();
// Find the highest grade in male
[...malegrade].sort((a,b) => a - b).pop();
// Find the highest grade in female
[...femalegrade].sort((a,b) => a- b).pop();
// Find the highest grade for people whose name starts with 'J' or 'P'
let newgradHigh = persons.filter((person) => 
person.name.startsWith("J") ||
person.name.startsWith("P"));
 
gradeWithnew = newgradHigh.map((person) => person.grade);

[...gradeWithnew].sort((a,b) => a-b).pop();
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
console.log(peopleGrade.sort((a,b) => a - b));

// Sort the peopleGrade in descending order
console.log(peopleGrade.sort((a,b) => b - a));
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
console.log([...peopleGrade].sort((a,b) => b - a));
// Sort the array peopelName in ascending `ABCD..Za....z`
console.log(peopleName.sort((a,b) => a -b));
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
console.log([...peopleName].sort((a,b) => a -b));