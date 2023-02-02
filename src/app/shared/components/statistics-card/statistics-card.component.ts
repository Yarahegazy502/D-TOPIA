import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics-card',
  templateUrl: './statistics-card.component.html',
  styleUrls: ['./statistics-card.component.scss']
})
export class StatisticsCardComponent implements OnInit {
@Input() statistics:any;
responsiveOptions: any = [
  {
    breakpoint: '1024px',
    numVisible: 4,
    numScroll: 4
  },

  {
    breakpoint: '991px',
    numVisible: 3,
    numScroll: 3
  },
  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 2
  },
  {
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '375px',
    numVisible: 1,
    numScroll: 1
  }
];
  constructor() { }

  ngOnInit(): void {
  }

}
