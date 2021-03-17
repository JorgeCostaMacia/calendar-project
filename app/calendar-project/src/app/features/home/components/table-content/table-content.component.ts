import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.sass']
})
export class TableContentComponent implements OnInit, OnChanges
{
  @Input() month: number;
  public columns: any[];

  constructor()
  { }

  ngOnInit(): void
  { }

  ngOnChanges(changes: SimpleChanges): void
  {
    if (changes.month && this.month > 0) {
      this.columns = [];

      const year = new Date().getFullYear();
      const days = new Date(year, this.month, 0).getDate();
      const dayStart = new Date(year, this.month - 1, 1).getDay();

      let row = [];

      for (let i = 0; i < dayStart; i++) {
        if (row.length === 7) {
          this.columns.push(row);
          row = [];
        }

        row.push('');
      }

      for (let i = 1; i <= days; i++) {
        if (row.length === 7) {
          this.columns.push(row);
          row = [];
        }

        row.push(''  + i);
      }

      if (row.length === 7) {
        this.columns.push(row);
      } else if (row.length > 0) {
        for (let i = row.length; i < 7; i++) {
          row.push('');
        }
        this.columns.push(row);
      }
    }
  }
}
