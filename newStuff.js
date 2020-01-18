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


