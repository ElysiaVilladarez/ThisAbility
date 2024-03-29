import { Component, OnInit, HostListener } from '@angular/core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from '../../services/ga/google-analytics.service';

declare var $: any;

@Component({
  selector: 'app-calculator-list',
  templateUrl: './calculator-list.component.html',
  styleUrls: ['./calculator-list.component.css']
})
export class CalculatorListComponent implements OnInit {
  calculatorArray = null;
  totalExpenses = 0;
  discountedExpenses = 0;

  displayedTotalExpenses = '0';
  displayedDiscountedExpenses = '0';

  currencyMask = createNumberMask({
    prefix: '₱',
    allowDecimal: true,
    integerLimit: 5
  });

  hasScrolledToLimit = false;

  constructor(private router: Router,
              private ga: GoogleAnalyticsService) { }

  ngOnInit() {
    this.ga.sendPageTracking('Discount_Calculator', '/calculator');
    this.calculatorArray = [
      {
        label: 'Grocery',
        total: 0,
        discount: 0,
        discountPercentage: .05
      },
      {
        label: 'Transportation',
        total: 0,
        discount: 0,
        discountPercentage: .20
      },
      {
        label: 'Medicine',
        total: 0,
        discount: 0,
        discountPercentage: .20
      },
      {
        label: 'Recreational',
        total: 0,
        discount: 0,
        discountPercentage: .20
      }
    ];
  }


  computeForDiscount(event) {
    const index = event.index;
    const totalPrice = event.totalPrice;

    this.calculatorArray[index].total = totalPrice;
    const discounted = (totalPrice - (totalPrice * this.calculatorArray[index].discountPercentage));
    this.calculatorArray[index].discount = parseFloat(discounted.toFixed(2));

    this.computeForTotal();
  }

  computeForTotal() {
    this.totalExpenses = 0;
    this.discountedExpenses = 0;
    this.calculatorArray.forEach(item => {
      this.totalExpenses += item.total;
      this.discountedExpenses += item.discount;
    });

    this.displayedTotalExpenses = parseFloat(this.totalExpenses.toFixed(2)).toLocaleString();
    this.displayedDiscountedExpenses = parseFloat(this.discountedExpenses.toFixed(2)).toLocaleString();
  }

  goToAbout() {
    this.router.navigateByUrl('/about');
  }

  toggleWithGreeting(tooltip, greeting: string) {
    if (tooltip.isOpen()) {
      tooltip.close();
    } else {
      tooltip.open({greeting});
    }
  }

  showTotalCalculatorModal() {
    $('#total-calculator-modal').modal('show');
    $('#total-calculator-mobile').hide();
  }

  closeCalculatorModal() {
    $('#total-calculator-modal').modal('hide');
    $('#total-calculator-mobile').show();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    const $lastList = document.getElementById(`calculatorArray-${this.calculatorArray.length - 1}`);
    const finallScrollHeight = $lastList.offsetHeight * (this.calculatorArray.length) + 200;
    if (window.pageYOffset > finallScrollHeight) {
      this.hasScrolledToLimit = true;
    } else {
      this.hasScrolledToLimit = false;
    }
  }
}
