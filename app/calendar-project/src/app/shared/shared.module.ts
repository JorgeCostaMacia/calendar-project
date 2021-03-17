import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

/** COMPONENTS BUTTON */
import { ButtonComponent } from './components/button/button.component';
import { ButtonTextComponent } from './components/button-text/button-text.component';

/** COMPONENTS FIELDSET */
import { FieldsetLabelComponent } from './components/fieldset-label/fieldset-label.component';
import { FieldsetErrorComponent } from './components/fieldset-error/fieldset-error.component';
import { FieldsetInputDateComponent } from './components/fieldset-input-date/fieldset-input-date.component';
import { FieldsetInputSelectComponent } from './components/fieldset-input-select/fieldset-input-select.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonTextComponent,
    FieldsetErrorComponent,
    FieldsetInputDateComponent,
    FieldsetInputSelectComponent,
    FieldsetLabelComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    ButtonComponent,
    ButtonTextComponent,
    FieldsetErrorComponent,
    FieldsetInputDateComponent,
    FieldsetInputSelectComponent,
    FieldsetLabelComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
