console.log("hello");
console.log("javascript practice");

// window.alert("javascript practice");
// window.alert("welcome");

// document.getElementById("hello").textContent = `hello`;
// document.getElementById("p").textContent = `paragraph tag`;
// -----------------------------------------------------------------------------------

// variables practice
// let fullname = "viswaa";
// let age = 21;
// let isStudent = true;

// document.getElementById("name").textContent = `my name is ${fullname}`;
// document.getElementById("age").textContent = `I'm ${fullname} years old`;
// document.getElementById("student").textContent = `I'm a enrolled as student : ${isStudent}`;
// ------------------------------------------------------------------------------------------------

//operators practice

// let Students = 30;
// Students = Students + 1;
// Students = Students - 1;
// Students = Students * 10;
// Students = Students / 2;
// Students = Students ** 15
// Students = Students % 7;

//augmented assingment operator
// Students += 1;
// Students -= 10;
// Students *= 20;
// Students /= 6;
// Students **= 7;

//incremenrt operator and decrement
// Students ++;
// Students --;

// document.getElementById("students").textContent =`the total number of students are ${Students}`

// --------------------------------------------------------------------------------------------------------

// How to accept user input
// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

// let username = window.prompt("What is your name")
// document.getElementById("window").textContent =`hii welcome ${username}`


// let username;
// document.getElementById("button").onclick = function(){
//   username =  document.getElementById("name").value;
//   document.getElementById("myh1").textContent =`hii welcome ${username}`;
// }

// ------------------------------------------------------------------------------------------------

// Type conversion = change the datatype of a value to another
//                                 (strings, numbers, booleans)

// let age =  window.prompt("how old are you")
// age = Number(age);
// age+= 1;
// console.log(age);


// let x = "pizza";
// let y = "pizza";
// let z = "pizza";
// let x = "12";
// let y = "12";
// let z = "12";
// let x = "";
// let y = "";
// let z = "";
// let x;
// let y;
// let z;

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);
//------------------------------------------------------------------

// const = a variable that can't be changed

// const PI = 3.14159;
// let radius;
// let circumference;

// PI = 420.69;

// document.getElementById('submit').onclick = function () {
//     radius = document.getElementById('radius').value;
//     radius = Number(radius);
//     circumference = 2 * PI * radius;
//     document.getElementById("value").textContent = circumference + "cm";
// };