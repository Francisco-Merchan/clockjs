const hour = document.querySelector(".hourHandle");
const minute = document.querySelector(".minuteHandle");
const second = document.querySelector(".secondHandle");

setInterval(setDate, 1000);

function setDate() {
  const date = new Date();

  const secondsRotation = (date.getSeconds() / 60) * 360 + 90;
  second.style.transform = `rotate(${secondsRotation}deg)`;

  const minutesRotation = (date.getMinutes() / 60) * 360 + 90;
  minute.style.transform = `rotate(${minutesRotation}deg)`;

  const hoursRotation = (date.getHours() / 12) * 360 + 90;
  console.log(hoursRotation);
  hour.style.transform = `rotate(${hoursRotation}deg)`;
}
