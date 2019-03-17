import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculator-row',
  templateUrl: './calculator-row.component.html',
  styleUrls: ['./calculator-row.component.css']
})
export class CalculatorRowComponent implements OnInit {
  @Input() index = 0;

  @Output() removingRow = new EventEmitter();
  @Output() priceChanging = new EventEmitter();

  itemName: string;
  itemPrice: number;
  constructor() { }

  ngOnInit() {
  }

  onPriceChanged(event) {
    this.priceChanging.emit({
      index: this.index,
      price: event.target.value
    });
  }

  removeRow() {
    this.removingRow.emit(this.index);
  }

}
