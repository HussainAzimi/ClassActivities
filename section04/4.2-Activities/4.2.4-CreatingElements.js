// create a new unordered list (ul) element
const newUl = document.createElement("ul");
// remove the paragraph element in the nav-bar
let childToRemove = document.querySelector(".nav-bar > p");
childToRemove.remove();
// add your new ul element to the nav-bar
document.querySelector(".nav-bar").appendChild(newUl);
// create two new list item (li) elements, and add some text to them
const newLiOne =document.createElement("li");
const newLiTwo = document.createElement("li");

newLiOne.textContent ="I'm the first new list element";
newLiTwo.textContent ="I'm the second new list element";
// add the li elements to the ul in the nav-bar
document.querySelector(".nav-bar > ul").appendChild(newLiOne);
document.querySelector(".nav-bar > ul").appendChild(newLiTwo);
