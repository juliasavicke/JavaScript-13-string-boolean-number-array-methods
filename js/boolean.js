"use strict";
console.log("boolean.js");

let isLoggedIn = true;

console.log("isLoggedIn ===", isLoggedIn);

isLoggedIn = !isLoggedIn;

console.log("isLoggedIn ===", isLoggedIn.toString());

let user = {};

if (user !== null) {
  //turim vartotoja
}

let isUser = !!user;
console.log("isUser ===", isUser);

let obj1 = {};
let obj2 = {};

console.log(obj1.toString === obj2.toString);
