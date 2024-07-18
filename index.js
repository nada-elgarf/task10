let sildeIndex = 1
showSlides(sildeIndex)

function plusSlides (n) {
  showSlides(sildeIndex += n)
}

function currentSlide (n) {
  showSlides(sildeIndex = n)
}
function showSlides (n) {
  let i
  let sildes = document.getElementsByClassName('mySlides')
  let dots = document.getElementsByClassName('dot')
  if (n > sildes.length) {sildeIndex = 1}
  if (n < 1) {sildeIndex = sildes.length}

  for (i = 0; i < sildes.length; i++) {
    sildes[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active ' , '')
  }
  sildes[sildeIndex - 1].style.display = 'block'
  dots[sildeIndex - 1].className += 'active'
}
