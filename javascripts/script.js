
// First Sec Code

let menu = document.querySelector('.menu')
let navCol = document.querySelector('.nav-Col');
let close = document.querySelector('.close-menu'); 

var tl = gsap.timeline(); 

function khan() {
    navCol.style.display = 'none'
}
khan();
 
tl.to('.nav-Col', {
    opacity: 1,
    duration: 0.4
});

tl.from('.nav-Col ic', {
    opacity: 0,
    duration: 0.7
})


tl.from('.nav-Col li', {
    x: 70,
    stagger: 0.28,
    duration: 0.8,
    ease: "slow(0.5, 0.8)"

});

tl.pause()

menu.addEventListener('click', function () {
    tl.play()
    navCol.style.display = 'flex'
})

close.addEventListener('click', function () {
    tl.reverse()
    navCol.style.display = 'none'
})



//typewriter
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["Web Developer", "Web Designer", "SEO Experts", "Learner..."];

let textArrayIndex = 0;
let charIndex = 0;

const erase = () => {
  if (charIndex > 0) {
    cursor.classList.remove('blink');
    typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 80);
  } else {
    cursor.classList.add('blink');
    textArrayIndex++;
    if (textArrayIndex > textArray.length - 1) {
      textArrayIndex = 0;
    }
    setTimeout(type, 1000);
  }
}

const type = () => {
  if (charIndex <= textArray[textArrayIndex].length - 1) {
    cursor.classList.remove('blink');
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 120);
  } else {
    cursor.classList.add('blink');
    setTimeout(erase, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
})


// First Sec Code done 



// Second Sec 
var abcursor = document.querySelector('#cursorAbout');
var abMe = document.querySelector('.mainContainerFirst');
var myContent = document.querySelector('.image');


abMe.addEventListener('mousemove', (run) => {
    gsap.to(abcursor, {
        x: run.x,
        y: run.y,
        duration:2.5,
        ease: "power3.out"
    })
})

myContent.addEventListener('mouseenter', function() {
    gsap.to(abcursor, {
        scale: 3
    })
   
    
})
myContent.addEventListener('mouseleave', function()  {
    gsap.to(abcursor, {
        scale: 1
    })
}) 

// Second sec end



// Third Sec code
// Cursive Path Js code 

let initialPath = 'M 0 80 Q 500 80 1000 10';
let finalPath = 'M 10 100 Q 500 100 1000 100';

var string = document.querySelector('#string');
var cursorA = document.querySelector('#cursor')




string.addEventListener('mousemove', function (dets) {
    let path = `M 10 50 Q ${dets.x} ${dets.y} 990 50`


    gsap.to('svg path', {
        attr: { d: path },
        duration: 0.3,
        ease: 'power3.out'
    })
})



string.addEventListener('mouseleave', function () {
    gsap.to('svg path', {
        attr: { d: finalPath },
        duration: 1.2,
        ease: 'elastic.out(1,0.2)'
    })
})

// Cursive Path Js code 



// Cursor Animation Code 

var ThirdSec = document.querySelector('#ThirdSec');
var cursorA = document.querySelector('#cursor');



ThirdSec.addEventListener('mousemove', function (dets) {
    gsap.to(cursorA, {
        x: dets.x,
        y: dets.y,
        duration: 1.9,
        ease: "expo.out"
    })
})

