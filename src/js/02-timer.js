
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


  
const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

startBtn.disabled = true;
startBtn.addEventListener('click', startTimer);

let endDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] <= new Date){
      Notiflix.Notify.failure("Please choose a date in the future")
      return};

      endDate = selectedDates[0];
      startBtn.disabled = false;
    
      
  },
};

flatpickr('#datetime-picker', {...options,});


function startTimer(){
  setInterval(countDownTimer, 1000);
}

    
function countDownTimer(){
const now = new Date().getTime();
const diffDate = endDate - now;

const time = convertMs(diffDate);
updateTimer(time);


if(diffDate <= 0){
  clearInterval();
}

};

function addLeadingZero(value) {
  return String(value).padStart(2,0);
}

function convertMs(diffDate) {
    
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
 
  
const days = addLeadingZero(Math.floor(diffDate / day));
const hours = addLeadingZero(Math.floor((diffDate % day) / hour));
const minutes = addLeadingZero(Math.floor(((diffDate % day) % hour) / minute));
const seconds = addLeadingZero(Math.floor((((diffDate % day) % hour) % minute) / second));


return { days, hours, minutes, seconds };

}
function updateTimer({ days, hours, minutes, seconds }) {

daysEl.textContent = days;
hoursEl.textContent = hours;
minutesEl.textContent = minutes;
secondsEl.textContent = seconds; 
}
