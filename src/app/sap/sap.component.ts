import { Component, OnInit } from '@angular/core';
import { slide } from '../animate';

@Component({
  selector: 'app-sap',
  templateUrl: './sap.component.html',
  styleUrls: ['./sap.component.css'],
  animations: [
    slide
  ]
})
export class SapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
