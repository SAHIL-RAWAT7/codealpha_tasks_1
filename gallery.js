let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-image');

function showImage(index) {
  images.forEach((image, i) => {
    image.classList.remove('active');
    if (i === index) {
      image.classList.add('active');
    }
  });
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
}

// Initial display
showImage(currentImageIndex);
