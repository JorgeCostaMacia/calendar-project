import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldsetOption } from '@shared/models/fieldset/option/fieldset-option';

@Component({
  selector: 'app-home-form-month',
  templateUrl: './form-month.component.html',
  styleUrls: ['./form-month.component.sass']
})
export class FormMonthComponent implements OnInit
{
  @Output() monthSelected: EventEmitter<number>;

  public form: FormGroup;
  public monthOptions: FieldsetOption<number>[];

  constructor() {
    this.monthSelected = new EventEmitter<number>();
  }

  ngOnInit(): void
  {
    this.iniOptions();
    this.iniForm();
  }

  /**
   * EL CAMBIO DE VALOR LO DETECTA AL HACER CLICK EN EL BOTON CARGAR, SINO NO TENIA SENTIDO EL BOTON.
   *
   * TAMBIEN SE PODRIA HACER CON: this.form.valueChanges.subscribe(value => {});
   * CAPTURAR CUANDO CAMBIA EL VALOR DEL FORMULARIO Y PROPAGAR FUERA EL VALOR
   */
  onSubmit(): void
  {
    if (this.form.valid) {
      this.monthSelected.emit(this.form.get('month').value);
    }
  }

  iniOptions(): void
  {
    this.monthOptions = [
      new FieldsetOption({
        value: -1,
        label: 'Selector de mes',
        disabled: true
      })
    ];

    const now = new Date();
    const year = now.getFullYear();

    for (let i = 0; i < 12; i++) {
      const aux = new Date(year, i, 1);

      this.monthOptions.push(
        new FieldsetOption({
          value: i + 1,
          label:  aux.toLocaleString('en', {month: 'long'})
        })
      );
    }
  }

  iniForm(): void
  {
    this.form = new FormGroup({
      month: new FormControl(-1, Validators.min(0))
    });
  }
}
