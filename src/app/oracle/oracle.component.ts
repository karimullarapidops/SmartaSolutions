import { Component, OnInit } from '@angular/core';
import { slide } from '../animate';

@Component({
  selector: 'app-oracle',
  templateUrl: './oracle.component.html',
  styleUrls: ['./oracle.component.css'],
  animations: [
    slide
  ]
})
export class OracleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
