// ==UserScript==
// @name        Make Project Gutenberg Readable - gutenberg.org
// @namespace   Violentmonkey Scripts
// @match       https://www.gutenberg.org/files/*
// @grant       none
// @version     1.0
// @author      Jesse Widner <jesse@widner.xyz>
// @description 4/24/2022, 5:03:48 PM
// ==/UserScript==
for (let match of document.querySelectorAll("p")) {
  match.style.margin = "auto";
  match.style.maxWidth = "28rem";
  match.style.lineHeight = "1.5em";
}
