import { Component, Input, OnInit } from '@angular/core';
import { FieldsetOption, IFieldsetOption } from '@shared/models/fieldset/option/fieldset-option';
import { AbstractControl, FormGroup } from '@angular/forms';

/**
 * COMPONENTE CON EL QUE GESTIONAN LOS INPUTS SELECT DE LOS FORMULARIOS
 */
@Component({
  selector: 'app-fieldset-input-select',
  templateUrl: './fieldset-input-select.component.html',
  styleUrls: ['./fieldset-input-select.component.sass']
})
export class FieldsetInputSelectComponent implements OnInit
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
   * ESTA PROPIEDAD NO SE UTILIZA, SE IMPLEMENTARIA PARA LOS FORMULARIOS DINAMICOS
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
   * TEXTO O LABEL QUE SE VA A MOSTRAR EN EL INPUT
   */
  @Input() label: string;
  /**
   * LISTA DE OPCIONES DE VALORES
   */
  @Input() options: FieldsetOption<any>[] | IFieldsetOption<any>[];

  constructor()
  { }

  /**
   * GENERA EL ID DEL DATALIST
   */
  ngOnInit(): void
  {
    this.options = this.options || [];
  }

  /**
   * DEVUELVE EL FORMCONTROL AL QUE ESTA VINCULADO EL INPUT
   */
  getFormControl(): AbstractControl
  {
    return this.form.get(this.key);
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
   * DEVUELVE EL TEXTO O LABEL QUE SE VA A MOSTRAR EN EL INPUT
   * POR DEFECTO DEVUELVE ''
   */
  getLabel(): string
  {
    return this.label || '';
  }

  // /**
  //  * DEVUELVE LA LISTA DE OPCIONES DE VALORES
  //  * POR DEFECTO []
  //  */
  // getOptions(): FieldsetOption<any>[] | IFieldsetOption<any>[]
  // {
  //   return this.options || [];
  // }

  /**
   * DEVUELVE LA CLASE CSS DEL TEMA DEL INPUT
   * POR DEFECTO DEVUELVE ''
   */
  getThemeClass(): string
  {
    return this.theme != null && this.theme !== '' ? 'fieldset--' + this.theme : '';
  }
}
