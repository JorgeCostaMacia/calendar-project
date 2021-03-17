import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

/**
 * COMPONENTE BASE CON EL QUE SE MONTAN LOS BOTONES
 * SE PUEDE UTILIZAR INDEPENDIENTEMENTE PASANDOLE EL CONTENIDO DENTRO DE LAS ETIQUETAS
 * SE PUEDE UTILIZAR CON LOS OTROS BOTONES QUE EXTIENDEN LA FUNCIONALIDAD
 */
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit
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
   * REDONDEA EL BOTON
   */
  @Input() round: boolean;
  /**
   * FORMULARIO AL QUE ESTA VINCULADO EL BOTON
   * SIRVE PARA CONTROLAR EL DISABLED CUANDO EL FORMULARIO NO CUMPLA LAS CONDICIONES
   */
  @Input() form: FormGroup;

  constructor(private router: Router)
  { }

  ngOnInit(): void
  { }

  /**
   * AL HACER CLICK
   * SI TIENE UN linkHref, REDIRIGE A LA RUTA
   */
  onClick(): void
  {
    if (this.linkHref) {
      this.router.navigateByUrl(this.linkHref);
    }
  }

  /**
   * DEVUELVE EL TIPO DEL BOTON
   * POR DEFECTO button
   */
  getType(): string
  {
    return this.type && this.type !== '' ? this.type : 'button';
  }

  /**
   * DEVUELVE EL TITLE DEL BOTON
   * POR DEFECTO ''
   */
  getTitle(): string
  {
    return this.title && this.title !== '' ? this.title : '';
  }

  /**
   * DEVUELVE EL URL DEL ENLACE DEL BOTON
   * POR DEFECTO NULL
   */
  getLinkHref(): string
  {
    return this.disabled !== true ? this.linkHref : null;
  }

  /**
   * DEVUELVE SI EL BOTON ESTA DESHABILITADO
   * VALIDA SI EL BOTON HA DE ESTAR DESHABILITADO DE:
   * SI RECIBE DISABLED = TRUE, EL BOTON NO SE HABILITA HASTA QUE SE CAMBIE LA VARIABLE
   * SI NO RECIBE DISABLED Y RECIBE UN FORM, EL BOTON APARECE DESHABILITADO MIENTRAS EL FORMULARIO NO SEA VALIDO
   * POR DEFECTO DEVUELVE null
   */
  getDisabled(): boolean
  {
    return this.disabled === true || (this.form && !this.form.valid) ? true : null;
  }

  /**
   * DEVUELVE EL WIDTH DEL BOTON
   * POR DEFECTO DEVUELVE auto
   */
  getWidth(): string
  {
    return this.width ? this.width : 'auto';
  }

  /**
   * DEVUELVE LA CLASE CSS DEL TAMAÑO DEL BOTON
   * POR DEFECTO DEVUELVE ''
   */
  getSizeClass(): string
  {
    return this.size === 'xs' || this.size === 'lg' ? 'button--' + this.size : '';
  }

  /**
   * DEVUELVE LA CLASE CSS DEL TEMA DEL BOTON
   * POR DEFECTO DEVUELVE ''
   */
  getThemeClass(): string
  {
    return this.theme != null && this.theme !== '' ? 'button--' + this.theme : '';
  }

  /**
   * DEVUELVE LA CLASE CSS DE SOLID AL TEMA DEL BOTON
   * POR DEFECTO DEVUELVE ''
   */
  getSolidClass(): string
  {
    return this.theme != null && this.theme !== '' && this.solid ? 'button--solid' : '';
  }

  /**
   * DEVUELVE LA CLASE CSS DE BORDER AL TEMA DEL BOTON
   * PARA APLICAR EL ESTILO NO DEBE HABERSE APLICADO SOLID
   * POR DEFECTO DEVUELVE ''
   */
  getBorderClass(): string
  {
    return this.theme != null && this.theme !== '' && !this.solid && this.border ? 'button--border' : '';
  }

  /**
   * DEVUELVE LA CLASE CSS DE ROUND AL TEMA DEL BOTON
   * POR DEFECTO DEVUELVE ''
   */
  getRoundClass(): string
  {
    return this.round ? 'button--round' : '';
  }
}
