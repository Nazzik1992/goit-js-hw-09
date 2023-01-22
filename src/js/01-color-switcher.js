
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', startBtnClick);
stopBtn.addEventListener('click', stopBtnClick);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  stopBtn.disabled = true;
  let timerId;

function startBtnClick() {
    stopBtn.disabled = false;
    startBtn.disabled = true;
    timerId = setInterval(() => {document.body.style.backgroundColor = `${getRandomHexColor()}`},1000);
};

function stopBtnClick(){
    stopBtn.disabled = true;
    startBtn.disabled = false;
    clearInterval(timerId);
};

