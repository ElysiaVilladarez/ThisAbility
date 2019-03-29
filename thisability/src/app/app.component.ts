import { Component, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  marginTop = 25;
  previousScroll = 0;
  hasShownOnce = false;
  hasHiddenOnce = false;

  constructor(@Inject(DOCUMENT) document) {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    const element = document.getElementById('header');
    element.classList.add('sticky');
    //  if (window.pageYOffset > 0) {
    //    element.classList.add('sticky');
    //  } else {
    //   element.classList.remove('sticky');
    //  }
    let scrollTop = $(document).scrollTop();

    if ( scrollTop < 0 ) {
        scrollTop = 0;
    }
    if ( scrollTop > $('body').height() - $(window).height() ) {
        scrollTop = $('body').height() - $(window).height();
    }

    // if (scrollTop >= this.previousScroll && scrollTop) {
    //     // scrolling down
    //     if ( !$(element).is( ':hidden' ) && !this.hasHiddenOnce) {
    //       $(element).slideUp('slow', () => {});
    //       this.hasHiddenOnce = true;
    //       this.hasShownOnce = false;
    //     }
    //     console.log('scrolling down');
    // } else {
    //     // scrolling up
    //     if ( $(element).is( ':hidden' ) && !this.hasShownOnce) {
    //       $(element).slideDown('slow', () => {});
    //       this.hasHiddenOnce = false;
    //       this.hasShownOnce = true;
    //     }
    //     console.log('scrolling up');
    // }
    const self = this;
    // if (!scrollTop && $(element).is( ':hidden' )) {
    //   $(element).slideDown('slow', () => {});
    // } else if (scrollTop > 0 && !$(element).is( ':hidden' ) ) {
    //   $(element).slideUp('slow', () => {});
    // }
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
        if (!$(element).is( ':hidden' ) && scrollTop >= self.previousScroll && scrollTop && !self.hasHiddenOnce) {
            $(element).slideUp(500, () => {});
            self.hasHiddenOnce = true;
            self.hasShownOnce = false;
        } else if ($(element).is( ':hidden' ) && (scrollTop < self.previousScroll || !scrollTop) && !self.hasShownOnce) {
            $(element).slideDown(500, () => {});
            self.hasHiddenOnce = false;
            self.hasShownOnce = true;
        } else {
          self.previousScroll = scrollTop;
        }
    }, 50));


    const element2 = document.getElementById('total-calculator');
    if (element2) {
      const element2Height = element2.offsetHeight;
      const startOfSticky = (window.pageYOffset + element.offsetHeight);
      const endOfSticky = (window.pageYOffset + element.offsetHeight + element2Height);
      const calculatorList = document.querySelectorAll('.calculator-list')[0];
      // console.log(endOfSticky);
      // console.log(calculatorList.scrollHeight);
      if (startOfSticky > (element2.scrollHeight - element.offsetHeight)) {
      // && endOfSticky < calculatorList.scrollHeight) {
        // else if (endOfSticky >= calculatorList.scrollHeight) {
      //   element2.classList.remove('sticky');
      //   element2.classList.add('fixed');
      // }
        element2.classList.remove('fixed');
        element2.classList.add('sticky');
        element2.style.top = element.offsetHeight + this.marginTop + 'px';
      } else {
       element2.classList.remove('sticky');
       element2.classList.remove('fixed');
      }
    }

    const element3 = document.getElementById('downloads');
    if (element3) {
      const hideWhenSticky = document.getElementById('hide-when-sticky');
      const startOfSticky = (window.pageYOffset - element.offsetHeight);
      if (startOfSticky > element3.scrollHeight) {
        element3.classList.add('sticky');
        hideWhenSticky.hidden = true;
        element3.style.top = element.offsetHeight + this.marginTop + 'px';
      } else {
        hideWhenSticky.hidden = false;
        element3.classList.remove('sticky');
      }
    }
  }

}
