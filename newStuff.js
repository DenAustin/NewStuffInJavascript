// thins you can log in js
console.log("strings");
console.log(1,2,3);
console.log(true);
let canLogVariables = ("Can log variables");
console.log(canLogVariables);
// can log arrays
console.log([1,2,3,4,5]);
// can log objects
console.log({objekt1 : "vars", objekt2 : "funcs"});
// can log tables
console.table({objekt1 : "vars", objekt2 : "funcs"})
// Can log errors and tell you where it is
console.error("My delibrate error");
// or warning
console.warn("Delibrate warning");
// can clear the console
console.clear("");
// can cosole how long script took to run
console.time("Hello Timer");
console.error("sctipt to execute");
console.error("sctipt to execute");
console.error("sctipt to execute");
console.error("sctipt to execute");
console.log("Hello Timer");


const strng = "Hello world";
console.log(typeof strng);
const nums = 7;
console.log(typeof nums);
const sym = Symbol();
console.log(typeof sym);


// OBJECT LITERAL REFERENCE TYPES
let person = {
  firstName: "Paulo",
  lastName: "Russel",
  age : 27,
  country: "Jordan",
  income: "rich",
  hobbies : ["rock","sports"],
  school : "smithPaulo@osu.com",
  address: {city: "Miammi", state: "Florida"},
  getBirthYear: function (){
    let currentYear = 2020;
    return currentYear - this.age;
  },


}

// Get specific value from the object person
let ans;

ans = person.firstName;
ans = person["firstName"];


// DATE AND TIME ***. DATE AND TIME ***. DATE AND TIME ***. DATE AND TIME ***. DATE AND TIME ***.
//ans is already declared
let today = new Date(); // To instantiate date. Empty parenthesis will return current date as default value
console.log( typeof ans) //will return object as date is an object
console.log(today.toString); // will return a string instead of object
let birthday = new Date("09-09-1987"); // to return Day, Month and 1987
birthday = new Date("09/10/1987"); // Date can be written in a different format.
birthday = new Date("Septemeber 13 2087"); // Date can be written in a different format.

ans = today.getMonth
console.log(ans) // will return the monthe, e.g 09 or 10
ans = today.getDate
ans = today.getHours;
ans = today.time

// use set to manipulate date
birthday.setMonth(7)
birthday.setFullYear;
birthday.setMinutes;


// CONDITIONALS. CONDITIONALS. CONDITIONALS. CONDITIONALS. CONDITIONALS. CONDITIONALS. CONDITIONALS

let id = 100;
if(id == 100){
  console.log("Right")
};


if(id == 103){
  console.log("Right")
}else{
  console.log("What a fiasco!")
};

//  CONDITIONAL/ IF STATEMENT WITHOUT CURLEY BRACES
if(id === 100)
  console.log("Possibly a string")
else
  console.log("That's wierd!")

// TERNARY OPERATOR SYNTAX FOR IF STATEMENT
// NO NEED TO WRITE "if".
// TAKES 3 OPERANDS i:e (), ?, :
console.log((id < 97) ? "good" : "fair enough"); 
console.log(id < 107 ? "good" : "A real fiasco"); // A SHORTER, CLEANER TERNARY HAS ? AND : IN THE () 
if(typeof id !== "undefined"){
  console.log(`This ID is ${id}`)
};

console.log(typeof id !== "undefined") ? `This ID is ${id}`: "This ID cannot be found"; //Why return "true"


// SWITCH *** SWITCH *** SWITCH ** AND ** TEMPLATE STRINGS *** SWITCH *** SWITCH *** TEMPLATE LITERALS ***
// MORE LIKE MULTIPLE TERNARY BUT
// WITH SWITCH AS A FUNCTION
// WHAT TO TEST (IN THIS CASE "COLOR") IS PUT IN THE PARANTHESIS
// CASES IN THE BRACE WITH VALUE SEPERATED BY A COLUMN
// Break  TO BREAK FROM THAT CASE

const color = "red";

switch(color){
  case "red":
    console.log("Roses are red");
    break;
  case "blue":
    console.log("Lilies are blue");
    default:
      console.log("Your are loved")
}

// new Date() instantiates date
// new Date().getDay() gets the day of the week in integer

let day;

switch(new Date().getDay()){
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Sunday";
    break;
  case 2:
    day = "Sunday";
    break;
  case 3:
    day = "Sunday";
    break;
  case 4:
    day = "Sunday";
    break;
  case 5:
    day = "Sunday";
    break;
  case 6:
    day = "Sunday";
    break;
}
console.log(`Today is day third ${day} of the week`);


const name = 'John';
const age = 31;
const job = 'Web Developer';
const city = 'Miami';
const hobbies = ["Sports", "Intelectual discussions"]
let html;

// Without template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: '+ job+ ' </li><li>City: '+ city +' </li></ul>';

html = '<ul>' +
       '<li>Name: ' + name + '</li>' +
       '<li>Age: ' + age + '</li>' +
       '<li>Job: ' + job + '</li>' +
       '<li>Hobbies: ' + hobbies + '</li>' +
       '<li>City: ' + city + '</li>' +
       '</ul>';

function hello(){
  return 'hello';
}

// With template strings (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>Job: ${hobbies}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;

// Function Declaration
// Old way
// Functions without parameters
function salute(){
  //console.log("Hello");
  return("Hi");
}
salute(); // just calling the function
console.log(salute()); // to print the return


// with name as parameter
function greeting(name){
  return("What's up " + name);
}

salute();

// with multiple parameters
function welcome(name, city){
  return ("Welcome to our City Mr " + name + " " + "of " + city); 
}

// to have a default value for a parameter (es5)

function welcome(name, city){
  if(typeof name === "undefine" ){ "John"};
  if(typeof city === "undefine" ){ "Jordan"};
  return ("Welcome to our City Mr " + name + " " + "of " + city); 
}

// default declaration (es6)

function welcome(name = "John", city = "Jordan"){
  //if(typeof name === "undefine" ){ "John"};
  //if(typeof city === "undefine" ){ "Jordan"};
  return ("Welcome to our City Mr " + name + " " + "of " + city); 
}

// FUNCTION EXPRESSION i.e. DECLARE FUNCTION AS VALUE OF A STRING OR AS A STRING
const square = function(){
  return "Hello!";
};
console.log(square()) // returns "Hello!"

// FUNCTION EXPRESSION with parameter/s
const square1 = function(x, y){
  return (x * y);
};

// FUNCTION EXPRESSION can also take default arguments(values)
const square2 = function(x = 5){
  return (x * x);
};
console.log(square2()) // will return 25

//IMMEDIATELY INCOCABLE FUNCTION EXPRESSIONS - IIFEs. if functions you declare and run at the same time
// We make an expression by putting the anonymous function inside a paranthesis
(function(){
  console.log("This is an IIFE function delivery")
})(); // you put a paranthesis in front as you would any other function


// IIFEs can also take parameters
(function(festName){
  console.log("You are a master latcher " + name)
})("Timothy");


