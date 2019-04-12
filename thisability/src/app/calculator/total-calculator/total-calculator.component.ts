import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-total-calculator',
  templateUrl: './total-calculator.component.html',
  styleUrls: ['./total-calculator.component.css']
})
export class TotalCalculatorComponent implements OnInit {
  @Input() calculatorArray;
  @Input() isModal = false;

  @Output() closeModal = new EventEmitter();



  expensesTooltip = 'your total monthly expenses per category';
  discountedTooltip = 'your discounted expenses per category';
  totalExpensesTooltip = 'your overall expenses for the whole month';
  discountedExpensesTooltip = 'your overall expenses if discounted';

  constructor() { }

  ngOnInit() {
  }

  closeCalculatorModal() {
    this.closeModal.emit();
  }

}
