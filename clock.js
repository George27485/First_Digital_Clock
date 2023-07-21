setInterval(displayTime,1000);
//set interval before function.
function displayTime(){
const timeNow = new Date();
let hour=timeNow.getHours();
let minutes=timeNow.getMinutes();
let seconds=timeNow.getSeconds();
let weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let today = weekday[timeNow.getDay()];
let months = timeNow.toLocaleString("default",{month:"long"});//could be  "2-digit", "numeric", "narrow", "short", or "long"
let year=timeNow.getFullYear();
let period = "AM";

//write condition that sets period to am or pm. purpose is to handle the 24 hr time value to 12.

//if the time is greater than 12 hrs(ex 16) then 12 is subtracted and Pm is added to it. 16-12 is 4 so 4pm. 
if(hour>12){
    hour-=12;
    period="PM";

}
//if hour is equal to 0 it becomes a 12 in the am because there is no 0 o'clock. 
if(hour==0){
    hour = 12;
    period="AM";
}
//to add the 0 in front of the time if its less than 10.
hour =hour < 10? "0" + hour: hour;

minutes = minutes <10 ? "0" + minutes: minutes;

seconds = seconds < 10 ? "0" + seconds : seconds;

//variable strings previous three together
let time = hour + ":" + minutes + ":" + seconds + period;

document.getElementById('Clock').innerHTML = time + " " + today + " " + months + " " + year;

}

displayTime();