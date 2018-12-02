// Burger menu opening mechanism

var sidemenu = document.querySelector('.sidemenu');
var dots = document.getElementsByClassName('dot');
var dotsArray = [].slice.call(dots);
var burger = document.querySelector('.burger');

burger.onclick = showmenu;

function showmenu() {
  sidemenu.classList.toggle('showsidemenu');
  for (var i = 0; i < dotsArray.length; i++) {
    dotsArray[i].classList.toggle('changedot' + [i + 1]);
  }
}

// Figuring width of special box to determine width of special boxes and translation

var spec = document.querySelectorAll('.spec');
var specgridwrap = document.querySelector('.specialgridwrap');

changespecialgridsize();

window.onresize = changespecialgridsize;

function changespecialgridsize(event) {
  for (var i = 0; i < spec.length; i++) {
    spec[i].style.width = specgridwrap.offsetWidth * 0.5 + 'px';
  }
}

var leftarrow = document.querySelector('.leftarrow');
var rightarrow = document.querySelector('.rightarrow');
var carousel = document.querySelector('.topspecialscarousel');

leftarrow.onclick = carouselleft;
rightarrow.onclick = carouselright;

function carouselleft() {
  var currentTranslate = parseInt(carousel.style.transform.match((/-?\d+/) || []));
  console.log('cl: ' + currentTranslate);
  var transformleft = currentTranslate + specgridwrap.offsetWidth * 0.5;
  carousel.style.transform = 'translate(' + transformleft + 'px)';
}

function carouselright() {
  var currentTranslate = parseInt(carousel.style.transform.match((/-?\d+/) || []));
  console.log('cr: ' + currentTranslate);
  var transformright = currentTranslate - specgridwrap.offsetWidth * 0.5;
  carousel.style.transform = 'translate(' + transformright + 'px)';
}
