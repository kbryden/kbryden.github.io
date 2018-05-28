// to open nav
var navButton = document.querySelector('.nav-icon');
navButton.addEventListener('click', function() {
  document
    .querySelector('body')
    .classList
    .toggle('nav-open');
});

//to close nav
var closeButton = document.querySelector('.close-icon');
closeButton.addEventListener('click', function() {
    document
      .querySelector('body')
      .classList
      .toggle('nav-open');
});


//carousel
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("img-lg");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
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