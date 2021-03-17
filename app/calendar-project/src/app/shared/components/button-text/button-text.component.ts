import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

/**
 * EXTEND BUTTON
 * BOTON CON TEXTO
 */
@Component({
  selector: 'app-button-text',
  templateUrl: './button-text.component.html',
  styleUrls: ['./button-text.component.sass']
})
export class ButtonTextComponent implements OnInit
{
  /**
   * TEMA CON EL QUE SE VA A MOSTRAR EL BOTON
   * primary | secondary | info | success | warning | danger
   */
  @Input() theme: string;
  /**
   * TIPO DE BOTON
   * button | submit | reset...
   */
  @Input() type: string;
  /**
   * TAMAÑO DEL BOTON
   * POR DEFECTO SE PINTA EN MD
   * XS | MD | LG | null
   */
  @Input() size: string;
  /**
   * HTML TITLE, TEXTO QUE SE VA A VER AL HACER HOVER SOBRE LA COLUMNA
   */
  @Input() title: string;
  /**
   * TEXTO O LABEL QUE SE VA A MOSTRAR EN EL BOTON
   */
  @Input() text: string;
  /**
   * URL DEL ENLACE AL QUE APUNTA EL BOTON
   */
  @Input() linkHref: string;
  /**
   * TAMAÑO(WIDHT) DEL BOTON
   * POR DEFECTO SE PINTA EN auto
   * TAMAÑO + px | TAMAÑO + rem | TAMAÑO + % | auto
   */
  @Input() width: string;
  /**
   * VARIABLE DE CONTROL PARA DESHABILITAR LA OPCION
   * SI NO SE RECIBE VARIABLE Y SE RECIBE UN FORM, EL DISABLED SE GESTIONA CON LA VALIDACION DEL FORMULARIO
   */
  @Input() disabled: boolean;
  /**
   * VARIABLE DE CONTROL PARA UNA VARIANTE DEL TEMA CON EL QUE SE VA A MOSTRAR EL BOTON
   * RELLENA EL BOTON CON EL COLOR DEL TEMA
   */
  @Input() solid: boolean;
  /**
   * VARIABLE DE CONTROL PARA UNA VARIANTE DEL TEMA CON EL QUE SE VA A MOSTRAR EL BOTON
   * PINTA LOS BORDES DEL BOTON, SI SE PONE SOLID SE ANULA ESTA PROPIEDAD
   */
  @Input() border: boolean;
  /**
   * VARIABLE DE CONTROL PARA UNA VARIANTE DEL TEMA CON EL QUE SE VA A MOSTRAR EL BOTON
   * LIMITA EL TEXTO A UNA LINEA, PONE ... CON EL TEXTO QUE NO CABE
   */
  @Input() ellipsis: boolean;
  /**
   * FORMULARIO AL QUE ESTA VINCULADO EL BOTON
   * SIRVE PARA CONTROLAR EL DISABLED CUANDO EL FORMULARIO NO CUMPLA LAS CONDICIONES
   */
  @Input() form: FormGroup;

  constructor()
  { }

  ngOnInit(): void
  { }

  /**
   * DEVUELVE LA CLASE CSS DEL TAMAÑO DE LA FUENTE DEL BOTON
   * POR DEFECTO DEVUELVE ''
   */
  getSizeClass(): string
  {
    return this.size === 'xs' || this.size === 'lg' ? 'button--text--' + this.size : '';
  }

  /**
   * DEVUELVE LA CLASE CSS DE ELLIPSIS AL TEMA DEL BOTON
   * POR DEFECTO DEVUELVE ''
   */
  getEllipsisClass(): string
  {
    return this.ellipsis ? 'button--text--ellipsis' : '';
  }
}
