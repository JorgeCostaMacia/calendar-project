import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.sass']
})
export class TableHeaderComponent implements OnInit, OnChanges
{
  @Input() month: number;

  public label: string;
  public year: number;
  public monthText: string;

  constructor()
  { }

  ngOnInit(): void
  {
    this.year = new Date().getFullYear();

    this.label = 'Seleccione un mes ' + this.year;
  }

  ngOnChanges(changes: SimpleChanges): void
  {
    if (changes.month && this.month > 0) {
      const aux = new Date(this.year, this.month - 1, 1);
      this.label = aux.toLocaleString('en', {month: 'long'}) + ' ' + this.year;
    }
  }
}
