
// Class Review Activity

const animals = [ { name: "lion", species: "feline", weight: 190 },
  { name: "elephant", species: "mammal", weight: 5400 },
  { name: "giraffe", species: "mammal", weight: 800 },
  { name: "tiger", species: "feline", weight: 220 },
  { name: "dolphin", species: "mammal", weight: 150 },
  { name: "kangaroo", species: "marsupial", weight: 85 },
  { name: "panda", species: "mammal", weight: 100 },
  { name: "eagle", species: "bird", weight: 6 },
  { name: "shark", species: "fish", weight: 1100 },
  { name: "penguin", species: "bird", weight: 30 } ];


// 1- iterate over the animal object and print each aniaml name in uppercase.

animals.forEach(animal => {
  console.log(`The animal name is: ${animal.name.toUpperCase()}`);
});


// 2- manipulate the animal names in animal array

animals.forEach(animal =>{

  console.log(`The ${animal.name} is an awsome animal`);
});

// 3- filter the animals array to keep only the animals with names longer than 6 characters

let longNamesAnimals = animals.filter(animal => animal.name.length > 6);
console.log(longNamesAnimals);

// 4- print the animal names from animal array that contain g

// let animalNamesWithG = animals.includes('g', animal => animal.name);

// console.log(animalNamesWithG);

let animalNamesWithG = animals.filter(animal => animal.name.includes('g'));

console.log(animalNamesWithG);

// 5-  check if the all animal names longer than 10 characters

let longAnimalNames = animals.some(animal=> animal.name.length > 3);
console.log(longAnimalNames);

// 5- reverse the animals array

let reversedAnimals = animals.reverse();

console.log(reversedAnimals);

// 6- filter by mamals, create a new  array with names followed by "is a mamals"

let mamalsAnimal = animals.filter(animal => animal.species.includes('mammal'));
let isMamal = mamalsAnimal.map(mamal => `${mamal.name} is mamal`);

console.log(isMamal);


// 7- filter by species, cteate a new array with heavy animals

let heaviestAnimals = [];

let mammals = animals.filter(animal => animal.species === "mammal");
let felines = animals.filter(animal => animal.species === "feline");
let marsupials = animals.filter(animal => animal.species === "marsupial");
let birds = animals.filter(animal => animal.species === "bird");
let fishes = animals.filter(animal => animal.species === "fish");

let sortedMammalWeight = mammals.sort((a, b) => a.weight - b.weight);
console.log(sortedMammalWeight[sortedMammalWeight.length -1]);


let sortedFelinesWeight = felines.sort((a, b) => a.weight - b.weight);
console.log(sortedFelinesWeight[sortedFelinesWeight.length -1]);

let sortedMarsupialsWeight = marsupials.sort((a , b) => a.weight - b.weight);
console.log(sortedMarsupialsWeight[sortedMarsupialsWeight.length -1 ]);

let sortedBirdsWeight = birds.sort((a, b) => a.length - b.length);
console.log(sortedBirdsWeight[sortedBirdsWeight.length -1]);

let sortedFishesWeight = fishes.sort((a, b) => a.length - b.length);
console.log(sortedFishesWeight[sortedFishesWeight.length -1 ]);

heaviestAnimals.push();
console.log(heaviestAnimals);
