// print the function below
function myNumberFunction() {
  let num = 2 ** 2;
  num = num + 3;
  num = num % 4;
  num = num * 14;
  console.log(num);
}

// now, invoke the myNumberFunction function
// print with invocation, the function will run
console.log("with invoke", myNumberFunction());

// print just the function of console.log (no invocation)
// print without invocation, reference the value stored in the varaible
console.log("without invoking", myNumberFunction);
