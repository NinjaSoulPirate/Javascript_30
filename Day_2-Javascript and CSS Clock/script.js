const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function getDate(){
    const time = new Date();
    const seconds = time.getSeconds();
    // 90 is added to make it start from 12 o'clock
    const degreeSeconds = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${degreeSeconds}deg)`; 

    const minutes = time.getMinutes();
    const degreeMinutes = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${degreeMinutes}deg)`;

    const hours = time.getHours();
    const degreeHours = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${degreeHours}deg)`;
}

setInterval(getDate, 1000);