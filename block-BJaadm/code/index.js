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
let filtermale = [];
filtermale.push(peopleSex.filter((e) => {
  return e.includes("M");
}));
console.log(filtermale);

// Log all the filtered female ('F') in persons array
let filterFemale = [];
filterFemale.push(peopleSex.filter((e) => {
  return e.includes("F");
}));
console.log(filterFemale);

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
let filterFemaleStarts = [];
filterFemaleStarts.push(peopleSex.filter((e) => {
  return e.includes("F") && e.startsWith("C") || 
  e.startsWith("J");
}));
console.log(filterFemaleStarts);

// Log all the even numbers from peopleGrade arra
let allevenNum = [];

allevenNum.push(peopleGrade.filter((num) => {
  return num %2 == 0;
}));
console.log(allevenNum);
// Find the first name that starts with 'J' in persons array and log the object
function firstName(fname){
  return fname.name === 'John'
}
console.log(persons.find(firstName));
// Find the first name that starts with 'P' in persons array and log the object
function firstName2(fname){
  return fname.name === 'Paula'
}
console.log(persons.find(firstName2));
// Find the first name that starts with 'J', grade is greater than 10 and is a female
function firstName3(fname){
  return fname.name == fname.name.startsWith("J")
}
console.log(persons.find(firstName3));
// Filter all the female from persons array and store in femalePersons array
let femalePersons = [];
femalePersons.push(peopleSex.filter((e) => {
  return e.includes("F");
}));
// Filter all the male from persons array and store in malePersons array
let malePersons = [];
malePersons.push(peopleSex.filter((e) => {
  return e.includes("M");
}));
// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((acc,cv)  => {
  return acc + cv;
});
console.log(gradeTotal);
// Find the average grade
console.log(peopleGrade.reduce((acc,cv)  => {
  let avg = acc
  return acc / cv;
})) /peopleGrade.length
// Find the average grade of male

// Find the average grade of female

// Find the highest grade

// Find the highest grade in male

// Find the highest grade in female

// Find the highest grade for people whose name starts with 'J' or 'P'

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