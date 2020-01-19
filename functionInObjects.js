const todo = {
  add: function(){
    return("Add todo...");
  }
};
console.log(todo.add());
// MULTIPLE FUNCTIONS IN THE AN OBJECT

const schedule = {
  draw: function(){
    return("Same todo...")
  },
  shopping: function(numb){
    return(`Checkout out ${numb}`);
  }
};
console.log(schedule.draw());
console.log(schedule.shopping(7))