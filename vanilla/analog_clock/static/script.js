const hourHand = document.querySelector('#hour_hand');
const minHand = document.querySelector('#min_hand');
const secondHand = document.querySelector('#second_hand');

const dayDate = document.querySelector('#day');
const monthDate = document.querySelector('#month');


function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds/60) * 360 )+ 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    const mins = now.getMinutes();
    const minsDegree = ((mins/60) * 360) + ((seconds/60) * 6 )+ 90;
    minHand.style.transform = `rotate(${minsDegree}deg)`;

    const hour = now.getHours();
    const hoursDegree = ((hour/12) * 360) + ((mins/60) * 30) +90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;

    const days = now.getDay();
    const dateDays = ((days/24) * 360);
    dayDate.innerHTML = `${dateDays}`;

    const months = now.getMonth();
    const dateMonths = ((months/30) * 360);
    dayDate.innerHTML = `${dateMonths}`;

}

setInterval(setDate,1000);

setDate();
setInterval(date,86400000);
date();

/*const dayDate = document.querySelector('#day');
const monthDate = document.querySelector('#month');

function date(){
    const present = new Date();

    const days = present.getDay();
    dayDate.innerHTML = `${days}`;

    const months = present.getMonth();
    dayDate.innerHTML = `${months}`;

    
    
}
setInterval(date,86400000);
date();*/