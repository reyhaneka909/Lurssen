const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

let index = 0;

function updateSlide(){
  const width = slides.clientWidth;
  slides.style.transform = `translateX(-${index * width}px)`;
}

function next(){
  index = (index + 1) % images.length;
  updateSlide();
}

function prev(){
  index = (index - 1 + images.length) % images.length;
  updateSlide();
}

document.querySelector('.next').onclick = next; 
document.querySelector('.prev').onclick = prev;

setInterval(next, 3000);

window.addEventListener('resize', updateSlide);