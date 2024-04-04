"use strict";

const playSound = function (e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (audio) {
    audio.currentTime = 0; //rewind the time to start again (restart)
    audio.play();
  } else {
    return;
  }
  key.classList.add("playing");
};
const removeTransition = function (e) {
  // console.log("transform");
  if (e.propertyName !== "transform") return;
  else {
    this.classList.remove("playing"); //this = key
  }
};

const keys = document.querySelectorAll(".key");

keys.forEach(function (key) {
  key.addEventListener("transitionend", removeTransition);
});

window.addEventListener("keydown", playSound);


//Tried coding a functionality on my own

// let buttons = document.querySelectorAll(".key");

// buttons.forEach(function (e) {
//   e.addEventListener("keydown", function () {
//     console.log("yoo");

//     let dataKey = e.getAttribute("data-key");
//     let audio = document.querySelector(`audio[data-key="${dataKey}"]`);

//     if (audio) {
//       audio.currentTime = 0;
//       audio.play();
//     }
//   });
// });
