//generate a random color
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let IntervalID;
  const startChangingColor = function () {
    if (!IntervalID) {
      IntervalID = setInterval(changeBgcolor, 1000);
    }
    function changeBgcolor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  
  const stopChanginColor = function () {
    clearInterval(IntervalID);
    IntervalID = null;
  };
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChanginColor);
f  