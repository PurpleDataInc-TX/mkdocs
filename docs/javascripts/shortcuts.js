// Enhanced search and keyboard shortcuts for CloudPi documentation
document.addEventListener('DOMContentLoaded', function() {
  // Add placeholder to search input
  function addSearchPlaceholder() {
    const searchInput = document.querySelector('.md-search__input');
    if (searchInput) {
      searchInput.placeholder = 'Search documentation... (Ctrl+K)';
      searchInput.setAttribute('aria-label', 'Search CloudPi documentation');
    }
  }

  // Call immediately and after a short delay to ensure DOM is ready
  addSearchPlaceholder();
  setTimeout(addSearchPlaceholder, 500);

  // Add keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K or just "/" to focus search
    if (((e.ctrlKey || e.metaKey) && e.key === 'k') || e.key === '/') {
      e.preventDefault();
      const searchInput = document.querySelector('.md-search__input');
      if (searchInput) {
        searchInput.focus();
        // Open search if it's not already open
        const searchButton = document.querySelector('.md-search__icon');
        if (searchButton && !document.body.classList.contains('md-search--active')) {
          searchButton.click();
        }
      }
    }

    // Escape: Close search
    if (e.key === 'Escape') {
      const searchInput = document.querySelector('.md-search__input');
      if (searchInput && document.activeElement === searchInput) {
        searchInput.blur();
        // Close search overlay
        const searchOverlay = document.querySelector('.md-search__overlay');
        if (searchOverlay) {
          searchOverlay.click();
        }
      }
    }
  });

  // Highlight search input when hovering over search icon
  const searchIcon = document.querySelector('.md-search__icon');
  if (searchIcon) {
    searchIcon.addEventListener('mouseenter', function() {
      const searchInput = document.querySelector('.md-search__input');
      if (searchInput) {
        searchInput.style.borderColor = 'var(--md-accent-fg-color)';
      }
    });

    searchIcon.addEventListener('mouseleave', function() {
      const searchInput = document.querySelector('.md-search__input');
      if (searchInput && document.activeElement !== searchInput) {
        searchInput.style.borderColor = '';
      }
    });
  }
});
