import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaycombo',
  templateUrl: './displaycombo.component.html',
  styleUrls: ['./displaycombo.component.css']
})
export class DisplaycomboComponent implements OnInit {
  listCombo : Array<String> = ["Apple", "Samsung", "Nokia", "Google"]
  constructor() { }

  ngOnInit(): void {
  }

}
