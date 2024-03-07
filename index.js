let currentImageIndex = 0;

function openLightbox(index) {
  currentImageIndex = index;
  document.getElementById('lightbox-image').src = document.getElementsByClassName('thumbnail')[index].querySelector('img').src;
  document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % document.getElementsByClassName('thumbnail').length;
  openLightbox(currentImageIndex);
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + document.getElementsByClassName('thumbnail').length) % document.getElementsByClassName('thumbnail').length;
  openLightbox(currentImageIndex);
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    nextImage();
  } else if (event.key === 'ArrowLeft') {
    prevImage();
  } else if (event.key === 'Escape') {
    closeLightbox();
  }
});


const surveyForm = document.getElementById('surveyForm');
const popup = document.getElementById('popup');

surveyForm.addEventListener('submit', function(event) {
  event.preventDefault();
  popup.style.display = 'block';
  setTimeout(function() {
    popup.style.display = 'none';
    surveyForm.reset();
  }, 3000); // Hide popup after 3 seconds
});
