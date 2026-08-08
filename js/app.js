/* ==========================================================================
   Modern Real Estate Website - Main Application Script
   Global Initializations, UI Handlers, Toast Notifications, & Card Rendering
   ========================================================================== */

import { initDarkMode } from './darkmode.js';
import { initFavorites, getFavorites, isFavorite } from './favorites.js';
import { initFormValidation } from './validation.js';
import { initAnimations } from './animations.js';
import { initSliders } from './slider.js';
import { propertiesData, categoriesData, agentsData, testimonialsData } from './properties-data.js';

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initStickyNavbar();
  initMobileNav();
  initDarkMode();
  initFavorites();
  initFormValidation();
  initAnimations();
  initSliders();
  initScrollTopBtn();

  // Page Specific Inits
  initHomePage();
  initPropertyDetailsPage();
  initAgentsPage();
  initFavoritesModal();
});

/* --------------------------------------------------------------------------
   1. Preloader Fade Out
   -------------------------------------------------------------------------- */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.classList.add('fade-out');
      setTimeout(() => preloader.style.display = 'none', 500);
    });
    // Fallback timer
    setTimeout(() => {
      if (preloader && !preloader.classList.contains('fade-out')) {
        preloader.classList.add('fade-out');
        setTimeout(() => preloader.style.display = 'none', 500);
      }
    }, 1500);
  }
}

/* --------------------------------------------------------------------------
   2. Sticky Navbar & Active Link
   -------------------------------------------------------------------------- */
function initStickyNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // Set active nav link based on current page pathname
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Smooth scroll for internal anchor links with header offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          const headerOffset = 90;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. Mobile Navigation Hamburger Menu
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside or on a link
    document.addEventListener('click', (e) => {
      if (!hamburgerBtn.contains(e.target) && !navMenu.contains(e.target)) {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }
}

/* --------------------------------------------------------------------------
   4. Scroll To Top Button
   -------------------------------------------------------------------------- */
function initScrollTopBtn() {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --------------------------------------------------------------------------
   5. Global Toast Notification System
   -------------------------------------------------------------------------- */
export function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const iconClass = type === 'success' ? 'fa-circle-check' : (type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-info');
  toast.innerHTML = `
    <i class="fa-solid ${iconClass}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-20px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* --------------------------------------------------------------------------
   6. Reusable Property Card Template Generator
   -------------------------------------------------------------------------- */
export function renderPropertyCard(p) {
  const isFav = isFavorite(p.id);

  return `
    <div class="property-card reveal-up">
      <div class="card-image-wrapper">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
        <div class="card-badges">
          <span class="badge ${p.status === 'For Sale' ? 'badge-sale' : 'badge-rent'}">${p.status}</span>
          ${p.featured ? '<span class="badge badge-featured">Featured</span>' : ''}
        </div>
        <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${p.id}" aria-label="Add to Favorites">
          <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>
        <div class="card-price-tag">${p.price}</div>
      </div>
      <div class="card-content">
        <div class="card-type">${p.type}</div>
        <h3 class="card-title"><a href="property-details.html?id=${p.id}">${p.title}</a></h3>
        <div class="card-location"><i class="fa-solid fa-location-dot"></i> ${p.address}</div>
        <div class="card-features">
          <div class="feature-item"><i class="fa-solid fa-bed"></i> ${p.bedrooms} Beds</div>
          <div class="feature-item"><i class="fa-solid fa-bath"></i> ${p.bathrooms} Baths</div>
          <div class="feature-item"><i class="fa-solid fa-ruler-combined"></i> ${p.area.toLocaleString()} sqft</div>
        </div>
        <div class="card-footer">
          <div class="agent-thumb">
            <img src="${p.agent.avatar}" alt="${p.agent.name}" />
            <span class="agent-thumb-name">${p.agent.name}</span>
          </div>
          <a href="property-details.html?id=${p.id}" class="btn btn-outline btn-sm">Details <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   7. Home Page Initialization
   -------------------------------------------------------------------------- */
function initHomePage() {
  // Render Featured Properties
  const featuredContainer = document.getElementById('featuredPropertiesGrid');
  if (featuredContainer) {
    const featuredList = propertiesData.filter(p => p.featured).slice(0, 3);
    featuredContainer.innerHTML = featuredList.map(renderPropertyCard).join('');
  }

  // Render Latest Properties
  const latestContainer = document.getElementById('latestPropertiesGrid');
  if (latestContainer) {
    const latestList = propertiesData.filter(p => p.latest).slice(0, 3);
    latestContainer.innerHTML = latestList.map(renderPropertyCard).join('');
  }

  // Render Categories
  const categoryContainer = document.getElementById('categoryGrid');
  if (categoryContainer) {
    categoryContainer.innerHTML = categoriesData.map(cat => `
      <a href="properties.html?type=${encodeURIComponent(cat.name)}" class="category-card reveal-up">
        <div class="category-icon-box">
          <i class="fa-solid ${cat.icon}"></i>
        </div>
        <h3 class="category-title">${cat.name}</h3>
        <span class="category-count">${cat.count}</span>
      </a>
    `).join('');
  }

  // Home Hero Search Form Redirect
  const heroSearchForm = document.getElementById('heroSearchForm');
  if (heroSearchForm) {
    heroSearchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const city = document.getElementById('heroCitySelect')?.value || 'All';
      const type = document.getElementById('heroTypeSelect')?.value || 'All';
      const price = document.getElementById('heroPriceSelect')?.value || 'All';
      window.location.href = `properties.html?city=${encodeURIComponent(city)}&type=${encodeURIComponent(type)}`;
    });
  }
}

/* --------------------------------------------------------------------------
   8. Property Details Page Loader
   -------------------------------------------------------------------------- */
function initPropertyDetailsPage() {
  const detailsContainer = document.getElementById('propertyDetailsWrapper');
  if (!detailsContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const id = Number(urlParams.get('id')) || 1;
  const property = propertiesData.find(p => p.id === id) || propertiesData[0];

  document.title = `${property.title} | Modern Real Estate`;

  const isFav = isFavorite(property.id);

  detailsContainer.innerHTML = `
    <!-- Gallery Section -->
    <div class="section-header" style="margin-bottom: 2rem;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
        <div>
          <span class="badge ${property.status === 'For Sale' ? 'badge-sale' : 'badge-rent'}">${property.status}</span>
          <h1 style="font-size: 2.5rem; margin: 0.5rem 0;">${property.title}</h1>
          <p class="card-location" style="font-size: 1.1rem;"><i class="fa-solid fa-location-dot"></i> ${property.address}</p>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 2.25rem; font-weight: 800; color: var(--primary);">${property.price}</div>
          <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${property.id}" style="position: static; display: inline-flex; margin-top: 0.5rem;">
            <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Image Gallery -->
    <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1rem; margin-bottom: 3rem;" class="details-gallery-grid">
      <div style="height: 480px; border-radius: var(--radius-lg); overflow: hidden; position: relative;">
        <img id="galleryMainImg" src="${property.image}" alt="${property.title}" style="width: 100%; height: 100%; object-fit: cover; transition: opacity 0.3s ease;" />
      </div>
      <div style="display: grid; grid-template-rows: repeat(3, 1fr); gap: 1rem; height: 480px;">
        ${property.gallery.slice(0, 3).map((imgUrl, idx) => `
          <div class="gallery-thumb ${idx === 0 ? 'active' : ''}" data-full="${imgUrl}" style="border-radius: var(--radius-md); overflow: hidden; cursor: pointer; border: 2px solid transparent;">
            <img src="${imgUrl}" alt="Gallery ${idx + 1}" style="width: 100%; height: 100%; object-fit: cover;" />
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Details Grid -->
    <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 2.5rem;" class="details-layout-grid">
      <!-- Main Info -->
      <div>
        <!-- Specs Bar -->
        <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1.5rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); gap: 1.5rem; text-align: center; margin-bottom: 2.5rem;">
          <div><i class="fa-solid fa-bed" style="color: var(--primary); font-size: 1.5rem; margin-bottom: 0.35rem;"></i><div style="font-weight: 700; font-size: 1.1rem;">${property.bedrooms}</div><span style="color: var(--text-muted); font-size: 0.85rem;">Bedrooms</span></div>
          <div><i class="fa-solid fa-bath" style="color: var(--primary); font-size: 1.5rem; margin-bottom: 0.35rem;"></i><div style="font-weight: 700; font-size: 1.1rem;">${property.bathrooms}</div><span style="color: var(--text-muted); font-size: 0.85rem;">Bathrooms</span></div>
          <div><i class="fa-solid fa-ruler-combined" style="color: var(--primary); font-size: 1.5rem; margin-bottom: 0.35rem;"></i><div style="font-weight: 700; font-size: 1.1rem;">${property.area}</div><span style="color: var(--text-muted); font-size: 0.85rem;">Square Ft</span></div>
          <div><i class="fa-solid fa-warehouse" style="color: var(--primary); font-size: 1.5rem; margin-bottom: 0.35rem;"></i><div style="font-weight: 700; font-size: 1.1rem;">${property.garage}</div><span style="color: var(--text-muted); font-size: 0.85rem;">Garage</span></div>
          <div><i class="fa-solid fa-calendar-days" style="color: var(--primary); font-size: 1.5rem; margin-bottom: 0.35rem;"></i><div style="font-weight: 700; font-size: 1.1rem;">${property.builtYear}</div><span style="color: var(--text-muted); font-size: 0.85rem;">Year Built</span></div>
        </div>

        <!-- Overview -->
        <div style="margin-bottom: 2.5rem;">
          <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Property Description</h3>
          <p style="color: var(--text-body); font-size: 1.05rem; line-height: 1.8;">${property.description}</p>
        </div>

        <!-- Amenities -->
        <div style="margin-bottom: 2.5rem;">
          <h3 style="font-size: 1.5rem; margin-bottom: 1.25rem;">Features & Amenities</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem;">
            ${property.amenities.map(item => `
              <div style="display: flex; align-items: center; gap: 0.75rem; background: var(--bg-surface); padding: 0.85rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
                <i class="fa-solid fa-circle-check" style="color: var(--accent);"></i>
                <span style="font-weight: 600; font-size: 0.95rem;">${item}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Floor Plan -->
        <div style="margin-bottom: 2.5rem;">
          <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Architectural Floor Plan</h3>
          <div style="border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--border-color);">
            <img src="${property.floorPlanImage}" alt="Floor Plan" style="width: 100%; max-height: 400px; object-fit: cover;" />
          </div>
        </div>

        <!-- Nearby Location -->
        <div style="margin-bottom: 2.5rem;">
          <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Nearby Facilities</h3>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
            <div style="background: var(--bg-surface); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);"><i class="fa-solid fa-graduation-cap" style="color: var(--primary);"></i> <strong>Schools:</strong> ${property.nearby.schools}</div>
            <div style="background: var(--bg-surface); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);"><i class="fa-solid fa-hospital" style="color: var(--primary);"></i> <strong>Hospitals:</strong> ${property.nearby.hospitals}</div>
            <div style="background: var(--bg-surface); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);"><i class="fa-solid fa-bag-shopping" style="color: var(--primary);"></i> <strong>Shopping:</strong> ${property.nearby.shopping}</div>
            <div style="background: var(--bg-surface); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);"><i class="fa-solid fa-plane" style="color: var(--primary);"></i> <strong>Airport:</strong> ${property.nearby.airport}</div>
          </div>
        </div>

        <!-- Google Maps Placeholder -->
        <div>
          <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Location Map</h3>
          <div style="height: 320px; border-radius: var(--radius-lg); overflow: hidden; background: #e2e8f0; position: relative; display: flex; align-items: center; justify-content: center; text-align: center; border: 1px solid var(--border-color);">
            <div style="z-index: 2; padding: 2rem; background: var(--glass-bg); backdrop-filter: blur(8px); border-radius: var(--radius-md); max-width: 400px;">
              <i class="fa-solid fa-map-location-dot" style="font-size: 2.5rem; color: var(--primary); margin-bottom: 0.5rem;"></i>
              <h4 style="margin-bottom: 0.25rem;">${property.address}</h4>
              <p style="color: var(--text-muted); font-size: 0.85rem;">Interactive Map view centered on ${property.city}</p>
            </div>
            <div style="position: absolute; inset: 0; background: url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80') center/cover; opacity: 0.4;"></div>
          </div>
        </div>
      </div>

      <!-- Agent Sidebar -->
      <div>
        <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 2rem; position: sticky; top: 100px;">
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
            <img src="${property.agent.avatar}" alt="${property.agent.name}" style="width: 64px; height: 64px; border-radius: 50%; object-fit: cover; border: 2px solid var(--primary);" />
            <div>
              <h4 style="font-size: 1.15rem;">${property.agent.name}</h4>
              <p style="color: var(--primary); font-size: 0.85rem; font-weight: 600;">${property.agent.role}</p>
              <div style="font-size: 0.8rem; color: #F59E0B; margin-top: 0.2rem;"><i class="fa-solid fa-star"></i> ${property.agent.rating} Rating (${property.agent.experience})</div>
            </div>
          </div>

          <form class="validate-contact-form" style="display: flex; flex-direction: column; gap: 1rem;">
            <div class="form-group-item">
              <label>Your Name</label>
              <input type="text" name="name" class="form-control" placeholder="John Doe" required style="padding-left: 1rem;" />
            </div>
            <div class="form-group-item">
              <label>Your Email</label>
              <input type="email" name="email" class="form-control" placeholder="john@example.com" required style="padding-left: 1rem;" />
            </div>
            <div class="form-group-item">
              <label>Phone Number</label>
              <input type="tel" name="phone" class="form-control" placeholder="+1 (555) 000-0000" style="padding-left: 1rem;" />
            </div>
            <div class="form-group-item">
              <label>Message</label>
              <textarea name="message" class="form-control" rows="4" style="padding-left: 1rem;" placeholder="I'm interested in ${property.title}..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%;"><i class="fa-solid fa-paper-plane"></i> Send Inquiry</button>
          </form>
        </div>
      </div>
    </div>

    <!-- Related Properties -->
    <div style="margin-top: 5rem;">
      <div class="section-header">
        <span class="section-subtitle">Similar Listings</span>
        <h2 class="section-title">Related Properties</h2>
      </div>
      <div class="property-grid">
        ${propertiesData.filter(p => p.id !== property.id).slice(0, 3).map(renderPropertyCard).join('')}
      </div>
    </div>
  `;

  // Init gallery click listeners
  const thumbs = detailsContainer.querySelectorAll('.gallery-thumb');
  const mainImg = detailsContainer.querySelector('#galleryMainImg');
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.style.borderColor = 'transparent');
      thumb.style.borderColor = 'var(--primary)';
      const full = thumb.getAttribute('data-full');
      if (mainImg && full && mainImg.src !== full) {
        mainImg.style.opacity = '0';
        setTimeout(() => {
          mainImg.src = full;
          mainImg.style.opacity = '1';
        }, 200);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   9. Agents Page Loader
   -------------------------------------------------------------------------- */
function initAgentsPage() {
  const agentsGrid = document.getElementById('agentsGrid');
  if (!agentsGrid) return;

  agentsGrid.innerHTML = agentsData.map(agent => `
    <div class="feature-card reveal-up" style="text-align: center;">
      <img src="${agent.avatar}" alt="${agent.name}" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; margin: 0 auto 1.25rem; border: 4px solid var(--primary-light);" />
      <h3 style="font-size: 1.35rem; margin-bottom: 0.25rem;">${agent.name}</h3>
      <div style="color: var(--primary); font-weight: 600; font-size: 0.9rem; margin-bottom: 0.75rem;">${agent.role}</div>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.25rem;">${agent.bio}</p>
      
      <div style="display: flex; justify-content: center; gap: 1.5rem; font-size: 0.85rem; color: var(--text-main); margin-bottom: 1.5rem; border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); padding: 0.75rem 0;">
        <div><strong>${agent.experience}</strong> Exp</div>
        <div><i class="fa-solid fa-star" style="color: #F59E0B;"></i> <strong>${agent.rating}</strong> Rating</div>
        <div><strong>${agent.propertiesCount}</strong> Listings</div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <a href="tel:${agent.phone}" class="btn btn-outline" style="width: 100%; font-size: 0.85rem;"><i class="fa-solid fa-phone"></i> ${agent.phone}</a>
        <button class="btn btn-primary agent-contact-btn" data-agent="${agent.name}" style="width: 100%; font-size: 0.85rem;"><i class="fa-solid fa-envelope"></i> Contact Agent</button>
      </div>
    </div>
  `).join('');

  // Agent Contact Modal Trigger
  document.querySelectorAll('.agent-contact-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = document.getElementById('agentContactModal');
      const agentNameInput = document.getElementById('modalAgentName');
      if (modal) {
        if (agentNameInput) agentNameInput.value = btn.getAttribute('data-agent');
        modal.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   10. Favorites Drawer / Modal
   -------------------------------------------------------------------------- */
function initFavoritesModal() {
  const favNavBtns = document.querySelectorAll('.favorites-nav-btn');
  const favModal = document.getElementById('favoritesModal');
  const favGrid = document.getElementById('favoritesGrid');
  const closeBtns = document.querySelectorAll('.modal-close-btn');

  if (!favModal) return;

  function renderFavoritesList() {
    const favIds = getFavorites();
    const list = propertiesData.filter(p => favIds.includes(p.id));

    if (!favGrid) return;

    if (list.length === 0) {
      favGrid.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem;">
          <i class="fa-regular fa-heart" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
          <h3>No Favorite Properties Yet</h3>
          <p style="color: var(--text-muted); margin-top: 0.5rem;">Click the heart icon on any property to save it to your wishlist.</p>
        </div>
      `;
      return;
    }

    favGrid.innerHTML = list.map(renderPropertyCard).join('');
  }

  favNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      renderFavoritesList();
      favModal.classList.add('active');
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    });
  });

  favModal.addEventListener('click', (e) => {
    if (e.target === favModal) {
      favModal.classList.remove('active');
    }
  });

  window.addEventListener('favoritesUpdated', () => {
    if (favModal.classList.contains('active')) {
      renderFavoritesList();
    }
  });
}
