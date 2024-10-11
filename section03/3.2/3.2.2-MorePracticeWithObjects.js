// bracket and dot notation
const key = "1";
const obj = {
  key: console.log("the key is 'key'"),
  1: console.log("the key is 1"),
};

// what will the following lines print?
console.log(obj[key]);
console.log(obj.key);
console.log(obj["key"]);

// Create an object with at least four properties, each with a different data type.
const cars = {
    collection : {
        make: "Toyota",
        year: 2024,
        color: "white",
        twoDoor: true,
    },
     carNames: ["crolla", "benze", "camry"],
     state: {
        name: "Missouri",
        year: 1818,
        isDemocrate: true,
        population: 399399,
     },
     hasOilChange: false,
};


// Name one of the four properties "collection" and set its value to an Array or Object.

// Access a value in the "collection" property
console.log(cars.state.population);
console.log(cars.carNames[0]);
console.log(cars["collection"]["year"]);

// Practice with nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"];

// Add a method to an Object
obj.method = function() {
  return "the key is 'method' and it calls refers to a function";
};

// Fill in your favorite movie, number and color below
obj["favorites"] = {
  movie: "Titanic",
  number: 20,
  color: "blue"
};

// Add a list (a.k.a array) to an Object
obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];

// Using the 'for...in' loop to iterate over 'obj' object ...
// how many lines will the following statement print?
// what do you expect to see on each line?
for (let key in keys) {
  console.log(`Key is: ${key} and value is: ${obj[key]}`);
}

// Use a template literal to print a sentence about your favorite things

// Access the values "b", 4, and 6 from obj.list
const movie = {
    critics: {
        1: "Hussain",
        2: "Benyamin",
        3: "Sobhan"
    },
    id: "tt0084787",
    title: "The Thing",
    rating: "R",
    year: 1982,
    director: "John Carpenter",
    cast: [
      "Kurt Russell",
      "Keith David",
      "Wilford Brimley",
    ],
    musicBy: "Ennio Morricone",
  }

  if(movie.hasOwnProperty('title')){
    console.log("yes, found with hasOwnProperty");
  }
if('title' in movie){
    console.log("yes, found with in ");
}

if(Object.keys(movie).includes('title')){
    console.log("yes, found with object.key");
}

console.log(Object.values(movie));
console.log(Object.keys(movie));
console.log(Object.entries(movie));

// Access property inside nested object

console.log(Object.values(movie.critics));