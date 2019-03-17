import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

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
            this.footerLink.labelLeft = 'DISCOUNT CALCULATOR';
            this.footerLink.labelRight = 'REGISTRATION PROCESS';
            this.footerLink.routerLinkLeft = '/calculator';
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

}
