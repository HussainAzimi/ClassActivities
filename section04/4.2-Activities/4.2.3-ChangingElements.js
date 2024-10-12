// print the outer HTML of the navigation bar

let outerNavBar = document.querySelector(".nav-bar");
console.log(outerNavBar.outerHTML);

// print the inner HTML of the navigation bar
let innerNavBar = document.querySelector(".nav-bar");
console.log(innerNavBar.innerHtML);
// print the text content of the #class-schedule-list element
let classSchedule = document.querySelector("#class-schedule-list").textContent;
console.log(classSchedule);

// select the classList for the first class-week, then add the class "week-1"
let classWeek = document.querySelector(".class-week");
classWeek.classList.add("week-1");
// select the img element and add a src attribute
document.querySelector("img").src="https://i2.pickpik.com/photos/774/556/1024/odin-male-australian-shepherd-dog-thumb.jpg";

// change the font color of the h1 element
document.querySelector("h1").style.color ="blue";
