import './less/index.less'

// stuff to work with


//buttons
const homeButton = document.querySelector('nav a:nth-of-type(1)');
const aboutUsButton = document.querySelector('nav a:nth-of-type(2)');
const blogButton = document.querySelector('nav a:nth-of-type(3)');
const contactButton = document.querySelector('nav a:nth-of-type(4)');

//other stuff
const funInTheSunField = document.querySelector('.destination:nth-of-type(1)');
const input = document.querySelector('#input');
const logoHeading = document.querySelector('.logo-heading');

//images
const busImage = document.querySelector('.intro img')





//events


// `mouseenter`

homeButton.addEventListener('mouseenter', colorChange)
function colorChange(evt){
  evt.target.style.color = 'red';
  setTimeout(function(){
    evt.target.style.color ='';    
  }, 5000);
}

// `mouseover`

funInTheSunField.addEventListener('mouseover', colorChangeTwo)
function colorChangeTwo(evt){
  evt.target.style.background = 'pink';
  setTimeout(function(){
    evt.target.style.background ='';    
  }, 1000);
}

// `focusin`

blogButton.addEventListener('focusin', focusFunction)
function focusFunction(evt){
  evt.target.style.background = 'pink';
  setTimeout(function(){
    evt.target.style.background ='';    
  }, 1000);
}

// `wheel`

busImage.addEventListener('wheel', zoomFunction)
function zoomFunction(evt){
  evt.preventDefault();
  scale += evt.deltaY * -0.01;
  scale = Math.min(Math.max(.125, scale), 4);
  busImage.style.transform = `scale(${scale})`;
}
let scale = 1;

// `keydown`

input.addEventListener('keydown', logKey);
function logKey(e) {
  console.log(e.code);
}

// `load`

window.addEventListener('load', onLoad);
function onLoad() {
  console.log('hello');
}

// `resize`
window.addEventListener('resize', onResize);
function onResize() {
  // console.log(`resize:`, window.innerHeight, window.innerWidth);
  logoHeading.innerHTML = `${window.innerHeight} x ${window.innerWidth}`;
}

// `scroll`

let lastKnownScrollPosition = 0;
let ticking = false;

document.addEventListener('scroll', function() {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      logoHeading.innerHTML = `${lastKnownScrollPosition}`;
      console.log(`${lastKnownScrollPosition}`)
      ticking = false;
    });

    ticking = true;
  }
});

// `select`
input.addEventListener('select', onSelect);
function onSelect(event) {
  const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  logoHeading.innerHTML = `You selected: ${selection}`;
}

// `dblclick`

busImage.addEventListener('dblclick', onDblclick);
function onDblclick() {
  document.body.style.backgroundColor = 'magenta';
}

// `paste`
input.addEventListener('paste', onPaste);
function onPaste(event) {
  let paste = (event.clipboardData || window.clipboardData).getData('text');
  paste = paste.toUpperCase();
  
  input.value = paste;

  event.preventDefault();
}


