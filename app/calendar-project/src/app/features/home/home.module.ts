import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FormMonthComponent } from './components/form-month/form-month.component';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { TableContentComponent } from './components/table-content/table-content.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FormMonthComponent, TableHeaderComponent, TableContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
