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
