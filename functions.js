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
const square = function(x, y){
  return (x * y);
};

// FUNCTION EXPRESSION can also take default arguments(values)
const square = function(x = 5){
  return (x * x);
};
console.log(square()) // will return 25

//IMMEDIATELY INCOCABLE FUNCTION EXPRESSIONS - IIFEs. if functions you declare and run at the same time
// We make an expression by putting the anonymous function inside a paranthesis
(function(){
  console.log("This is an IIFE function delivery")
})(); // you put a paranthesis in front as you would any other function

// IIFEs can also take parameters
(function(festName){
  console.log("You are a master latcher " + name)
})("Timothy");


// PROPERTY METHODS
// WHEN A FUNCTION IS PUT INSIDE AN OBJECT IT IS CALLED A METHOD
