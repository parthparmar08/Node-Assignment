import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaydatatypes',
  templateUrl: './displaydatatypes.component.html',
  styleUrls: ['./displaydatatypes.component.css']
})
export class DisplaydatatypesComponent implements OnInit {
  name : string = "hello world";
  age : number = 21;
  birthdate : Date = new Date('2001-09-29');
  constructor() { }

  ngOnInit(): void {
  }

}
