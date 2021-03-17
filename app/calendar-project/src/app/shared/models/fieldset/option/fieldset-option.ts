/**
 * OPCIONES DE LOS FIELDSET
 * SE HA UTILIZADO EN SELECT, RADIO, DATALIST....
 */
export interface IFieldsetOption<T>
{
  /**
   * VALOR DE LA OPCION
   */
  value: T;
  /**
   * TEXTO QUE SE VA A MOSTRAR EN LA VISTA
   */
  label: string;
  /**
   * VARIABLE DE CONTROL PARA DESHABILITAR LA OPCION
   */
  disabled?: boolean;
}

/**
 * OPCIONES DE LOS FIELDSET
 * SE HA UTILIZADO EN SELECT, RADIO, DATALIST....
 */
export class FieldsetOption<T>
{
  /**
   * VALOR DE LA OPCION
   */
  public value: T;
  /**
   * TEXTO QUE SE VA A MOSTRAR EN LA VISTA
   */
  public label: string;
  /**
   * VARIABLE DE CONTROL PARA DESHABILITAR LA OPCION
   */
  public disabled: boolean;

  constructor(options: IFieldsetOption<T>) {
    this.value = options.value;
    this.label = options.label;
    this.disabled = options.disabled || false;
  }
}
