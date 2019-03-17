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
    this.calculatorArray = [
      {
        label: 'Grocery',
        total: 0,
        discountPercentage: .05
      },
      {
        label: 'Transportation',
        total: 0,
        discountPercentage: .20
      },
      {
        label: 'Medicine',
        total: 0,
        discountPercentage: .20
      },
      {
        label: 'Recreational',
        total: 0,
        discountPercentage: .05
      }
    ];
  }

}
