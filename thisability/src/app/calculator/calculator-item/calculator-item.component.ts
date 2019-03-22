import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculator-item',
  templateUrl: './calculator-item.component.html',
  styleUrls: ['./calculator-item.component.css']
})
export class CalculatorItemComponent implements OnInit {
  @Input() index;
  @Input() label: String;

  @Input() formGroup: FormGroup;

  @Output() totalPriceChanging = new EventEmitter();


  keys: string[] = [];
  keyCounter = 0;

  constructor() { }

  ngOnInit() {
    this.reset();
  }

  addRow() {
    this.keyCounter++;
    this.keys.push(this.keyCounter.toString());
    this.formGroup.addControl(this.keyCounter.toString(), new FormControl());
  }

  removeRow(key: string) {
    this.formGroup.removeControl(key);
    this.keys = Object.keys(this.formGroup.controls);

    if (this.keys.length === 0) {
      this.addRow();
    }

  }

  reset() {
    this.keys = [];
    this.totalPriceChanging.emit({ index: this.index, totalPrice: 0 } );
    this.formGroup = new FormGroup({});
    this.addRow();
    this.formGroup.valueChanges.subscribe((value) => {
      let totalPrice = 0;
      this.keys.forEach(k => {
        if (this.formGroup.controls[k]) {
          totalPrice += parseFloat(this.formGroup.controls[k].value) || 0;
        }
      });

      this.totalPriceChanging.emit({ index: this.index, totalPrice: totalPrice } );
    });
  }
}
