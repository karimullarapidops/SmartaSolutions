import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  team=[
    { 'name':'Kay Garland', 'position':'Lead Designer', 'picture':'../../assets/images/1.jpg' },
    { 'name':'Larry Parker', 'position':'Lead Marketer', 'picture':'../../assets/images/2.jpg' },
    { 'name':'Diana Pertersen', 'position':'Lead Developer', 'picture':'../../assets/images/3.jpg' }
  ];


}
