const hourHand = document.querySelector(".hand.hour");
const minuteHand = document.querySelector(".hand.minute");
const secondHand = document.querySelector(".hand.second");
const clock = document.querySelector(".clock");

setInterval(() => {
  let d = new Date();
  let secondsRatio = d.getSeconds() / 60;
  let minutesRatio = (secondsRatio + d.getMinutes()) / 60;
  let hoursRatio = (minutesRatio + d.getHours()) / 12;

  setHandRotation(secondHand, secondsRatio);
  setHandRotation(minuteHand, minutesRatio);
  setHandRotation(hourHand, hoursRatio);

  // hourHand.style.transform = `translateX(-50%) rotate(${hoursRatio * 360}deg)`;
  // minuteHand.style.transform = `translateX(-50%) rotate(${minutesRatio * 360}deg)`;
  // secondHand.style.transform = `translate(-50%, 30px) rotate(${secondsRatio * 360}deg)`;
}, 1000);

function setHandRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

let img = new Image();
img.src = `https://picsum.photos/1920/1080?random=${Math.floor(
  Math.random() * 10000
)}`;
setInterval(() => {
  document.body.style.backgroundImage = `url(${img.src})`;
  img.src = `https://picsum.photos/1920/1080?random=${Math.floor(
    Math.random() * 10000
  )}`;
}, 30000);

dragElement(clock);
function dragElement(element) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  element.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}