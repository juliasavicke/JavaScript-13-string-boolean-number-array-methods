"use strict";
console.log("main.js");

const titleEl = document.getElementById("title");

const titleArr = titleEl.textContent.split(" ");
console.log("titleArr ===", titleArr);

titleArr[1] = "metodai";
console.log("titleArr ===", titleArr);

titleEl.textContent = titleArr.join(" ");

const textEl = document.getElementById("text");

const replaced = text.textContent.replace("until we", "we just");
text.textContent = replaced;

function createEl(word) {
  let letter = word.charAt(0).toLocaleUpperCase();
  word = word.replace(word.charAt(0), letter);
  const h2El = document.createElement("h2");
  h2El.textContent = word;
  document.body.append(h2El);
}
createEl("lape");

const proverb =
  "sesi eina po penkiu, bet tuo paciu sesi eina pries septynis. Ir sesi yra trisdesim sesi padalinta is sesiu";

let replaced1 = proverb.replace("sesi", "6");
let replaced2 = proverb.replaceAll("sesi", "six");

console.log("proverb ===", proverb);
console.log("replaced2 ===", replaced2);

const inputTextEl = document.createElement("input");
const inputNumEl = document.createElement("input");
inputTextEl.type = "text";
inputTextEl.placeholder = "Name";
inputNumEl.placeholder = "Number";
inputNumEl.type = "text";
document.body.append(inputTextEl, inputNumEl);

const h22El = document.createElement("h2");
document.body.append(h22El);
inputNumEl.addEventListener("input", (event) => {
  const arr = event.target.value.split(".");
  if (arr.length > 1) {
    alert("iveskite sveika skaiciu");
  } else {
    console.log("cia");

    for (let i = 0; i < event.target.value; i++)
      h22El.textContent += inputTextEl.value + " ";
  }
});

const listEl = document.querySelectorAll("#list li");
console.log("listEl ===", listEl);
listEl.forEach((value) => {
  console.log("value ===", value.textContent);
  value.textContent = "was " + value.textContent;
});

const feedbackEl = document.getElementById("feedback");
