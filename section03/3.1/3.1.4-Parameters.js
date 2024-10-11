// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function functionWithTwoParamas(x, y){
console.log(`x = ${x}`);
console.log(`y = ${y}`);
return x + y;

}

// invoke the function and pass in two numbers
console.log(functionWithTwoParamas(5, 10));
// invoke the function and pass in more than two numbers
console.log(functionWithTwoParamas(5, 10, 50, 20));
// invoke the function and pass in only one number
console.log(functionWithTwoParamas(5));
// change the function to set default values for the parameters
function functionWithDefaultParamas(x = 10, y = 20){
  console.log(`x = ${x}`);
  console.log(`y = ${y}`);
  return x + y;

  }
// again, invoke the function and pass in only one number
console.log(functionWithDefaultParamas(95));
// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function functionWithRestParamas(x, y, ...z){
  console.log(`x = ${x}`);
  console.log(`y = ${y}`);
  console.log(`z = ${z}`);
  console.log(z);
}

// again, invoke the function and pass in more than two numbers
functionWithRestParamas(5, 10, 15, 20, 25, 200);

//create function with rest param as only parameter
function functionWithOneRestParamas(...x){

  console.log(x);
}
functionWithOneRestParamas(1, 19, 5, 20);
