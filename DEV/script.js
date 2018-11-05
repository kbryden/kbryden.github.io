// to open nav
$( document ).ready(function() {
    
var navButton = document.querySelector('.nav-icon');
navButton.addEventListener('click', function() {
  document
    .querySelector('body')
    .classList
    .toggle('nav-open');
});

//to close nav
var closeButton = document.querySelector('.close-icon');
closeButton.addEventListener('click', function () {
    document
      .querySelector('body')
      .classList
      .toggle('nav-open');
});


//carousel
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


//http://thenewcode.com/777/Create-Fullscreen-HTML5-Page-Background-Video
var closeButton = document.querySelector('.close-icon');
closeButton.addEventListener('click', function() {
    console.log('close it!');
    document
      .querySelector('body')
      .classList
      .toggle('nav-open');
});

var vid = document.getElementById("bgvid"),
pauseButton = document.getElementById("vidpause");
function vidFade() {
    vid.classList.add("stopfade");
};

//go back button
function goBack() {
    window.history.back()
}
    
});