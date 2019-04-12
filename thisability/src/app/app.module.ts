import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './home/main/main.component';
import { SliderComponent } from './home/slider/slider.component';
import { BenefitsComponent } from './home/benefits/benefits.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationProcessComponent } from './registration-process/registration-process.component';
import { CalculatorListComponent } from './calculator/calculator-list/calculator-list.component';
import { CalculatorItemComponent } from './calculator/calculator-item/calculator-item.component';
import { CalculatorRowComponent } from './calculator/calculator-row/calculator-row.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleAnalyticsService } from './services/ga/google-analytics.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadroomModule } from '@ctrl/ngx-headroom';
import { NonZeroDirective } from './directives/non-zero/non-zero.directive';
import { TotalCalculatorComponent } from './calculator/total-calculator/total-calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SliderComponent,
    BenefitsComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationProcessComponent,
    CalculatorListComponent,
    CalculatorItemComponent,
    CalculatorRowComponent,
    NonZeroDirective,
    TotalCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgbTooltipModule,
    BrowserAnimationsModule,
    HeadroomModule
  ],
  providers: [GoogleAnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
