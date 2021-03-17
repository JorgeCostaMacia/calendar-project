import { Component, OnInit } from '@angular/core';
import * as WebFont from 'node_modules/webfontloader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit
{
  title = 'calendar-project';

  /**
   * 1. INICIALIZAMOS LA CARGA DE FUENTES
   */
  ngOnInit(): void
  {
    this.iniFonts();
  }

  /**
   * INICIALIZAMOS LA CARGA DE FUENTES
   */
  iniFonts(): void
  {
    WebFont.load({
      google: {
        families: ['Montserrat:400,600,700', 'Roboto:400,500,700']
      }
    });
  }
}
