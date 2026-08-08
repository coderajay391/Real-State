/* ==========================================================================
   Modern Real Estate Website - Animations Module
   Intersection Observer Scroll Reveals & Animated Statistics Counters
   ========================================================================== */

export function initAnimations() {
  initScrollReveal();
  initCounterAnimation();
}

// 1. Scroll Reveal Animations via Intersection Observer
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-zoom');

  if (!revealElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // Reveal once
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));
}

// 2. Animated Statistics Counters
function initCounterAnimation() {
  const counters = document.querySelectorAll('.stat-number');

  if (!counters.length) return;

  const observerOptions = {
    threshold: 0.5
  };

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => counterObserver.observe(counter));
}

function animateCounter(counterEl) {
  const target = Number(counterEl.getAttribute('data-target') || counterEl.textContent.replace(/\D/g, ''));
  const suffix = counterEl.getAttribute('data-suffix') || counterEl.textContent.replace(/[0-9]/g, '').trim();
  const duration = 2000; // ms
  const frameRate = 1000 / 60;
  const totalFrames = Math.round(duration / frameRate);
  let frame = 0;

  const timer = setInterval(() => {
    frame++;
    const progress = frame / totalFrames;
    // Ease out quad
    const easeProgress = progress * (2 - progress);
    const currentCount = Math.floor(easeProgress * target);

    counterEl.textContent = `${currentCount}${suffix}`;

    if (frame >= totalFrames) {
      counterEl.textContent = `${target}${suffix}`;
      clearInterval(timer);
    }
  }, frameRate);
}
