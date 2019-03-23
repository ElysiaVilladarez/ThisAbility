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
    console.log('redirect to fb');
    $('#fb-redirect')[0].click();
  }

  goToHome() {
    this.router.navigateByUrl('/about');
  }
}
