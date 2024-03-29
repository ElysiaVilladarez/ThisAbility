import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { Helper } from '../helper';
import { Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  helper: Helper = new Helper();
  isInHome = true;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
          this.helper.scrollToTop();
          this.closeNav();
          // Hide loading indicator
          switch (event.url) {
            case '/calculator': {
              this.isInHome = false;
              break;
            }
            case '/registration-process': {
              this.isInHome = false;
              break;
            }
            default: {
              this.isInHome = true;
              break;
            }
          }
      }

      if (event instanceof NavigationError) {
          // Hide loading indicator

          // Present error to user
          console.log(event.error);
      }
    });

    $('#overlay').unbind('click').on('click', () => {
      this.closeNav();
    });
  }

  ngAfterViewInit() {
  }

  goToAbout() {
    if (this.isInHome) {
      this.helper.goToAbout();
    } else {
      this.goToHome();
    }
  }

  goToHome() {
    this.router.navigateByUrl('/about');
  }

  openNav() {
    $('#side-nav').css('width', '80%');
    $('#overlay').show();
  }

  closeNav() {
    $('#side-nav').css('width', '0');
    $('#overlay').hide();
  }
}
