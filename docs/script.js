let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
  testimonials.forEach(t => t.classList.remove('active'));
  testimonials[index].classList.add('active');
}

function prevTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}

document.addEventListener('DOMContentLoaded', () => {
  showTestimonial(currentTestimonial);
});

function openModal(imageSrc) {
  const modal = document.getElementById('achievement-modal');
  const modalImg = document.getElementById('modal-image');
  modalImg.src = imageSrc;
  modal.style.display = 'block';
}

function closeModal() {
  document.getElementById('achievement-modal').style.display = 'none';
}
