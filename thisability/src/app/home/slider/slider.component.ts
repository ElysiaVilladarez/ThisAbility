import { Component, OnInit } from '@angular/core';
import { Helper } from '../../helper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  helper: Helper = new Helper();

  constructor() { }

  ngOnInit() {
  }

  goToAbout() {
    this.helper.goToAbout();
  }

}
