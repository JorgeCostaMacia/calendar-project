import { Component, Input, OnInit } from '@angular/core';

/**
 * COMPONENTE CON EL QUE GESTIONAN LOS LABELS DE LOS INPUTS
 */
@Component({
  selector: 'app-fieldset-label',
  templateUrl: './fieldset-label.component.html',
  styleUrls: ['./fieldset-label.component.sass']
})
export class FieldsetLabelComponent implements OnInit
{
  /**
   * TEXTO O LABEL QUE SE VA A MOSTRAR EN EL LABEL
   */
  @Input() text: string;
  /**
   * TEMA CON EL QUE SE VA A MOSTRAR EL LABEL
   * primary | secondary | info | success | warning | danger
   */
  @Input() theme: string;

  constructor()
  { }

  ngOnInit(): void
  { }

  /**
   * DEVUELVE EL TEXTO O LABEL QUE SE VA A MOSTRAR EN EL LABEL
   * POR DEFECTO DEVUELVE ''
   */
  getText(): string
  {
    return this.text ? this.text : '';
  }

  /**
   * DEVUELVE LA CLASE CSS DEL TEMA DEL LABEL
   * POR DEFECTO DEVUELVE ''
   */
  getThemeClass(): string
  {
    return this.theme != null && this.theme !== '' ? 'fieldset--label--' + this.theme : '';
  }
}
