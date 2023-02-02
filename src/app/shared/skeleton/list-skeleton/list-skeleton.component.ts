import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-skeleton',
  templateUrl: './list-skeleton.component.html',
  styleUrls: ['./list-skeleton.component.scss']
})
export class ListSkeletonComponent implements OnInit {
@Input() type:string = '';
skeletonItems:any=[5,8,9,7];
skeletonItems2:any=[5,6,8,9,7];
  constructor() { }

  ngOnInit(): void {
  }

}
