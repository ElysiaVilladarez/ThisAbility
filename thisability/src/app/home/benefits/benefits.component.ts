import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent implements OnInit {
  benefitsArray20 = null;
  benefitsArray5 = null;
  eligibilityArray = null;

  constructor() { }

  ngOnInit() {
    this.benefitsArray20 = [
    {
      imgUrl: '../../../assets/img/benefits-hotel.png',
      caption: 'Hotels and Similar Lodging<br>Establishments'
    },
    {
      imgUrl: '../../../assets/img/benefits-restaurant.png',
      caption: 'Restaurants'
    },
    {
      imgUrl: '../../../assets/img/benefits-recreation.png',
      caption: 'Recreation Centers'
    },
    {
      imgUrl: '../../../assets/img/benefits-theater.png',
      caption: 'Theaters and Other Similar<br>Places of Culture, Leisure<br>and Amusement'
    },
    {
      imgUrl: '../../../assets/img/benefits-medicine.png',
      caption: 'Medicine'
    },
    {
      imgUrl: '../../../assets/img/benefits-dental.png',
      caption: 'Medical and Dental Services'
    },
    {
      imgUrl: '../../../assets/img/benefits-travel.png',
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
        caption: 'BASIC NECESSITIES SUCH AS:',
        description: `rice, corn, bread, fresh or dried and canned fish and other marine products, fresh pork, beef
        and poultry meat, fresh eggs, fresh and processed milk, infant formula, fresh vegetables, root
        crops, coffee, sugar, cooking oil, salt, laundry soap, detergents, firewood, charcoal, candles
        and other commodities as may be classified by the Department of Trade and Industry (DTI)
        and the Department of Agriculture (DA)`
      },
      {
        caption: 'PRIME COMMODITIES SUCH AS:',
        description: `fresh fruits, dried or processed or canned pork, beef and poultry, meat, dairy products not falling under basic
        necessities, noodles, onions, garlic, diapers, herbicides, poultry, swine and cattle feeds, veterinary products
        for poultry, swine and cattle feeds, veterinary products for poultry, swine and cattle, paper, school supplies,
        nipa shingle, plyboard, construction nails, batteries, electrical supplies, light bulbs, steel wire and other
        commodities that may be classified by the DTI and DA`
      }];


      // const photoWidth = $('.benefit20-item img').width();
      // $('.benefit20-item img').css({'height': photoWidth + 'px'});


      this.eligibilityArray = [
        {
          caption: 'VISUAL IMPAIRMENT',
          description: `There is still no specific threshold in determining who are visually impaired,
          however, if the applicant’s eyes are discernible to be blind, there is no need for the applicant
          to bring a clinical abstract as proof of one’s disability.`
        },
        {
          caption: 'HEARING LOSS',
          description: `There are various degrees of hearing impairment, however if one’s inability to hear is apparent,
                    there is no need to bring a clinical abstract.`
        },
        {
          caption: 'ORTHOPEDIC DISABILITY',
          description: `This includes people who have had amputations, bone deficiencies. and dwarfism.`
        },
        {
          caption: 'PSYCHOSOCIAL DISABILITY',
          description: `This includes people who have psychological and social problems. This disability is not apparent,
                  thus the need to present a clinical abstract upon registering.`
        },
        {
          caption: 'LEARNING DISABILITY',
          description: `Learning disability is something that interferes with someone’s ability to learn basic concepts taught in school
          (such as math and science) and knowledge that will help the person cope with everyday life.`
        },
        {
          caption: 'CHRONIC ILLNESS',
          description: `These are illnesses that have been known to cause disability when a complication sets in. One examples is diabetes.
                However, some chronic illness are not apparent, thus the need for a clinical abstract.`
        },
        {
          caption: 'MENTAL DISABILITY',
          description: `These are people diagnosed with a mental illness. Some mental illness can be apparent,
          but for those who are not, a clinical abstract is needed in registering. Included in this category are people
          with down syndrome, bi-polar disorder, post traumatic stress disorder, and schizophrenia.`
        }
      ];
  }

}
