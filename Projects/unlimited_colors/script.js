//

const randomcolor = function(){

  const hex = '0123456789ABCDRF';
  let color = '#';

  for(let i=0; i<6; i++){
    color += hex[Math.floor(Math.random() *16)];

  }
  return color;
}

let IntervalId;

const startChangingColor = function(){
  if(!IntervalId){
    IntervalId = setInterval(changeBgcolor, 1000);
  }

  function changeBgcolor(){
    document.body.style.backgroundColor= randomcolor();
  }

};

const stopChangingColor = function(){
  clearInterval(IntervalId);
  IntervalId = null;
}

let start = document.querySelector('#start');
let stop = document.querySelector('#stop');

start.addEventListener('click', startChangingColor);
stop.addEventListener('click', stopChangingColor);