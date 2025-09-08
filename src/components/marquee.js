var wrapper = document.querySelector('.marquee-wrapper'),
    marquee = document.querySelector('.marquee'),   
    wrapperWidth = wrapper.offsetWidth,
    marqueeWidth = marquee.scrollWidth;
  
    
function move() {
  var currentTX = getComputedStyle(marquee).transform.split(',');
  if( currentTX[4] === undefined ) {
    currentTX = -1;
  } else {
    currentTX = parseFloat(currentTX[4]) - 1;
  }
  
  if(-currentTX >= marqueeWidth) {
    marquee.style.transform = 'translateX(' + wrapperWidth + 'px)';
  
  } else {
    marquee.style.transform = 'translateX(' + currentTX + 'px)';
  }
}

var interval = setInterval(move, 10);