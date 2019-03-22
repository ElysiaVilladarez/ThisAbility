import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

@Component({
  selector: 'app-calculator-row',
  templateUrl: './calculator-row.component.html',
  styleUrls: ['./calculator-row.component.css']
})
export class CalculatorRowComponent implements OnInit {
  @Input() index = 0;
  @Input() form: FormControl;

  @Output() removingRow = new EventEmitter();

  itemName: string;
  itemPrice: number;

  currencyMask = createNumberMask({
    prefix: '₱',
    allowDecimal: true,
    integerLimit: 5
  });

  constructor() { }

  ngOnInit() {
  }

  onPriceChanged(event) {
    this.form.setValue(this.toCurrency(event.target.value));
  }

  removeRow() {
    this.removingRow.emit(this.index);
  }

  toCurrency(numberString: string) {
    let number = numberString.replace('₱', '');
    number = number.replace(',', '');

    return parseFloat(number);
  }
}
