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
  itemCount = 1;

  itemCountDisplay = '1';

  currencyMask = createNumberMask({
    prefix: '₱',
    allowDecimal: true,
    integerLimit: 5
  });

  numberMask = createNumberMask({
    prefix: '',
    integerLimit: 5
  });

  constructor() { }

  ngOnInit() {
  }

  onPriceChanged(event) {
    const p = this.toCurrency(event.target.value);
    this.itemPrice = p;
    this.form.setValue((this.itemPrice * this.itemCount));
  }

  onCountChanged(event) {
    const c = parseInt(this.toCurrency(event.target.value).toString(), 10);
    this.itemCount = c;
    this.form.setValue((this.itemPrice * this.itemCount));
  }


  removeRow() {
    this.removingRow.emit(this.index);
  }

  toCurrency(numberString: string) {
    let number = numberString.replace('₱', '');
    number = number.replace(',', '');

    return parseFloat(number);
  }

  increaseCount() {
    this.itemCountDisplay = (this.itemCount + 1).toLocaleString();
    this.onCountChanged({ target: {value : this.itemCountDisplay }} );
  }

  decreaseCount() {
    this.itemCountDisplay = (this.itemCount - 1).toLocaleString();
    this.onCountChanged({ target: {value : this.itemCountDisplay }} );
  }
}
