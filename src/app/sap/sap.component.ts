import { Component, OnInit } from '@angular/core';
import { fade } from '../animate';

@Component({
  selector: 'app-sap',
  templateUrl: './sap.component.html',
  styleUrls: ['./sap.component.css'],
  animations: [
    fade
  ]
})
export class SapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
