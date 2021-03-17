import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FieldsetOption, IFieldsetOption } from '@shared/models/fieldset/option/fieldset-option';

/**
 * COMPONENTE CON EL QUE GESTIONAN LOS INPUTS DATE Y DATETIME DE LOS FORMULARIOS
 */
@Component({
  selector: 'app-fieldset-input-date',
  templateUrl: './fieldset-input-date.component.html',
  styleUrls: ['./fieldset-input-date.component.sass']
})
export class FieldsetInputDateComponent implements OnInit
{
  /**
   * TEMA CON EL QUE SE VA A MOSTRAR EL INPUT
   * primary | secondary | info | success | warning | danger
   */
  @Input() theme: string;
  /**
   * FORMULARIO AL QUE ESTA VINCULADO EL INPUT
   */
  @Input() form: FormGroup;
  /**
   * TIPO DE INPUT
   * date | datetime-local
   */
  @Input() type: string;
  /**
   * ID DEL FORMCONTROL DEL FORMULARIO AL QUE ESTA VINCULADO EL INPUT
   */
  @Input() key: string;
  /**
   * HTML TITLE, TEXTO QUE SE VA A VER AL HACER HOVER SOBRE LA COLUMNA
   */
  @Input() title: string;
  /**
   * TEXTO O LABEL QUE SE VA A MOSTRAR EN EL INPUT CUANDO TENGA VALOR
   */
  @Input() label: string;
  /**
   * TEXTO O LABEL QUE SE VA A MOSTRAR EN EL INTERIOR DEL INPUT CUANDO NO TENGA VALOR
   */
  @Input() placeholder: string;
  /**
   * FECHA EN STRING, VALOR MINIMO CON EL QUE DESHABILITAR LA SELECCION DE FECHAS DESDE EL VALOR MINIMO
   */
  @Input() min: string;
  /**
   * FECHA EN STRING, VALOR MAXIMO CON EL QUE DESHABILITAR LA SELECCION DE FECHAS HASTA EL VALOR MAXIMO
   */
  @Input() max: string;
  /**
   * LISTA DE OPCIONES/SUGERENCIAS CON FECHAS PARA EL DATALIST
   */
  @Input() options: FieldsetOption<string>[] | IFieldsetOption<string>[];

  /**
   * ID DEL DATALIST
   * SE GENERA ALEATORIO Y SE VINCULA AL INPUT
   */
  public datalistId: string;

  constructor()
  { }

  /**
   * GENERA EL ID DEL DATALIST
   */
  ngOnInit()
  {
    this.datalistId = 'fieldsetNumberDatalist' +  this.key + Math.round(Math.random() * (1000000000 - 1) + 1);
  }

  /**
   * DEVUELVE EL FORMCONTROL AL QUE ESTA VINCULADO EL INPUT
   */
  getFormControl(): AbstractControl
  {
    return this.form.get(this.key);
  }

  /**
   * DEVUELVE EL TIPO DEL INPUT
   * POR DEFECTO date
   */
  getType(): string
  {
    return this.type || 'date';
  }

  /**
   * DEVUELVE EL TITLE DEL INPUT
   * POR DEFECTO ''
   */
  getTitle(): string
  {
    return this.title || '';
  }

  /**
   * DEVUELVE EL TEXTO O LABEL QUE SE VA A MOSTRAR EN EL INPUT CUANDO TENGA VALOR
   * POR DEFECTO DEVUELVE ''
   */
  getLabel(): string
  {
    return this.label || '';
  }

  /**
   * DEVUELVE EL TEXTO O LABEL QUE SE VA A MOSTRAR EN EL INTERIOR DEL INPUT CUANDO NO TENGA VALOR
   * POR DEFECTO ''
   */
  getPlaceholder(): string
  {
    return this.placeholder || '';
  }

  /**
   * DEVUELVE LA LISTA DE OPCIONES/SUGERENCIAS CON FECHAS PARA EL DATALIST
   * POR DEFECTO []
   */
  getOptions(): FieldsetOption<string>[] | IFieldsetOption<string>[]
  {
    return this.options || [];
  }

  /**
   * DEVUELVE LA CLASE CSS DEL TEMA DEL INPUT
   * POR DEFECTO DEVUELVE ''
   */
  getThemeClass(): string
  {
    return this.theme != null && this.theme !== '' ? 'fieldset--' + this.theme : '';
  }
}
