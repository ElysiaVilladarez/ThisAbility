import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './home/main/main.component';
import { SliderComponent } from './home/slider/slider.component';
import { BenefitsComponent } from './home/benefits/benefits.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { CalculatorListComponent } from './calculator/calculator-list/calculator-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SliderComponent,
    BenefitsComponent,
    HeaderComponent,
    FooterComponent,
    CalculatorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
