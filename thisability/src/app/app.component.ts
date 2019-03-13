import { Component, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(@Inject(DOCUMENT) document) {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    const element = document.getElementById('header');
     if (window.pageYOffset > 0) {
       element.classList.add('sticky');
     } else {
      element.classList.remove('sticky');
     }
  }

}
