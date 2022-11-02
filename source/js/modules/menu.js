const menu = () => {
  const navMain = $('.main-nav');

  $('.main-nav__toggle').on('click', function () {
    if (navMain.hasClass('is-closed')) {
      navMain.removeClass('is-closed');
      navMain.addClass('is-opened');
    } else {
      navMain.addClass('is-closed');
      navMain.removeClass('is-opened');
    }
  });
};
export {menu};
