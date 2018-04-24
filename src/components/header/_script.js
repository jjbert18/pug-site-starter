;(function($) {

  // global
  const $showClass = 'jsa-visible';

  // header
  const $menuMobileBtn = '.js-mobile-menu__icon';
  const $menuMain = '.header__menu ';

  $(document).ready(function () {
    mobileMenuBtnClick();
    menuDefault();
  });

  $(window).resize(function () {
    mobileMenuClose();
  });

  $(window).scroll(function () {
    menuDefault();
  });

  // === Mobile Menu Button === //
  // show/hide the drop down on click
  // prevent the body from scrolling when mobile menu is open
  function mobileMenuBtnClick() {
    $($menuMobileBtn).click(function () {
      $(this).toggleClass($showClass);
      $($menuMain).toggleClass($showClass);
      $('body').toggleClass('jsa-body-lock');
    });
  }

  // === Mobile Menu Close === //
  // in an $event close the menu and reset the btn icon
  function mobileMenuClose() {
    $($menuMobileBtn).removeClass($showClass);
    $($menuMain).removeClass($showClass);
  }

  // === Menu Scroll === //
  // if page is scrolled add class to the header
  function menuScroll() {
    if($(window).scrollTop() >= 1) {
      $('.header').addClass($showClass);
    } else if($(window).scrollTop() <= 0) {
      $('.header').removeClass($showClass);
    }
  }

  // === Menu Default === //
  // if page does not have hero, show background from start
  function menuDefault() {
    if(!$('section').hasClass('hero')) {
      $('.header').addClass($showClass);
    } else {
      menuScroll();
    }
  }
})(jQuery);
