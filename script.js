const images = document.querySelectorAll('.gallery img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const caption = document.getElementById('caption');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  modal.style.display = 'block';
  modalImg.src = images[index].src;
  caption.textContent = images[index].alt;
}

function closeModal() {
  modal.style.display = 'none';
}

function showImage(index) {
  currentIndex = (index + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
  caption.textContent = images[currentIndex].alt;
}

// Event listeners
images.forEach((img, i) => {
  img.addEventListener('click', () => openModal(i));
});

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
nextBtn.addEventListener('click', () => showImage(currentIndex + 1));
