$(function() {
  $('body').scroll(function() {
    const $navLinks = $('#navLinks');
    const $navContainer = $('#navContainer');
    $navLinks.toggleClass('collapsed', $(this).scrollTop() > $navContainer.height());
  });
});
