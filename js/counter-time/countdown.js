// alert("mandil");
// let datepicker = require('js-datepicker');
// console.log(picker);
// import datepicker from 'js-datepicker';
// const picker = datepicker(document.querySelector('#calendar'));
let endDate = "01 Jan 2024";
const dateval = document.getElementById('datepicker');
const eventday = document.querySelector('#event');
const picker = new Pikaday({ field: dateval });
var date = new Date();
date.setDate(date.getDate() + 1);
// console.log(date);

// alert(finalDate);
picker.setMinDate(date);
dateval.addEventListener("change", (e) => {

  endDate = e.currentTarget.value;
  if (endDate){
    eventday.innerHTML = endDate;
  }
  else {
    endDate ="01 Jan 2024";
    eventday.innerHTML = "** Default New Year 2024";
  }

});

const calutateTime = () =>{
  const wishDate = new Date(endDate);
  const date = new Date();
  const calculatedTime = wishDate - date;
  if (calculatedTime < 0){
    document.querySelector(".bg-placer").style.backgroundImage="url('img/firework.gif')";
    document.querySelectorAll(".complete").forEach((a)=> {
      a.style.color = "white";
    });
    return;
  }
  const seconds = Math.floor((calculatedTime / 1000)%60);
  const minutes = Math.floor((calculatedTime / (1000*60)) % 60);
  const hours = Math.floor((calculatedTime / (1000*60*60) ) % 24) ;
  // const months = Math.floor((calculatedTime / (1000*60*60) ) % 24) ;
  const days = Math.floor(calculatedTime / (1000*60*60*24));
  // console.log(days,hours,minutes,seconds);
  const day = document.querySelector(".days p");
  const hour = document.querySelector(".hours p");
  const minute = document.querySelector(".mins p");
  const sec = document.querySelector(".secs p");
  sec.innerHTML = formatTime(seconds);
  minute.innerHTML = formatTime(minutes);
  hour.innerHTML = formatTime(hours);
  day.innerHTML = formatTime(days);
}

const formatTime = (time) => {
  return time < 10? `0${time}` : time;
}
setInterval(calutateTime, 1000);
