const secondHand = document.querySelector('#sec-hand');
const minHand = document.querySelector('#min-hand');
const hourHand = document.querySelector('#hour-hand');

function setDate(){
  const now = new Date();
  const audio = document.createElement('audio');
  
  const seconds = now.getSeconds();
  // change seconds to degrees
  const secondsDegrees = ((seconds/60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  // add audio ticking
  audio.setAttribute('src', 'https://github.com/wesbos/JavaScript30/blob/master/01%20-%20JavaScript%20Drum%20Kit/sounds/tink.wav?raw=true');
  audio.play();
  
  const mins = now.getMinutes();
  // change minutes to degrees
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
  
  const hours = now.getHours();
  // change hours to degrees
  const hoursDegrees = ((hours / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  
  // change background
  if(hours >= 7 && hours < 19){
    htmlTag = document.documentElement;
    htmlTag.style.background = 'url(https://unsplash.it/1500/1000?image=884)';
  }
}

setInterval(setDate,1000);

setDate();
