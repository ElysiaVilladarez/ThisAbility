import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-list',
  templateUrl: './calculator-list.component.html',
  styleUrls: ['./calculator-list.component.css']
})
export class CalculatorListComponent implements OnInit {
  calculatorArray = null;
  constructor() { }

  ngOnInit() {
    this.calculatorArray = [{
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'Grocery'
    },
    {
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'Transportation'
    },
    {
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'Medicine'
    },
    {
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'Recreational'
    }];
  }

}
