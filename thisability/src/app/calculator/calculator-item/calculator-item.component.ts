import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-item',
  templateUrl: './calculator-item.component.html',
  styleUrls: ['./calculator-item.component.css']
})
export class CalculatorItemComponent implements OnInit {
  @Input() index;
  @Input() label: String;
  listOfPrices = [];

  constructor() { }

  ngOnInit() {
    this.addRow();
  }

  addRow() {
    this.listOfPrices.push(0);
  }

  removeRow(index: number) {
    this.listOfPrices.splice(index, 1);

    if (this.listOfPrices.length === 0) {
      this.addRow();
    }
  }

  reset() {
    this.listOfPrices = [];
    this.addRow();
  }

  priceChanged(event) {
    console.log(event);
    this.listOfPrices[event.index] = event.price;
    console.log(this.listOfPrices);
  }
}
