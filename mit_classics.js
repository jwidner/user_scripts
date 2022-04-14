// ==UserScript==
// @name        Make MIT classics readable - classics.mit.edu
// @namespace   Violentmonkey Scripts
// @match       http://classics.mit.edu/*
// @grant       none
// @version     1.0
// @author      Jesse Widner <jesse@widner.xyz>
// @description 4/13/2022, 6:15:08 PM
// ==/UserScript==

// https://stackoverflow.com/questions/4793604/how-to-insert-an-element-after-another-element-in-javascript-without-using-a-lib
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
function grabAllBetween(startNode, endNode) {
  let arr = [];
  let current = startNode.nextSibling;
  while (!current.isEqualNode(endNode)) {
    arr.push(current);
    current = current.nextSibling;
  }
  return arr;
}

let start = document.querySelector('[name="start"]');
let end = document.querySelector('[name="end"]');

let textSection = document.createElement("section");
textSection.append(...grabAllBetween(start, end));
insertAfter(textSection, start);

// style
textSection.style.margin = "auto";
textSection.style.maxWidth = "28rem";
