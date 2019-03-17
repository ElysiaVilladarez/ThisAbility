import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './home/main/main.component';
import { CalculatorListComponent } from './calculator/calculator-list/calculator-list.component';
import { RegistrationProcessComponent } from './registration-process/registration-process.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'calculator', component: CalculatorListComponent },
  { path: 'registration-process', component: RegistrationProcessComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
