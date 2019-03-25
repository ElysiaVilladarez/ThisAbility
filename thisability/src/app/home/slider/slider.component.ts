import { Component, OnInit } from '@angular/core';
import { Helper } from '../../helper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  helper: Helper = new Helper();
  fbLink = Helper.fbLink;

  constructor() { }

  ngOnInit() {
  }

  goToAbout() {
    this.helper.goToAbout();
  }

  redirectToFBPage() {
    this.helper.redirectToFBPage();
  }

}
