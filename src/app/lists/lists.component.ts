import { Component, OnInit } from '@angular/core';
import {cribs} from '../data/list';
@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  /*template: 
  `
    <div>
      <input [(ngModel)]="name" type="text">
      {{name}}
    </div>
  `*/
})
export class ListsComponent implements OnInit {
  public name="";
  cribs: Array<any> = cribs;
  constructor() { }

  ngOnInit() {
  }

}
