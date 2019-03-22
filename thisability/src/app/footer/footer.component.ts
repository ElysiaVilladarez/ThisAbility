import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
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

  fbLink = `https://www.facebook.com/ThisAbility-433169680560193/`;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
      }

      if (event instanceof NavigationEnd) {
        switch (event.url) {
          case '/calculator': {
            this.footerLink.labelLeft = 'HOME';
            this.footerLink.labelRight = 'REGISTRATION PROCESS';
            this.footerLink.routerLinkLeft = '/home';
            this.footerLink.routerLinkRight = '/registration-process';
            break;
          }
          case '/registration-process': {
            this.footerLink.labelLeft = 'HOME';
            this.footerLink.labelRight = 'DISCOUNT CALCULATOR';
            this.footerLink.routerLinkLeft = '/home';
            this.footerLink.routerLinkRight = '/calculator';
            break;
          }
          default: {
            this.footerLink.labelLeft = '';
            this.footerLink.labelRight = 'REGISTRATION PROCESS';
            this.footerLink.routerLinkLeft = '';
            this.footerLink.routerLinkRight = '/registration-process';
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
    console.log('redirect to fb');
    $('#fb-redirect')[0].click();
  }
}
