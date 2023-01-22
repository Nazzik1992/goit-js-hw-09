
import "flatpickr/dist/flatpickr.min.js";
import "flatpickr/dist/flatpickr.min.css";


const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

startBtn.addEventListener('click', startTimer);
startBtn.disabled = true;

const currentData = new Date;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] <= new Date){
        window.alert("Please choose a date in the future")
      }
    },
  };


