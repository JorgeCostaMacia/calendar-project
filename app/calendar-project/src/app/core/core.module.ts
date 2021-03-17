import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
  /**
   * TIENE UN FILTRO PARA QUE SALTE EXCEPCION SI:
   * SE INTENTA INYECTAR MAS DE UNA VEZ
   * SE INYECTA EN UN MODULO QUE NO SEA ROOT
   */
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule)
  {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
