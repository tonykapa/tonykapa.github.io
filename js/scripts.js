/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// const root = document.documentElement;
// const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
// const marqueeContent = document.querySelector("ul.marquee-content");

// root.style.setProperty("--marquee-elements", marqueeContent.children.length);

// for(let i=0; i<marqueeElementsDisplayed; i++) {
//   marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
// }

const width = window.innerWidth;
const workText = document.querySelector(".work-item-text");
const workMask = document.querySelector(".work-mask");
const workNumber = document.querySelector(".work-item-number");

workMask.addEventListener('mouseover', (event) => {
    workText.style.display = "block"
    workNumber.style.opacity ="1"
   
});

workMask.addEventListener('mouseout', (event) => {
  workText.style.display = "none"
  workNumber.style.opacity ="0"
});



const workText2 = document.querySelector(".work-item-text-2");
const workMask2 = document.querySelector(".work-mask-2");
const workNumber2 = document.querySelector(".work-item-number-2");

workMask2.addEventListener('mouseover', (event) => {
    workText2.style.display = "block"
    workNumber2.style.opacity ="1"
});

workMask2.addEventListener('mouseout', (event) => {
  workText2.style.display = "none"
  workNumber2.style.opacity ="0" 
});

const workText3 = document.querySelector(".work-item-text-3");
const workMask3 = document.querySelector(".work-mask-3");
const workNumber3 = document.querySelector(".work-item-number-3");

workMask3.addEventListener('mouseover', (event) => {
    workText3.style.display = "block"
    workNumber3.style.opacity ="1"
});

workMask3.addEventListener('mouseout', (event) => {
  workText3.style.display = "none"
  workNumber3.style.opacity ="0"
});






