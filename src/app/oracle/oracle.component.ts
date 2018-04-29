import { Component, OnInit } from '@angular/core';
import { fade } from '../animate';

@Component({
  selector: 'app-oracle',
  templateUrl: './oracle.component.html',
  styleUrls: ['./oracle.component.css'],
  animations: [
    fade
  ]
})
export class OracleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
