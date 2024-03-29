import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Helper } from '../helper';
import { GoogleAnalyticsService } from '../services/ga/google-analytics.service';
declare var $: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerLink = {
    labelLeft: '',
    labelRight: '',
    routerLinkLeft: '',
    routerLinkRight: ''
  };

  fbLink = Helper.fbLink;
  constructor(private router: Router,
              private ga: GoogleAnalyticsService) { }

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
      }

      if (event instanceof NavigationEnd) {
        switch (event.url) {
          case '/calculator': {
            this.footerLink.labelLeft = 'ABOUT';
            this.footerLink.labelRight = 'REGISTRATION PROCESS';
            this.footerLink.routerLinkLeft = '/about';
            this.footerLink.routerLinkRight = '/registration-process';
            break;
          }
          case '/registration-process': {
            this.footerLink.labelLeft = 'DISCOUNT CALCULATOR';
            this.footerLink.labelRight = 'ABOUT';
            this.footerLink.routerLinkLeft = '/calculator';
            this.footerLink.routerLinkRight = '/about';
            break;
          }
          default: {
            this.footerLink.labelLeft = '';
            this.footerLink.labelRight = 'DISCOUNT CALCULATOR';
            this.footerLink.routerLinkLeft = '';
            this.footerLink.routerLinkRight = '/calculator';
            break;
          }
        }
      }

      if (event instanceof NavigationError) {

          // Present error to user
          console.log(event.error);
      }
    });
  }

  redirectToFBPage() {
    this.ga.sendEventTracking('Registration_Process', 'redirect_to_fb');
    const helper = new Helper();
    helper.redirectToFBPage();
  }

  goToHome() {
    this.router.navigateByUrl('/about');
  }
}
