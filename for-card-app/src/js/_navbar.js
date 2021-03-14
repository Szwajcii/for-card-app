$(document).ready(function() {
  const $menuLinks = $('#menuLinks');
  const $menuBtn = $('#menuBtn');

  $('body').scroll(function() {
    const $navLinks = $('#navLinks');
    const $navContainer = $('#navContainer');
    $navLinks.toggleClass('collapsed', $(this).scrollTop() > $navContainer.height());
    $menuLinks.toggleClass('hidden', $(this).scrollTop() > $navContainer.height());
  });
});
