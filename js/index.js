// Your
// code goes here

//1. mouseover
//2. mouseout

const nav = document.querySelectorAll("a");
console.log(nav);

nav.forEach((n) => {
  n.addEventListener("mouseover", (event) => {
    // console.log('current Target',event.currentTarget.nodeName)
    if (!event.target.style.color) {
      event.target.style.color = "pink";
    }
  });
});

nav.forEach((n) => {
  n.addEventListener("mouseout", (event) => {
    // console.log('current Target',event.currentTarget.nodeName)
    if (event.target.style.color) {
      event.target.style.color = null;
    }
  });
});

nav.forEach((n)=>{
  n.addEventListener('click',event =>{
    event.preventDefault();
    event.stopPropagation();
  })
})

//3.load
window.addEventListener("load", () => {
  console.log("already loaded!");
});

//4.blur
//5.focus
let title = document.title;
console.log(title);
var blurMessage = [
  "Hey! COME BACCCKKKK! :-( ",
  "Don't you love me anymore? :-(",
  "You want sandwich? ",
  "I'm feeling lonely :-( ",
];
// var intervalTimer = null;
// var timeoutTimer = null;
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
window.addEventListener("blur", function () {
  document.title = blurMessage[getRandomInt(4)];
});
window.addEventListener("focus", function () {
  document.title = title;
});

//6. dbclick
const pop = document.querySelectorAll("img");
console.log(pop);

pop.forEach((i) => {
  i.addEventListener("dblclick", () => {
    if (!i.style.border) {
      i.style.border = "30px solid grey";
    } else i.style.border = null;
  });
});

//7. scroll
const whenscroll = () => {
  console.log("its working!!");
};
window.addEventListener("scroll", whenscroll);

//8. wheel

const imgWheel = document.querySelectorAll(".img-content");
console.log(imgWheel);

const whenWheel = () => {
  console.log("yes! its working!!");
};
imgWheel.forEach((Wheel) => {
  Wheel.addEventListener("wheel", whenWheel);
});

//9.keydown
const colors = document.querySelectorAll("p");

document.addEventListener("keydown", (event) => {
  console.log(event);
  colors.forEach((color) => {
    if (event.key === "Escape") {
      color.style.color = "pink";
    }
    if (event.key === "c") {
      color.style.color = null;
    }
  });
});

//10. mouseup

document.addEventListener("mouseup", () => {
  let selectedText = window.getSelection().toString();
  console.log(selectedText);
});


