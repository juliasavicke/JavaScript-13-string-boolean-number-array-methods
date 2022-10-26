"use strict";
console.log("arr.js");

const numArray = [5, 15, -2, 0, -5, 7];

for (let sk of numArray) {
  //suksis per visa masyva
  console.log("sk ===", sk);
}

numArray.forEach(function (sk, i, arr) {
  console.log(`indeksas ${i}, reiksme ${sk}, array ${arr}`, arr);
});
const printPositiveNumbers = (sk) => {
  if (sk > 0) {
    console.log(sk);
  }
};
numArray.forEach(printPositiveNumbers);

const positiveArr = [];
numArray.forEach((sk) => {
  if (sk > 0) {
    positiveArr.push(sk);
  }
});
console.log("positiveArr ===", positiveArr);
console.log("numArray ===", numArray);

numArray.forEach((sk, i, arr) => {
  if (sk < 0) {
    sk * -1;
    arr[i] = sk * -1;
  }
});

console.log("numArray ===", numArray);
let count = 0;
let sum = 0;
let avg = 0;
numArray.forEach((sk) => {
  count++;
  sum = sum + sk;
});
avg = sum / count;
let avgFixed = avg.toFixed(2);

console.log("avg ===", avg);
console.log("avgFixed ===", avgFixed);
