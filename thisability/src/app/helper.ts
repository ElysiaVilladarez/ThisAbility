declare var $: any;

export class Helper {

  public static fbLink = `https://www.facebook.com/ThisAbility-433169680560193/`;

  goToAbout() {
    const aboutDesktop = $('#about');
    const aboutMobile = $('#about-mobile');
    if (aboutDesktop.is(':visible')) {
      $('html, body').animate({
        scrollTop: parseInt(aboutDesktop.offset().top, 10)
      }, 1000);
    } else {
      $('html, body').animate({
        scrollTop: parseInt(aboutMobile.offset().top, 10)
      }, 1000);
    }
  }

  scrollToTop() {
    $('html, body').animate({
      scrollTop: 0
    }, 0);
  }

  redirectToFBPage() {
    $('#fb-redirect')[0].click();
  }
}
