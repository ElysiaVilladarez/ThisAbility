import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent implements OnInit {
  benefitsArray20 = null;
  benefitsArray5 = null;

  constructor() { }

  ngOnInit() {
    this.benefitsArray20 = [
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

    this.benefitsArray5 = [
      {
        imgUrl: '../../../assets/bg-placeholder.png',
        caption: 'basic necessities such as:',
        description: `rice, corn, bread, fresh or dried and canned fish and other marine products, fresh pork, beef<br>
        and poultry meat, fresh eggs, fresh and processed milk, infant formula, fresh vegetables, root<br>
        crops, coffee, sugar, cooking oil, salt, laundry soap, detergents, firewood, charcoal, candles<br>
        and other commodities as may be classified by the Department of Trade and Industry (DTI)<br>
        and the Department of Agriculture (DA)`
      },
      {
        imgUrl: '../../../assets/bg-placeholder.png',
        caption: 'prime commodities such as:',
        description: `fresh fruits, dried or processed or canned pork, beef and poultry, meat, dairy products not falling under basic<br>
        necessities, noodles, onions, garlic, diapers, herbicides, poultry, swine and cattle feeds, veterinary products<br>
        for poultry, swine and cattle feeds, veterinary products for poultry, swine and cattle, paper, school supplies,<br>
        nipa shingle, plyboard, construction nails, batteries, electrical supplies, light bulbs, steel wire and other<br>
        commodities that may be classified by the DTI and DA`
      }];
  }

}
