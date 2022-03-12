const hourHand = document.querySelector(".hand.hour");
const minuteHand = document.querySelector(".hand.minute");
const secondHand = document.querySelector(".hand.second");

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
img.src = `https://picsum.photos/1920/1080?random=${Math.floor(Math.random() * 10000)}`;
setInterval(() => {
    document.body.style.backgroundImage = `url(${img.src})`;
    img.src = `https://picsum.photos/1920/1080?random=${Math.floor(Math.random() * 10000)}`;
}, 30000)