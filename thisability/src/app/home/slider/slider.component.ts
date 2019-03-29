import { Component, OnInit } from '@angular/core';
import { Helper } from '../../helper';
import { GoogleAnalyticsService } from '../../services/ga/google-analytics.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  helper: Helper = new Helper();
  fbLink = Helper.fbLink;

  constructor(private ga: GoogleAnalyticsService) { }

  ngOnInit() {
  }

  goToAbout() {
    this.ga.sendPageTracking('About', 'learn_more');
    this.helper.goToAbout();
  }

  redirectToFBPage() {
    this.ga.sendPageTracking('About', 'redirect_to_fb');
    this.helper.redirectToFBPage();
  }

}
