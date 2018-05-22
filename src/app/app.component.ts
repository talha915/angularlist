import { Component } from '@angular/core';
import { RecordsService } from './records.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  records={};
  constructor(private myFirstService: RecordsService){

  }
  ngOnInit(){
    this.records = this.myFirstService.getData(); 
    console.log(this.records)
  }
}
