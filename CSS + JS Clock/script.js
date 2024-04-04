"use script;";

const secondHand = document.querySelector(".second-hand", setDate);
const minuteHand = document.querySelector(".min-hand", setDate);
const hourHand = document.querySelector(".hour-hand", setDate);

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const getSecDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${getSecDegrees}deg)`;
  secondHand.style.height = "0.24vw";

  const minutes = now.getMinutes();
  const getMinDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${getMinDegrees}deg)`;
  minuteHand.style.height = "0.3vw";

  const hours = now.getHours();
  const getHoursDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${getHoursDegrees}deg)`;
  hourHand.style.height = "0.5vw";
  console.log(`time --> ${hours}hr, ${minutes}min, ${seconds}sec`);

  // additional functionality--> removes the abrupt motion it did while starting the loop again
  if (seconds == 59) {
    secondHand.style.transition = "none";
  }
}
setInterval(setDate, 1000);
