let characters = ["SpongeBob", "Bugs Bunny", "Tom", "Jerry", "Scooby-Doo", "Mickey Mouse"];

// push and unshift challenge
// push add a new item at the last array and unsift add a new item at the begaining of array
characters.unshift("Robin");
characters.push("TommyJerry");
console.log(characters);

// pop and shift challenge
// remove the last item from the array if the length of the first item's character and print the romoved item is greater than 8
if(characters[characters.length-1].length > 8){
    let removedItem = characters.pop();
    console.log(`this is the removed item : "${removedItem}"`); // print the removed item from array
}

console.log(characters);  // print the whole array but removed item

//  find the specific index and change the value

if(characters.includes("Tom")){
    
    let index = characters.indexOf("Tom");
    characters.splice(index, 1, "Donald Duck", "Daffy Ducky", "Snoopy", "Elmo", "cooky Monster");
}

console.log(characters);

// make it dynamic

let startedIndex = Math.floor(characters.length/3);

let endedIndex = Math.floor(characters.length/3) * 2;

let sliceCharcter = characters.slice(startedIndex, endedIndex);
console.log(sliceCharcter);



// Combine two array

let newArray = ["Dora", "Naruto", "Squidward"];
let newCharacters = characters.concat(newArray);

console.log(newCharacters);

// reverse the Array

let reversedArray = newCharacters.reverse();
console.log(reversedArray);

console.log(newCharacters.reverse());

// find the split point in the array
// split the array at the split point
// reverse each half that results from the split
// put it back together

let splitPoint =  Math.floor(newCharacters.length /2);

let firstHalf = newCharacters.slice(0,splitPoint);
let secondHalf = newCharacters.slice(splitPoint);

console.log(newCharacters);
console.log(firstHalf);
console.log(secondHalf);

firstHalf.reverse();
secondHalf.reverse();

let combinedArray = firstHalf.concat(secondHalf);

console.log(`this is the final result 1 : ${newCharacters.splice(0, newCharacters.length, firstHalf, secondHalf)}`);

console.log(`this is the final result 2 : ${newCharacters.splice(0, newCharacters.length, combinedArray)}`);
console.log(`this is the final result 3 : ${combinedArray}`); // same output with final result 2