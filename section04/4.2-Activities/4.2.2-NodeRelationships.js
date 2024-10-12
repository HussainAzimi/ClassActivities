// select the root node
let rootNode = document.querySelectorAll("html");
console.log(rootNode);

// select the last child of the root node
let lastChild = document.querySelector("html").lastElementChild;
console.log(lastChild);
// select all the children of the body element
let allChildren = document.querySelector("body").children;
// select the next sibling of the h2 node
let nextSibling = document.querySelector("h2").nextElementSibling;
console.log(nextSibling);
// select the parent element of the h1 node
let parentElement = document.querySelector("h1").parentElement;
console.log(parentElement);
