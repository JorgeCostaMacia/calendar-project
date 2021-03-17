import { Component, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

/**
 * COMPONENTE CON EL QUE SE MUESTRAN LOS ERRORES DE VALIDACION DE LOS FORMULARIOS
 */
@Component({
  selector: 'app-fieldset-error',
  templateUrl: './fieldset-error.component.html',
  styleUrls: ['./fieldset-error.component.sass']
})
export class FieldsetErrorComponent implements OnInit
{
  /**
   * ERRORES DE VALICACION DE FORMULARIOS
   */
  @Input() validationError: ValidationErrors;

  constructor()
  { }

  ngOnInit(): void
  { }

  /**
   * DEVUELVE EL MENSAJE DEL PRIMER ERROR
   */
  getMessage(): string
  {
    if (this.validationError.min) {
      return '* Obligatorio';
    }
  }
}
