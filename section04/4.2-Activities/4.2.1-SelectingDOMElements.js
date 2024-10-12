// select all unordered list (ul) elements
document.getElementsByTagName("ul");
document.querySelectorAll("ul");
// select all elements with the class "class-week"
document.getElementsByClassName("class-week");
document.querySelectorAll(".class-week")

// select all elements with the class "nav-bar"
document.querySelectorAll(".nav-bar");
document.getElementsByClassName("nav-bar");

// select the element with the id "dog-picture" and save it to a variable
// let dogPicture = document.querySelector("#dog-picture"); it also work
let dogPicture = document.getElementById("dog-picture");
console.log(dogPicture);
