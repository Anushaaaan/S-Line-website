document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks for contacting us! We will get back to you soon.');
  this.reset();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Hero slider logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 6000);

// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');

// hamburger.addEventListener('click', () => {
//   hamburger.classList.toggle('active');
//   navLinks.classList.toggle('active');
// });

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector('.dropdown');

  let dropdownTimeout;

  function showDropdown() {
    clearTimeout(dropdownTimeout);
    dropdown.classList.add('open');
  }

  function hideDropdown() {
    dropdownTimeout = setTimeout(() => {
      dropdown.classList.remove('open');
    }, 200);
  }

  // Hover (desktop only)
  dropdown.addEventListener('mouseenter', () => {
    if (window.innerWidth > 768) showDropdown(); // Only on desktop
  });

  dropdown.addEventListener('mouseleave', () => {
    if (window.innerWidth > 768) hideDropdown(); // Only on desktop
  });

  // Click toggle (for mobile and desktop)
  dropdown.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent triggering body click
    dropdown.classList.toggle('open');
  });

  // Close dropdown if clicking outside
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });

  // Optional: Close on scroll (mobile UX enhancement)
  window.addEventListener('scroll', () => {
    dropdown.classList.remove('open');
  });
});



