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
  marginTop = 10;
  previousScroll = 0;
  hasShownOnce = false;
  hasHiddenOnce = false;

  constructor(@Inject(DOCUMENT) document) {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    const element = document.getElementById('header');
    const sliderElement = document.getElementById('slider');
    const calculatorElement = document.getElementById('calculator');
    const rpElement = document.getElementById('registration-process');
    const elementArray = [sliderElement, calculatorElement, rpElement];
     if (window.pageYOffset > element.offsetHeight) {
       this.marginnedElement(elementArray, element.offsetHeight + 'px');
        element.classList.add('box-shadow');
     } else if (document.querySelectorAll('.headroom--pinned').length === 1 && window.pageYOffset === 0) {
      this.removeMarginElement(elementArray);
        element.classList.remove('box-shadow');
     } else {
        element.classList.remove('box-shadow');
     }

    const element2 = document.getElementById('total-calculator-sticky');
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

  marginnedElement(elementArray: HTMLElement[], marginTop: string) {
    elementArray.forEach((e) => {
      if (e) {
        e.style.marginTop = marginTop;
      }
    });
  }

  removeMarginElement(elementArray: HTMLElement[]) {
    elementArray.forEach((e) => {
      if (e) {
        e.style.marginTop = '0px';
      }
    });
  }

}
