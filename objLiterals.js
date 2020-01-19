
// OBJECT LITERAL REFERENCE TYPES

const name = 'John';
const age = 31;
const job = 'Web Developer';
const city = 'Miami';
let html;

// Without template strings (es5) i.e. object literals
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: '+ job+ ' </li><li>City: '+ city +' </li></ul>';

html = '<ul>' +
       '<li>Name: ' + name + '</li>' +
       '<li>Age: ' + age + '</li>' +
       '<li>Job: ' + job + '</li>' +
       '<li>City: ' + city + '</li>' +
       '</ul>';

function hello(){
  return 'hello';
}

// With template strings (es6) object literals
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;





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

