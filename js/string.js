"use strict";
console.log("string.js");

let str1 = "Brown fox jumped over the lazy dog. And jumped in again.";

console.log("str1.length ===", str1.length);

const firstWord = str1.slice(0, 5);
console.log("firstWord ===", firstWord);

const exceptFirstWord = str1.slice(5);
console.log("exceptFirstWord ===", exceptFirstWord);

console.log(firstWord.toLocaleUpperCase() + exceptFirstWord);

const substrString = str1.substr(17, 4);
console.log("substrString ===", substrString);

const sliced = str1.slice(17, 17 + 4);
console.log("sliced ===", sliced);

const replaced = str1.replace(/fox/g, "rabbit");
console.log("replaced ===", replaced);

// const matched = str1.match(/\d+/g);

// console.log("matched ===", matched);
// console.log("str1 ===", str1);

// console.log("matched.join('') ===", matched.join(" "));

let str2 = "Brown" + " " + "Fox";

console.log("str2 ===", str2);

const arr = str1.split(" ");
const arrReverse = [];

console.log("arr ===", arr);

for (let i = 0; i < arr.length; i++) {
  arrReverse.unshift(arr[i]);
}
console.log("arrReverse ===", arrReverse.join(" "));

const date = new Date();
console.log("date ===", date.toISOString().split("T")[0]);

let overIndex = str1.indexOf("over11");
console.log("overIndex ===", overIndex);

console.log("str1.slice(0, overIndex) ===", str1.slice(0, overIndex));

let included = str1.includes("lazy1");
console.log("included ===", included);

let uzd = str1.slice(str1.indexOf("fox"), str1.indexOf("And"));
console.log("uzd ===", uzd);

const uzdArr = uzd.split(" ");
console.log("uzdArr ===", uzdArr);
let uzdAtgal = uzdArr.join(" ++ ");

console.log("uzdAtgal ===", uzdAtgal);
let last = str1.slice(-2);

console.log("last ===", last);
