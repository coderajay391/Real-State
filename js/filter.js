/* ==========================================================================
   Modern Real Estate Website - Search & Filter Engine Module
   Real-time Property Filtering & Sorting
   ========================================================================== */

import { propertiesData } from './properties-data.js';
import { renderPropertyCard } from './app.js';
import { updateHeartIcons } from './favorites.js';

export function filterProperties(criteria) {
  let results = [...propertiesData];

  // 1. Keyword / Name / Location search
  if (criteria.keyword) {
    const kw = criteria.keyword.toLowerCase().trim();
    results = results.filter(p =>
      p.title.toLowerCase().includes(kw) ||
      p.address.toLowerCase().includes(kw) ||
      p.city.toLowerCase().includes(kw) ||
      p.type.toLowerCase().includes(kw)
    );
  }

  // 2. City Filter
  if (criteria.city && criteria.city !== 'All') {
    results = results.filter(p => p.city.toLowerCase() === criteria.city.toLowerCase());
  }

  // 3. Property Type Filter
  if (criteria.type && criteria.type !== 'All') {
    results = results.filter(p => p.type.toLowerCase() === criteria.type.toLowerCase());
  }

  // 4. Status Filter (For Sale / For Rent)
  if (criteria.status && criteria.status !== 'All') {
    results = results.filter(p => p.status.toLowerCase() === criteria.status.toLowerCase());
  }

  // 5. Bedrooms Filter
  if (criteria.bedrooms && criteria.bedrooms !== 'All') {
    const minBeds = Number(criteria.bedrooms);
    results = results.filter(p => p.bedrooms >= minBeds);
  }

  // 6. Bathrooms Filter
  if (criteria.bathrooms && criteria.bathrooms !== 'All') {
    const minBaths = Number(criteria.bathrooms);
    results = results.filter(p => p.bathrooms >= minBaths);
  }

  // 7. Max Price Filter
  if (criteria.maxPrice) {
    const maxP = Number(criteria.maxPrice);
    results = results.filter(p => p.priceValue <= maxP);
  }

  // 8. Sorting
  if (criteria.sortBy) {
    if (criteria.sortBy === 'price-asc') {
      results.sort((a, b) => a.priceValue - b.priceValue);
    } else if (criteria.sortBy === 'price-desc') {
      results.sort((a, b) => b.priceValue - a.priceValue);
    } else if (criteria.sortBy === 'latest') {
      results.sort((a, b) => (b.latest ? 1 : 0) - (a.latest ? 1 : 0) || b.id - a.id);
    }
  }

  return results;
}

export function initPropertiesPage() {
  const container = document.getElementById('propertiesGrid');
  if (!container) return;

  const countBadge = document.getElementById('propertiesCountBadge');

  // Filter inputs
  const keywordInput = document.getElementById('filterKeyword');
  const typeSelect = document.getElementById('filterType');
  const citySelect = document.getElementById('filterCity');
  const bedroomsSelect = document.getElementById('filterBedrooms');
  const bathroomsSelect = document.getElementById('filterBathrooms');
  const priceRange = document.getElementById('filterPriceRange');
  const priceValueLabel = document.getElementById('priceValueLabel');
  const sortSelect = document.getElementById('filterSort');
  const resetBtn = document.getElementById('resetFiltersBtn');

  // Check URL search parameters (e.g., from Home Hero search redirect)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('type') && typeSelect) typeSelect.value = urlParams.get('type');
  if (urlParams.has('city') && citySelect) citySelect.value = urlParams.get('city');
  if (urlParams.has('keyword') && keywordInput) keywordInput.value = urlParams.get('keyword');

  function updateView() {
    const criteria = {
      keyword: keywordInput ? keywordInput.value : '',
      type: typeSelect ? typeSelect.value : 'All',
      city: citySelect ? citySelect.value : 'All',
      bedrooms: bedroomsSelect ? bedroomsSelect.value : 'All',
      bathrooms: bathroomsSelect ? bathroomsSelect.value : 'All',
      maxPrice: priceRange ? priceRange.value : null,
      sortBy: sortSelect ? sortSelect.value : 'latest'
    };

    if (priceRange && priceValueLabel) {
      const val = Number(priceRange.value);
      priceValueLabel.textContent = `$${val.toLocaleString()}`;
    }

    const filtered = filterProperties(criteria);

    if (countBadge) {
      countBadge.textContent = `${filtered.length} Properties Found`;
    }

    container.style.transition = 'opacity 0.2s ease';
    container.style.opacity = '0';

    setTimeout(() => {
      if (filtered.length === 0) {
        container.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
            <i class="fa-solid fa-house-circle-xmark" style="font-size: 3.5rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
            <h3 style="margin-bottom: 0.5rem;">No Properties Match Your Search</h3>
            <p style="color: var(--text-muted); max-width: 450px; margin: 0 auto 1.5rem;">Try adjusting your location, price range, or filter options to find available listings.</p>
            <button id="noResultsResetBtn" class="btn btn-primary"><i class="fa-solid fa-rotate-left"></i> Reset All Filters</button>
          </div>
        `;
        const innerReset = document.getElementById('noResultsResetBtn');
        if (innerReset) innerReset.addEventListener('click', resetAll);
      } else {
        container.innerHTML = filtered.map(renderPropertyCard).join('');
        updateHeartIcons();
        // Immediately reveal newly rendered filtered cards for smooth appearance
        container.querySelectorAll('.reveal-up').forEach(card => card.classList.add('revealed'));
      }
      container.style.opacity = '1';
    }, 150);
  }

  function resetAll() {
    if (keywordInput) keywordInput.value = '';
    if (typeSelect) typeSelect.value = 'All';
    if (citySelect) citySelect.value = 'All';
    if (bedroomsSelect) bedroomsSelect.value = 'All';
    if (bathroomsSelect) bathroomsSelect.value = 'All';
    if (priceRange) priceRange.value = priceRange.max;
    if (sortSelect) sortSelect.value = 'latest';
    updateView();
  }

  // Event Listeners for real-time live search & filtering
  if (keywordInput) keywordInput.addEventListener('input', updateView);
  if (typeSelect) typeSelect.addEventListener('change', updateView);
  if (citySelect) citySelect.addEventListener('change', updateView);
  if (bedroomsSelect) bedroomsSelect.addEventListener('change', updateView);
  if (bathroomsSelect) bathroomsSelect.addEventListener('change', updateView);
  if (priceRange) priceRange.addEventListener('input', updateView);
  if (sortSelect) sortSelect.addEventListener('change', updateView);
  if (resetBtn) resetBtn.addEventListener('click', resetAll);

  updateView();
}
