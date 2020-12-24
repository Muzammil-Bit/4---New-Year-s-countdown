const newYear = new Date('1 Jan 2021');
const days = document.getElementById('days')
const hours = document.getElementById('hours')
const mins = document.getElementById('mins')
const seconds = document.getElementById('seconds')

function differDate(){
    const currentDate = new Date();
    // get total seconds between the times
    var delta = Math.abs(newYear - currentDate) / 1000;
    // calculate (and subtract) whole days
    var daysremaining = Math.floor(delta / 86400);
    delta -= daysremaining * 86400;
    // calculate (and subtract) whole hours
    var hoursRemaining = Math.floor(delta / 3600) % 24;
    delta -= hoursRemaining * 3600;
    // calculate (and subtract) whole minutes
    var minutesRemaining = Math.floor(delta / 60) % 60;
    delta -= minutesRemaining * 60;
    // what's left is seconds
    var secondsRemaining = delta % 60;
    
    //Set Dates inside the DOM
    days.innerText = daysremaining;
    hours.innerText = hoursRemaining;
    mins.innerText = Math.abs(minutesRemaining);
    seconds.innerText = Math.round(secondsRemaining);

    
    
}
differDate();
setInterval(differDate,1000);
