// create an Array using an Array literal
const colors = ["Red", "blue", "black",["Teal", "Purple"]];
// access the 1st item in the Array
console.log(colors[0]);
// access the last item in the Array
console.log(colors[3][1],);
// print the length of the Array
console.log(colors.length);
// use the length property to access the last item in the Array
console.log(colors[colors.length-1]);
// with for...of, loop over the Array, modify the value and add to a different Array
let newArray = [];
let index =0;
for(let color of colors){
    
    newArray[index] = color;
    index++;
}

console.log(newArray);