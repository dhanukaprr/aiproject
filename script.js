// Smooth scroll for anchor links
const navLinks = document.querySelectorAll('.nav-links a, .hero-ctas a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Button hover color transition (handled in CSS, but fallback for JS if needed)
// No extra JS needed as CSS handles transitions

// Lazy loading fallback for images (for older browsers)
document.addEventListener('DOMContentLoaded', function() {
  if ('loading' in HTMLImageElement.prototype) return;
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    const src = img.getAttribute('src');
    if (src) {
      img.src = src;
    }
  });
});

// Prevent default form submission for contact form
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! (Form submission is disabled in this demo.)');
  });
} 