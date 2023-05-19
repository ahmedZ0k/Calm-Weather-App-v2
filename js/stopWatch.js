//the end of the year date to countdown to 
let countDownDate = new Date("Nov 30, 2023 15:30:00").getTime();
//console.log(countDownDate);

let counter = setInterval(() => {
    //get date now
    let dateNow = new Date().getTime();

    //get the date difference between now and the countDownDate 
    let dateDiff = countDownDate - dateNow;

    //get time units
    //let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    let dd = document.getElementById('dd');
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');
    // let ampm = document.getElementById('ampm');

    let day_dot = document.getElementById('day_dot');
    let hr_dot = document.getElementById('hr_dot');
    let min_dot = document.getElementById('min_dot');
    let sec_dot = document.getElementById('sec_dot');
    // let am = hours >= 12 ? "PM" : "AM";

    if(hours > 12){
        hours = hours - 12;
    }
    //add zero before single digit number
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;


    document.querySelector(".days").innerHTML = days + "<br> <span>Days</span>";
    document.querySelector(".hours").innerHTML = hours + "<br> <span>Hours</span>";
    document.querySelector(".minutes").innerHTML = minutes + "<br> <span>Minutes</span>";
    document.querySelector(".seconds").innerHTML = seconds + "<br> <span>Seconds</span>";
    //document.getElementById("ampm").innerHTML = "am";

    dd.style.strokeDashoffset = 440 - (440 * days) / 24 ;
    hh.style.strokeDashoffset = 440 - (440 * hours) / 12 ;
    mm.style.strokeDashoffset = 440 - (440 * minutes) / 60 ;
    ss.style.strokeDashoffset = 440 - (440 * seconds) / 60 ;
    //error
    day_dot.style.transform = `rotate(${days * 15}deg)`;   
    hr_dot.style.transform = `rotate(${hours * 30}deg)`;
    min_dot.style.transform = `rotate(${minutes * 6}deg)`;
    sec_dot.style.transform = `rotate(${seconds * 6}deg)`;
 
    if (dateDiff == 0) {
        clearInterval(counter);
    }

});