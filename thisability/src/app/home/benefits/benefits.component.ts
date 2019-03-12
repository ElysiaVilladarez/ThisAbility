import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent implements OnInit {
  benefitsArray = null;
  constructor() { }

  ngOnInit() {
    this.benefitsArray = [
    {
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'hotels and similar lodging<br>establishments'
    },
    {
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'restaurants'
    },
    {
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'recreation centers'
    },
    {
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'theaters and other similar<br>places of culture, leisure and<br>amusement'
    },
    {
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'medicine'
    },
    {
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'medical and dental services'
    },
    {
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'domestic air and sea travel'
    },
    {
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'public railways, skyways, and<br>other public utility vehicles'
    },
    {
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'funeral and burial services for<br>the death of the PWD'
    }];
  }

}
