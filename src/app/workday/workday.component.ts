import { Component, OnInit } from '@angular/core';
import { slide } from '../animate';

@Component({
  selector: 'app-workday',
  templateUrl: './workday.component.html',
  styleUrls: ['./workday.component.css'],
  animations: [
    slide
  ]
})
export class WorkdayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
