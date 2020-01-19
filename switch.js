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