import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNonZero]'
})
export class NonZeroDirective {

  @HostListener('input', ['$event']) onInputChange($event) {
    this.nonZero($event);
  }

  nonZero($event) {
    const intValue = parseInt($event.target.value, 10);
    if (isNaN(intValue) || !intValue) {
      $event.target.value = '1';
      $event.preventDefault();
      return false;
    }
    return true;
  }
}
