import './less/index.less'

// stuff to work with


//buttons
const homeButton = document.querySelector('nav a:nth-of-type(1)');
const aboutUsButton = document.querySelector('nav a:nth-of-type(2)');
const blogButton = document.querySelector('nav a:nth-of-type(3)');
const contactButton = document.querySelector('nav a:nth-of-type(4)');

//other stuff
const funInTheSunField = document.querySelector('.destination:nth-of-type(1)');
const input = document.querySelector('.intro h2')

//images
const busImage = document.querySelector('.intro img')




//events

homeButton.addEventListener('mouseenter', colorChange)
function colorChange(evt){
  evt.target.style.color = 'red';
  setTimeout(function(){
    evt.target.style.color ='';    
  }, 5000);
}

funInTheSunField.addEventListener('mouseover', colorChangeTwo)
function colorChangeTwo(evt){
  evt.target.style.color = 'pink';
  setTimeout(function(){
    evt.target.style.color ='';    
  }, 1000);
}

blogButton.addEventListener('focusin', focusFunction)
function focusFunction(evt){
  evt.target.style.background = 'pink';
  setTimeout(function(){
    evt.target.style.background ='';    
  }, 1000);
}

busImage.addEventListener('wheel', zoomFunction)
function zoomFunction(evt){
  evt.preventDefault();
  scale += evt.deltaY * -0.01;
  scale = Math.min(Math.max(.125, scale), 4);
  busImage.style.transform = `scale(${scale})`;
}
let scale = 1;
busImage.onwheel = zoom;




































