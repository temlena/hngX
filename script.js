const dayOfWeek = document.getElementById("day-of-week");
const timeUTC = document.getElementById("time");

const day = new Date().toLocaleDateString("en-US", { weekday: "long" });

dayOfWeek.innerHTML = day;

setInterval(changeTime, 1000);

function changeTime() {
    const time = new Date().toLocaleTimeString('en-US');
    timeUTC.innerHTML = time;
}

changeTime();