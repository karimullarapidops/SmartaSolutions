import { Component, OnInit } from '@angular/core';
import { fade } from '../animate';

@Component({
  selector: 'app-workday',
  templateUrl: './workday.component.html',
  styleUrls: ['./workday.component.css'],
  animations: [
    fade
  ]
})
export class WorkdayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
