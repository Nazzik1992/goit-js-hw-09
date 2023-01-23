import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onSubmit);


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise ((resolve, reject) => {
   setTimeout(() => { 
    if (shouldResolve) {
      resolve({position, delay});
    } else {
      reject({position, delay});
    }
  }, delay);
  });
}

function onSubmit (event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;
let delayInput = +delay.value;
let stepInput = +step.value;
let amountInput = +amount.value;

for (let i = 1; i <= amountInput; i += 1) {

createPromise(i, delayInput)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  delayInput += stepInput;
  }

};