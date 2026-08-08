/* ==========================================================================
   Modern Real Estate Website - Favorites Module
   LocalStorage Favorites Management & UI Sync
   ========================================================================== */

import { showToast } from './app.js';

const STORAGE_KEY = 'realestate_favorites';

export function getFavorites() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error reading favorites from localStorage', e);
    return [];
  }
}

export function isFavorite(propertyId) {
  const favorites = getFavorites();
  return favorites.includes(Number(propertyId));
}

export function toggleFavorite(propertyId) {
  const numericId = Number(propertyId);
  let favorites = getFavorites();
  let added = false;

  if (favorites.includes(numericId)) {
    favorites = favorites.filter(id => id !== numericId);
    showToast('Removed from Favorites', 'error');
  } else {
    favorites.push(numericId);
    added = true;
    showToast('Added to Favorites ❤️', 'success');
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  updateFavoritesBadge();
  updateHeartIcons();
  
  // Custom event for reactive UI updates
  window.dispatchEvent(new CustomEvent('favoritesUpdated', { detail: { favorites, propertyId: numericId, added } }));
  return added;
}

export function updateFavoritesBadge() {
  const badges = document.querySelectorAll('.fav-badge');
  const count = getFavorites().length;
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  });
}

export function updateHeartIcons() {
  const favBtns = document.querySelectorAll('.fav-btn');
  const favorites = getFavorites();

  favBtns.forEach(btn => {
    const id = Number(btn.getAttribute('data-id'));
    const icon = btn.querySelector('i');
    if (favorites.includes(id)) {
      btn.classList.add('active');
      if (icon) icon.className = 'fa-solid fa-heart';
    } else {
      btn.classList.remove('active');
      if (icon) icon.className = 'fa-regular fa-heart';
    }
  });
}

export function initFavorites() {
  updateFavoritesBadge();
  updateHeartIcons();

  // Event Delegation for click on any .fav-btn
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.fav-btn');
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      if (id) toggleFavorite(id);
    }
  });
}
