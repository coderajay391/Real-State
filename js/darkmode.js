/* ==========================================================================
   Modern Real Estate Website - Dark / Light Mode Module
   LocalStorage Persistence & Theme Toggle Logic
   ========================================================================== */

export function initDarkMode() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const storedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Initial theme check (default to dark for Frosted Glass theme)
  let currentTheme = storedTheme ? storedTheme : 'dark';
  applyTheme(currentTheme);

  // Attach event listeners to all theme toggle buttons
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(currentTheme);
      localStorage.setItem('theme', currentTheme);
    });
  });
}

export function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');

  themeToggleBtns.forEach(btn => {
    const icon = btn.querySelector('i');
    if (icon) {
      if (theme === 'dark') {
        icon.className = 'fa-solid fa-sun';
        btn.setAttribute('aria-label', 'Switch to Light Mode');
      } else {
        icon.className = 'fa-solid fa-moon';
        btn.setAttribute('aria-label', 'Switch to Dark Mode');
      }
    }
  });
}
