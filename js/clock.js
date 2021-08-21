const clock = document.querySelector("h2#clock");
const clockAmPm = document.querySelector("#clock-am-pm");

function getClock() {

    const date = new Date();
    let isAmPm = "am";

    let curHour = date.getHours();

    if (curHour >= 12) isAmPm = "pm";
    if (curHour > 12) curHour -= 12;

    const hours = String(curHour).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
    clockAmPm.innerText = `${isAmPm}`;
}

getClock();
setInterval(getClock, 1000);
