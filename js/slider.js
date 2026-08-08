/* ==========================================================================
   Modern Real Estate Website - Slider Module
   Auto-sliding Testimonials & Image Gallery Carousels
   ========================================================================== */

export function initSliders() {
  initTestimonialSlider();
  initGallerySlider();
}

// 1. Testimonial Slider
function initTestimonialSlider() {
  const track = document.querySelector('.testimonial-track');
  if (!track) return;

  const slides = Array.from(track.children);
  const nextBtn = document.querySelector('.testimonial-next');
  const prevBtn = document.querySelector('.testimonial-prev');
  const dotsNav = document.querySelector('.slider-dots');

  if (!slides.length) return;

  let currentIndex = 0;
  let autoSlideTimer = null;

  // Create dot indicators dynamically
  if (dotsNav) {
    dotsNav.innerHTML = '';
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.className = `dot ${index === 0 ? 'active' : ''}`;
      dot.setAttribute('data-index', index);
      dot.addEventListener('click', () => goToSlide(index));
      dotsNav.appendChild(dot);
    });
  }

  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update dots
    if (dotsNav) {
      const dots = Array.from(dotsNav.children);
      dots.forEach((dot, idx) => {
        if (idx === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  }

  function goToSlide(index) {
    currentIndex = index;
    if (currentIndex >= slides.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = slides.length - 1;
    updateSlider();
    resetAutoSlide();
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
  }

  // Auto sliding every 4 seconds
  function startAutoSlide() {
    autoSlideTimer = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 4000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideTimer);
    startAutoSlide();
  }

  startAutoSlide();

  // Pause on mouse hover
  const sliderWrapper = document.querySelector('.testimonial-slider-wrapper');
  if (sliderWrapper) {
    sliderWrapper.addEventListener('mouseenter', () => clearInterval(autoSlideTimer));
    sliderWrapper.addEventListener('mouseleave', () => startAutoSlide());
  }
}

// 2. Property Details Image Gallery Slider
function initGallerySlider() {
  const mainImg = document.getElementById('galleryMainImg');
  const thumbs = document.querySelectorAll('.gallery-thumb');

  if (!mainImg || !thumbs.length) return;

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const fullSrc = thumb.getAttribute('data-full');
      if (fullSrc) {
        mainImg.style.opacity = '0.5';
        setTimeout(() => {
          mainImg.src = fullSrc;
          mainImg.style.opacity = '1';
        }, 150);
      }
    });
  });
}
