
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
