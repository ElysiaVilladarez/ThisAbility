declare var $: any;

export class Helper {

  goToAbout() {
    $('html, body').animate({
      scrollTop: parseInt($('#about').offset().top, 10) - 95
    }, 1000);
  }

  scrollToTop() {
    $('html, body').animate({
      scrollTop: 0
    }, 0);
  }
}
