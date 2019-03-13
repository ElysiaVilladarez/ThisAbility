import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {
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
