import $ from 'jquery';
import Alpine from 'alpinejs';

window.Alpine = Alpine;
Alpine.start();
window.$ = $;
window.jQuery = $;


// To see this message, add the following to the `<head>` section in your
// views/layouts/application.html.erb
//
//    <%= vite_client_tag %>
//    <%= vite_javascript_tag 'application' %>
console.log('Vite ⚡️ Rails')
console.log('Visit the guide for more information: ', 'https://vite-ruby.netlify.app/guide/rails')


$(document).on('DOMContentLoaded', function() {
  setTimeout(function() {
    $('.alert').fadeOut();
  }, 5000);
})

$(document).on('DOMContentLoaded', function() {
  setTimeout(function() {
    $('.notice').fadeOut();
  }, 5000);
})
