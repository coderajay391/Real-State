/* ==========================================================================
   Modern Real Estate Website - Form Validation Module
   Inline Error Messaging & Client-Side Validation
   ========================================================================== */

import { showToast } from './app.js';

export function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}

export function validatePhone(phone) {
  const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return re.test(String(phone));
}

export function initFormValidation() {
  // Newsletter Form Validation
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const feedback = form.querySelector('.form-feedback') || createFeedbackEl(form);

      if (!input || !input.value.trim()) {
        showFeedback(feedback, 'Please enter your email address.', 'error');
        return;
      }

      if (!validateEmail(input.value.trim())) {
        showFeedback(feedback, 'Please enter a valid email address.', 'error');
        return;
      }

      // Success
      showFeedback(feedback, 'Thank you! You are now subscribed to property updates.', 'success');
      showToast('Successfully Subscribed to Newsletter!', 'success');
      input.value = '';
    });
  });

  // Contact Form Validation
  const contactForms = document.querySelectorAll('.validate-contact-form');
  contactForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const nameInput = form.querySelector('[name="name"]');
      const emailInput = form.querySelector('[name="email"]');
      const phoneInput = form.querySelector('[name="phone"]');
      const messageInput = form.querySelector('[name="message"]');

      // Clear previous error styles
      form.querySelectorAll('.error-text').forEach(el => el.remove());
      form.querySelectorAll('.form-control').forEach(el => el.style.borderColor = '');

      if (nameInput && !nameInput.value.trim()) {
        showFieldError(nameInput, 'Full name is required.');
        isValid = false;
      }

      if (emailInput) {
        if (!emailInput.value.trim()) {
          showFieldError(emailInput, 'Email address is required.');
          isValid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
          showFieldError(emailInput, 'Invalid email format.');
          isValid = false;
        }
      }

      if (phoneInput && phoneInput.value.trim() && !validatePhone(phoneInput.value.trim())) {
        showFieldError(phoneInput, 'Invalid phone number format.');
        isValid = false;
      }

      if (messageInput && !messageInput.value.trim()) {
        showFieldError(messageInput, 'Message cannot be blank.');
        isValid = false;
      }

      if (isValid) {
        showToast('Your message has been sent successfully!', 'success');
        form.reset();
        
        // If inside a modal, close modal
        const modal = form.closest('.modal-overlay');
        if (modal) {
          modal.classList.remove('active');
        }
      }
    });
  });
}

function showFieldError(input, message) {
  input.style.borderColor = '#EF4444';
  const err = document.createElement('span');
  err.className = 'error-text';
  err.style.color = '#EF4444';
  err.style.fontSize = '0.8rem';
  err.style.marginTop = '0.25rem';
  err.style.display = 'block';
  err.textContent = message;
  input.parentNode.appendChild(err);
}

function createFeedbackEl(form) {
  const div = document.createElement('div');
  div.className = 'form-feedback';
  form.appendChild(div);
  return div;
}

function showFeedback(el, message, type) {
  el.textContent = message;
  el.className = `form-feedback ${type}`;
}
