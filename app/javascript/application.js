// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "vendors/moment"
import "vendors/chart"
import "vendors/alpinejs.min"
import "vendors/chartjs-adapter-moment"
import "vendors/flatpickr"

document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('dark-mode') === 'false' || !('dark-mode' in localStorage)) {
      document.querySelector('html').classList.remove('dark');
      document.querySelector('html').style.colorScheme = 'light';
  } else {
      document.querySelector('html').classList.add('dark');
      document.querySelector('html').style.colorScheme = 'dark';
  }

  if (localStorage.getItem('sidebar-expanded') == 'true') {
    document.querySelector('body').classList.add('sidebar-expanded');
  } else {
        document.querySelector('body').classList.remove('sidebar-expanded');
  }
});

