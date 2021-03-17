import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit
{
  public monthSelected: number;

  constructor()
  {
    this.monthSelected = -1;
  }

  ngOnInit(): void
  { }

  onMonthSelected(month: number): void
  {
    this.monthSelected = month;
  }
}
