const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let lastRemovedIndex1 = nums.pop();
let lastRemovedIndex2 = nums.pop();
console.log(nums);
// remove each of the first two items with shift(), saving each item to a variable
let firstRemovedIndex1 = nums.shift();
let firstRemovedIndex2 = nums.shift();
console.log(nums);
// use push and unshift to add the variables back to the array in numerical order, 0-6

nums.push(firstRemovedIndex2, firstRemovedIndex1);
nums.unshift(lastRemovedIndex1, lastRemovedIndex2);

console.log(nums);

