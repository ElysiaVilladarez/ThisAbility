import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { Helper } from '../helper';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  helper: Helper = new Helper();
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  goToAbout() {
    this.helper.goToAbout();
  }

}
