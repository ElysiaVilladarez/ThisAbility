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
      caption: 'Hotels and Similar Lodging<br>Establishments'
    },
    {
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'Restaurants'
    },
    {
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'Recreation Centers'
    },
    {
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'Theaters and Other Similar<br>Places of Culture, Leisure<br>and Amusement'
    },
    {
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'Medicine'
    },
    {
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'Medical and Dental Services'
    },
    {
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'Domestic Air and Sea Travel'
    },
    {
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'Public Railways, Skyways,<br>and Other Public Utility<br>Vehicles'
    },
    {
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'Funeral and Burial Services<br>for the Death of the PWD'
    }];

    this.benefitsArray5 = [
      {
        imgUrl: '../../../assets/bg-placeholder.png',
        caption: 'BASIC NECESSITIES SUCH AS:',
        description: `rice, corn, bread, fresh or dried and canned fish and other marine products, fresh pork, beef<br>
        and poultry meat, fresh eggs, fresh and processed milk, infant formula, fresh vegetables, root<br>
        crops, coffee, sugar, cooking oil, salt, laundry soap, detergents, firewood, charcoal, candles<br>
        and other commodities as may be classified by the Department of Trade and Industry (DTI)<br>
        and the Department of Agriculture (DA)`
      },
      {
        imgUrl: '../../../assets/bg-placeholder.png',
        caption: 'PRIME COMMODITIES SUCH AS:',
        description: `fresh fruits, dried or processed or canned pork, beef and poultry, meat, dairy products not falling under basic<br>
        necessities, noodles, onions, garlic, diapers, herbicides, poultry, swine and cattle feeds, veterinary products<br>
        for poultry, swine and cattle feeds, veterinary products for poultry, swine and cattle, paper, school supplies,<br>
        nipa shingle, plyboard, construction nails, batteries, electrical supplies, light bulbs, steel wire and other<br>
        commodities that may be classified by the DTI and DA`
      }];
  }

}
