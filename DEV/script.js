//Response, using jQuery, to at least two different user interaction events

// to open nav
var navButton = document.querySelector('.nav-icon');
navButton.addEventListener('click', function() {
  console.log('clicky!!!');
  document
    .querySelector('body')
    .classList
    .toggle('nav-open');
});

//to close nav
var closeButton = document.querySelector('.close-icon');
closeButton.addEventListener('click', function() {
    console.log('close it!');
    document
      .querySelector('body')
      .classList
      .toggle('nav-open');
});


//hover over nav icon

//$('.nav-icon').hover(function() {
//  $(this).fadeOut(100);
//  $(this).fadeIn(100);
//});
